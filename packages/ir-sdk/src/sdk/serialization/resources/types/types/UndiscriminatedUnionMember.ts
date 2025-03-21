/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { WithDocs } from "../../commons/types/WithDocs";

export const UndiscriminatedUnionMember: core.serialization.ObjectSchema<
    serializers.UndiscriminatedUnionMember.Raw,
    FernIr.UndiscriminatedUnionMember
> = core.serialization
    .objectWithoutOptionalProperties({
        type: core.serialization.lazy(() => serializers.TypeReference),
    })
    .extend(WithDocs);

export declare namespace UndiscriminatedUnionMember {
    export interface Raw extends WithDocs.Raw {
        type: serializers.TypeReference.Raw;
    }
}
