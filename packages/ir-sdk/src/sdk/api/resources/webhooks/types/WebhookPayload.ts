/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../..";

export type WebhookPayload = FernIr.WebhookPayload.InlinedPayload | FernIr.WebhookPayload.Reference;

export declare namespace WebhookPayload {
    interface InlinedPayload extends FernIr.InlinedWebhookPayload, _Utils {
        type: "inlinedPayload";
    }

    interface Reference extends FernIr.WebhookPayloadReference, _Utils {
        type: "reference";
    }

    interface _Utils {
        _visit: <_Result>(visitor: FernIr.WebhookPayload._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        inlinedPayload: (value: FernIr.InlinedWebhookPayload) => _Result;
        reference: (value: FernIr.WebhookPayloadReference) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const WebhookPayload = {
    inlinedPayload: (value: FernIr.InlinedWebhookPayload): FernIr.WebhookPayload.InlinedPayload => {
        return {
            ...value,
            type: "inlinedPayload",
            _visit: function <_Result>(
                this: FernIr.WebhookPayload.InlinedPayload,
                visitor: FernIr.WebhookPayload._Visitor<_Result>
            ) {
                return FernIr.WebhookPayload._visit(this, visitor);
            },
        };
    },

    reference: (value: FernIr.WebhookPayloadReference): FernIr.WebhookPayload.Reference => {
        return {
            ...value,
            type: "reference",
            _visit: function <_Result>(
                this: FernIr.WebhookPayload.Reference,
                visitor: FernIr.WebhookPayload._Visitor<_Result>
            ) {
                return FernIr.WebhookPayload._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(value: FernIr.WebhookPayload, visitor: FernIr.WebhookPayload._Visitor<_Result>): _Result => {
        switch (value.type) {
            case "inlinedPayload":
                return visitor.inlinedPayload(value);
            case "reference":
                return visitor.reference(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;