/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernOpenapiIr from "../../..";

export type SecurityScheme =
    | FernOpenapiIr.SecurityScheme.Basic
    | FernOpenapiIr.SecurityScheme.Bearer
    | FernOpenapiIr.SecurityScheme.Header
    /**
     * parameter sent as a security scheme */
    | FernOpenapiIr.SecurityScheme.Query
    | FernOpenapiIr.SecurityScheme.Oauth;

export declare namespace SecurityScheme {
    interface Basic extends FernOpenapiIr.BasicSecurityScheme, _Utils {
        type: "basic";
    }

    interface Bearer extends FernOpenapiIr.BearerSecurityScheme, _Utils {
        type: "bearer";
    }

    interface Header extends FernOpenapiIr.HeaderSecurityScheme, _Utils {
        type: "header";
    }

    interface Query extends FernOpenapiIr.QuerySecurityScheme, _Utils {
        type: "query";
    }

    interface Oauth extends FernOpenapiIr.OauthSecurityScheme, _Utils {
        type: "oauth";
    }

    interface _Utils {
        _visit: <_Result>(visitor: FernOpenapiIr.SecurityScheme._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        basic: (value: FernOpenapiIr.BasicSecurityScheme) => _Result;
        bearer: (value: FernOpenapiIr.BearerSecurityScheme) => _Result;
        header: (value: FernOpenapiIr.HeaderSecurityScheme) => _Result;
        query: (value: FernOpenapiIr.QuerySecurityScheme) => _Result;
        oauth: (value: FernOpenapiIr.OauthSecurityScheme) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const SecurityScheme = {
    basic: (value: FernOpenapiIr.BasicSecurityScheme): FernOpenapiIr.SecurityScheme.Basic => {
        return {
            ...value,
            type: "basic",
            _visit: function <_Result>(
                this: FernOpenapiIr.SecurityScheme.Basic,
                visitor: FernOpenapiIr.SecurityScheme._Visitor<_Result>
            ) {
                return FernOpenapiIr.SecurityScheme._visit(this, visitor);
            },
        };
    },

    bearer: (value: FernOpenapiIr.BearerSecurityScheme): FernOpenapiIr.SecurityScheme.Bearer => {
        return {
            ...value,
            type: "bearer",
            _visit: function <_Result>(
                this: FernOpenapiIr.SecurityScheme.Bearer,
                visitor: FernOpenapiIr.SecurityScheme._Visitor<_Result>
            ) {
                return FernOpenapiIr.SecurityScheme._visit(this, visitor);
            },
        };
    },

    header: (value: FernOpenapiIr.HeaderSecurityScheme): FernOpenapiIr.SecurityScheme.Header => {
        return {
            ...value,
            type: "header",
            _visit: function <_Result>(
                this: FernOpenapiIr.SecurityScheme.Header,
                visitor: FernOpenapiIr.SecurityScheme._Visitor<_Result>
            ) {
                return FernOpenapiIr.SecurityScheme._visit(this, visitor);
            },
        };
    },

    query: (value: FernOpenapiIr.QuerySecurityScheme): FernOpenapiIr.SecurityScheme.Query => {
        return {
            ...value,
            type: "query",
            _visit: function <_Result>(
                this: FernOpenapiIr.SecurityScheme.Query,
                visitor: FernOpenapiIr.SecurityScheme._Visitor<_Result>
            ) {
                return FernOpenapiIr.SecurityScheme._visit(this, visitor);
            },
        };
    },

    oauth: (value: FernOpenapiIr.OauthSecurityScheme): FernOpenapiIr.SecurityScheme.Oauth => {
        return {
            ...value,
            type: "oauth",
            _visit: function <_Result>(
                this: FernOpenapiIr.SecurityScheme.Oauth,
                visitor: FernOpenapiIr.SecurityScheme._Visitor<_Result>
            ) {
                return FernOpenapiIr.SecurityScheme._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: FernOpenapiIr.SecurityScheme,
        visitor: FernOpenapiIr.SecurityScheme._Visitor<_Result>
    ): _Result => {
        switch (value.type) {
            case "basic":
                return visitor.basic(value);
            case "bearer":
                return visitor.bearer(value);
            case "header":
                return visitor.header(value);
            case "query":
                return visitor.query(value);
            case "oauth":
                return visitor.oauth(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;