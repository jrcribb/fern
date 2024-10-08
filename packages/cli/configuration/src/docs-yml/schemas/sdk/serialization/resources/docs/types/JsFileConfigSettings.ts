/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernDocsConfig from "../../../../api";
import * as core from "../../../../core";

export const JsFileConfigSettings: core.serialization.ObjectSchema<
    serializers.JsFileConfigSettings.Raw,
    FernDocsConfig.JsFileConfigSettings
> = core.serialization.object({
    path: core.serialization.string(),
    strategy: core.serialization.lazy(async () => (await import("../../..")).JsScriptStrategy).optional(),
});

export declare namespace JsFileConfigSettings {
    interface Raw {
        path: string;
        strategy?: serializers.JsScriptStrategy.Raw | null;
    }
}
