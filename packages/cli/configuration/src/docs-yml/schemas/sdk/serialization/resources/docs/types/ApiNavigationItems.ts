/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernDocsConfig from "../../../../api";
import * as core from "../../../../core";

export const ApiNavigationItems: core.serialization.Schema<
    serializers.ApiNavigationItems.Raw,
    FernDocsConfig.ApiNavigationItems
> = core.serialization.list(core.serialization.lazy(async () => (await import("../../..")).ApiNavigationItem));

export declare namespace ApiNavigationItems {
    type Raw = serializers.ApiNavigationItem.Raw[];
}