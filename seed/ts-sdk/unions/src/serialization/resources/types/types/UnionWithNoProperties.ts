/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedUnions from "../../../../api/index";
import * as core from "../../../../core";
import { Foo } from "./Foo";

export const UnionWithNoProperties: core.serialization.Schema<
    serializers.UnionWithNoProperties.Raw,
    SeedUnions.UnionWithNoProperties
> = core.serialization
    .union("type", {
        foo: Foo,
        empty: core.serialization.object({}),
    })
    .transform<SeedUnions.UnionWithNoProperties>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace UnionWithNoProperties {
    export type Raw = UnionWithNoProperties.Foo | UnionWithNoProperties.Empty;

    export interface Foo extends Foo.Raw {
        type: "foo";
    }

    export interface Empty {
        type: "empty";
    }
}
