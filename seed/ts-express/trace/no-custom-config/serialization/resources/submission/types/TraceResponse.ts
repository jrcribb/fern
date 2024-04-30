/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const TraceResponse: core.serialization.ObjectSchema<serializers.TraceResponse.Raw, SeedTrace.TraceResponse> =
    core.serialization.object({
        submissionId: core.serialization.lazy(async () => (await import("../../..")).SubmissionId),
        lineNumber: core.serialization.number(),
        returnValue: core.serialization.lazy(async () => (await import("../../..")).DebugVariableValue).optional(),
        expressionLocation: core.serialization
            .lazyObject(async () => (await import("../../..")).ExpressionLocation)
            .optional(),
        stack: core.serialization.lazyObject(async () => (await import("../../..")).StackInformation),
        stdout: core.serialization.string().optional(),
    });

export declare namespace TraceResponse {
    interface Raw {
        submissionId: serializers.SubmissionId.Raw;
        lineNumber: number;
        returnValue?: serializers.DebugVariableValue.Raw | null;
        expressionLocation?: serializers.ExpressionLocation.Raw | null;
        stack: serializers.StackInformation.Raw;
        stdout?: string | null;
    }
}