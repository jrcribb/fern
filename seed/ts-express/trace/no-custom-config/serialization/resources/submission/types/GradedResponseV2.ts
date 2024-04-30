/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const GradedResponseV2: core.serialization.ObjectSchema<
    serializers.GradedResponseV2.Raw,
    SeedTrace.GradedResponseV2
> = core.serialization.object({
    submissionId: core.serialization.lazy(async () => (await import("../../..")).SubmissionId),
    testCases: core.serialization.record(
        core.serialization.lazy(async () => (await import("../../..")).v2.TestCaseId),
        core.serialization.lazy(async () => (await import("../../..")).TestCaseGrade)
    ),
});

export declare namespace GradedResponseV2 {
    interface Raw {
        submissionId: serializers.SubmissionId.Raw;
        testCases: Record<serializers.v2.TestCaseId.Raw, serializers.TestCaseGrade.Raw>;
    }
}