/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { JsonResponse } from "./JsonResponse";
import { FileDownloadResponse } from "./FileDownloadResponse";
import { TextResponse } from "./TextResponse";

export const NonStreamHttpResponseBody: core.serialization.Schema<
    serializers.NonStreamHttpResponseBody.Raw,
    FernIr.NonStreamHttpResponseBody
> = core.serialization
    .union("type", {
        json: core.serialization.object({
            value: JsonResponse,
        }),
        fileDownload: FileDownloadResponse,
        text: TextResponse,
    })
    .transform<FernIr.NonStreamHttpResponseBody>({
        transform: (value) => {
            switch (value.type) {
                case "json":
                    return FernIr.NonStreamHttpResponseBody.json(value.value);
                case "fileDownload":
                    return FernIr.NonStreamHttpResponseBody.fileDownload(value);
                case "text":
                    return FernIr.NonStreamHttpResponseBody.text(value);
                default:
                    return value as FernIr.NonStreamHttpResponseBody;
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace NonStreamHttpResponseBody {
    type Raw = NonStreamHttpResponseBody.Json | NonStreamHttpResponseBody.FileDownload | NonStreamHttpResponseBody.Text;

    interface Json {
        type: "json";
        value: JsonResponse.Raw;
    }

    interface FileDownload extends FileDownloadResponse.Raw {
        type: "fileDownload";
    }

    interface Text extends TextResponse.Raw {
        type: "text";
    }
}
