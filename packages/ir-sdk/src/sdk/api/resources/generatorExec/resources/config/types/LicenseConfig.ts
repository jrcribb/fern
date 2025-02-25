/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../../../../index";

export type LicenseConfig = FernIr.generatorExec.LicenseConfig.Basic | FernIr.generatorExec.LicenseConfig.Custom;

export namespace LicenseConfig {
    export interface Basic extends FernIr.generatorExec.BasicLicense, _Utils {
        type: "basic";
    }

    export interface Custom extends FernIr.generatorExec.CustomLicense, _Utils {
        type: "custom";
    }

    export interface _Utils {
        _visit: <_Result>(visitor: FernIr.generatorExec.LicenseConfig._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        basic: (value: FernIr.generatorExec.BasicLicense) => _Result;
        custom: (value: FernIr.generatorExec.CustomLicense) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const LicenseConfig = {
    basic: (value: FernIr.generatorExec.BasicLicense): FernIr.generatorExec.LicenseConfig.Basic => {
        return {
            ...value,
            type: "basic",
            _visit: function <_Result>(
                this: FernIr.generatorExec.LicenseConfig.Basic,
                visitor: FernIr.generatorExec.LicenseConfig._Visitor<_Result>,
            ) {
                return FernIr.generatorExec.LicenseConfig._visit(this, visitor);
            },
        };
    },

    custom: (value: FernIr.generatorExec.CustomLicense): FernIr.generatorExec.LicenseConfig.Custom => {
        return {
            ...value,
            type: "custom",
            _visit: function <_Result>(
                this: FernIr.generatorExec.LicenseConfig.Custom,
                visitor: FernIr.generatorExec.LicenseConfig._Visitor<_Result>,
            ) {
                return FernIr.generatorExec.LicenseConfig._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: FernIr.generatorExec.LicenseConfig,
        visitor: FernIr.generatorExec.LicenseConfig._Visitor<_Result>,
    ): _Result => {
        switch (value.type) {
            case "basic":
                return visitor.basic(value);
            case "custom":
                return visitor.custom(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
