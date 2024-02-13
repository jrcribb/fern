/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Fiddle from "../../../../../../api";
import * as core from "../../../../../../core";

export const Request: core.serialization.Schema<
    serializers.endpoints.container.getAndReturnListOfObjects.Request.Raw,
    Fiddle.types.ObjectWithRequiredField[]
> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("../../../../..")).types.ObjectWithRequiredField)
);

export declare namespace Request {
    type Raw = serializers.types.ObjectWithRequiredField.Raw[];
}

export const Response: core.serialization.Schema<
    serializers.endpoints.container.getAndReturnListOfObjects.Response.Raw,
    Fiddle.types.ObjectWithRequiredField[]
> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("../../../../..")).types.ObjectWithRequiredField)
);

export declare namespace Response {
    type Raw = serializers.types.ObjectWithRequiredField.Raw[];
}