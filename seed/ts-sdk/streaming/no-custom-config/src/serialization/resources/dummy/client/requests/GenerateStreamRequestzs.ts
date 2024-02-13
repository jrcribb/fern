/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as SeedStreaming from "../../../../../api";
import * as core from "../../../../../core";

export const GenerateStreamRequestzs: core.serialization.Schema<
    serializers.GenerateStreamRequestzs.Raw,
    SeedStreaming.GenerateStreamRequestzs
> = core.serialization.object({
    numEvents: core.serialization.property("num_events", core.serialization.number()),
});

export declare namespace GenerateStreamRequestzs {
    interface Raw {
        num_events: number;
    }
}