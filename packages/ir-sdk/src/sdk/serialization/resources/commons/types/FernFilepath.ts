/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const FernFilepath: core.serialization.ObjectSchema<serializers.FernFilepath.Raw, FernIr.FernFilepath> =
    core.serialization.objectWithoutOptionalProperties({
        allParts: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Name)),
        packagePath: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).Name)
        ),
        file: core.serialization.lazyObject(async () => (await import("../../..")).Name).optional(),
    });

export declare namespace FernFilepath {
    interface Raw {
        allParts: serializers.Name.Raw[];
        packagePath: serializers.Name.Raw[];
        file?: serializers.Name.Raw | null;
    }
}
