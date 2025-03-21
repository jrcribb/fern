/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";
import { HttpInlineFileRequestBodyPropertySchema } from "./HttpInlineFileRequestBodyPropertySchema";

export const HttpInlineRequestBodyPropertySchema: core.serialization.Schema<
    serializers.HttpInlineRequestBodyPropertySchema.Raw,
    FernDefinition.HttpInlineRequestBodyPropertySchema
> = core.serialization.undiscriminatedUnion([core.serialization.string(), HttpInlineFileRequestBodyPropertySchema]);

export declare namespace HttpInlineRequestBodyPropertySchema {
    export type Raw = string | HttpInlineFileRequestBodyPropertySchema.Raw;
}
