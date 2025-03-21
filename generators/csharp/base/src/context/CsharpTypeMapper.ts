import { assertNever } from "@fern-api/core-utils";
import { BaseCsharpCustomConfigSchema, csharp } from "@fern-api/csharp-codegen";

import { FernIr } from "@fern-fern/ir-sdk";
import {
    ContainerType,
    DeclaredTypeName,
    Literal,
    Name,
    PrimitiveType,
    PrimitiveTypeV1,
    TypeId,
    TypeReference
} from "@fern-fern/ir-sdk/api";

import { AbstractCsharpGeneratorContext } from "./AbstractCsharpGeneratorContext";

export declare namespace CsharpTypeMapper {
    interface Args {
        reference: TypeReference;
        /* Defaults to false */
        unboxOptionals?: boolean;
        /* Defaults to false */
        fullyQualified?: boolean;
    }
}

export class CsharpTypeMapper {
    private context: AbstractCsharpGeneratorContext<BaseCsharpCustomConfigSchema>;

    constructor(context: AbstractCsharpGeneratorContext<BaseCsharpCustomConfigSchema>) {
        this.context = context;
    }

    public convert({ reference, unboxOptionals = false, fullyQualified = false }: CsharpTypeMapper.Args): csharp.Type {
        switch (reference.type) {
            case "container":
                return this.convertContainer({
                    container: reference.container,
                    unboxOptionals
                });
            case "named":
                return this.convertNamed({ named: reference, fullyQualified });
            case "primitive":
                return this.convertPrimitive(reference);
            case "unknown":
                return csharp.Type.object();
            default:
                assertNever(reference);
        }
    }

    public convertFromFileProperty({ property }: { property: FernIr.FileProperty }): csharp.Type {
        switch (property.type) {
            case "file": {
                const csharpType = csharp.Type.fileParam(this.context.getFileParamClassReference());
                return property.isOptional ? csharp.Type.optional(csharpType) : csharpType;
            }
            case "fileArray": {
                const csharpType = csharp.Type.list(csharp.Type.fileParam(this.context.getFileParamClassReference()));
                return property.isOptional ? csharp.Type.optional(csharpType) : csharpType;
            }
            default:
                assertNever(property);
        }
    }

    public convertToClassReference(
        declaredTypeName: { typeId: TypeId; name: Name },
        { fullyQualified }: { fullyQualified?: boolean } = {}
    ): csharp.ClassReference {
        const objectNamespace = this.context.getNamespaceForTypeId(declaredTypeName.typeId);
        return csharp.classReference({
            name: this.context.getPascalCaseSafeName(declaredTypeName.name),
            namespace: objectNamespace,
            fullyQualified
        });
    }

    private convertContainer({
        container,
        unboxOptionals
    }: {
        container: ContainerType;
        unboxOptionals: boolean;
    }): csharp.Type {
        switch (container.type) {
            case "list":
                return csharp.Type.list(this.convert({ reference: container.list, unboxOptionals: true }));
            case "map": {
                const key = this.convert({ reference: container.keyType });
                const value = this.convert({ reference: container.valueType });
                if (value.internalType.type === "object") {
                    // object map values should be nullable.
                    return csharp.Type.map(key, csharp.Type.optional(value));
                }
                return csharp.Type.map(key, value);
            }
            case "set":
                return csharp.Type.set(this.convert({ reference: container.set, unboxOptionals: true }));
            case "optional":
                return unboxOptionals
                    ? this.convert({ reference: container.optional, unboxOptionals })
                    : csharp.Type.optional(this.convert({ reference: container.optional }));
            case "nullable":
                return unboxOptionals
                    ? this.convert({ reference: container.nullable, unboxOptionals })
                    : csharp.Type.optional(this.convert({ reference: container.nullable }));
            case "literal":
                return this.convertLiteral({ literal: container.literal });
            default:
                assertNever(container);
        }
    }

    private convertPrimitive({ primitive }: { primitive: PrimitiveType }): csharp.Type {
        return PrimitiveTypeV1._visit<csharp.Type>(primitive.v1, {
            integer: () => csharp.Type.integer(),
            long: () => csharp.Type.long(),
            uint: () => csharp.Type.uint(),
            uint64: () => csharp.Type.ulong(),
            float: () => csharp.Type.float(),
            double: () => csharp.Type.double(),
            boolean: () => csharp.Type.boolean(),
            string: () => csharp.Type.string(),
            date: () => csharp.Type.dateOnly(),
            dateTime: () => csharp.Type.dateTime(),
            uuid: () => csharp.Type.string(),
            // https://learn.microsoft.com/en-us/dotnet/api/system.convert.tobase64string?view=net-8.0
            base64: () => csharp.Type.string(),
            bigInteger: () => csharp.Type.string(),
            _other: () => csharp.Type.object()
        });
    }

    private convertLiteral({ literal }: { literal: Literal }): csharp.Type {
        switch (literal.type) {
            case "boolean":
                return csharp.Type.boolean();
            case "string":
                return csharp.Type.string();
        }
    }

    private convertNamed({
        named,
        fullyQualified
    }: {
        named: DeclaredTypeName;
        fullyQualified?: boolean;
    }): csharp.Type {
        const objectClassReference = this.convertToClassReference(named, { fullyQualified });
        if (this.context.protobufResolver.isWellKnownProtobufType(named.typeId)) {
            if (this.context.protobufResolver.isWellKnownAnyProtobufType(named.typeId)) {
                return csharp.Type.object();
            }
            return csharp.Type.reference(objectClassReference);
        }
        const typeDeclaration = this.context.getTypeDeclarationOrThrow(named.typeId);
        switch (typeDeclaration.shape.type) {
            case "alias":
                return this.convert({ reference: typeDeclaration.shape.aliasOf });
            case "enum":
                return csharp.Type.reference(objectClassReference);
            case "object":
                return csharp.Type.reference(objectClassReference);
            case "union":
                if (this.context.shouldGenerateDiscriminatedUnions()) {
                    return csharp.Type.reference(objectClassReference);
                }
                return csharp.Type.object();
            case "undiscriminatedUnion": {
                return csharp.Type.oneOf(
                    typeDeclaration.shape.members.map((member) => {
                        return this.convert({ reference: member.type });
                    })
                );
            }
            default:
                assertNever(typeDeclaration.shape);
        }
    }
}
