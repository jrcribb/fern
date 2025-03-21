/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SeedObject from "../../api/index";
import * as core from "../../core";
import { AliasInlineValue } from "./AliasInlineValue";

export const AliasListInline: core.serialization.Schema<serializers.AliasListInline.Raw, SeedObject.AliasListInline> =
    core.serialization.list(AliasInlineValue);

export declare namespace AliasListInline {
    type Raw = AliasInlineValue.Raw[];
}
