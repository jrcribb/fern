# Seed TypeScript Library

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://github.com/fern-api/fern)
[![npm shield](https://img.shields.io/npm/v/@fern/trace)](https://www.npmjs.com/package/@fern/trace)

The Seed TypeScript library provides convenient access to the Seed API from TypeScript.

## Installation

```sh
npm i -s @fern/trace
```

## Usage

Instantiate and use the client with the following:

```typescript
import { SeedTraceClient } from "@fern/trace";

const seedTrace = new SeedTraceClient({ token: "YOUR_TOKEN", xRandomHeader: "YOUR_X_RANDOM_HEADER" });
await seedTrace.admin.updateTestSubmissionStatus("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
    type: "stopped",
});
```

## Request And Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply import them with the
following namespace:

```typescript
import { SeedTrace } from "@fern/trace";

const request: SeedTrace.StoreTracedTestCaseRequest = {
    ...
};
const response = await seedTrace.storeTracedTestCase(..., request);
```

## Exception Handling

When the API returns a non-success status code (4xx or 5xx response), a subclass of the following error
will be thrown.

```typescript
import { SeedTraceError } from '@fern/trace';

try {
    await seedTrace.updateTestSubmissionStatus(...);
} catch (err) {
    if (err instanceof SeedTraceError) {
        console.log(err.statusCode);
        console.log(err.message);
        console.log(err.body);
    }
}
```

## Retries

The SDK is instrumented with automatic retries with exponential backoff. A request will be retried as long
as the request is deemed retriable and the number of retry attempts has not grown larger than the configured
retry limit (default: 2).

A request is deemed retriable when any of the following HTTP status codes is returned:

-   [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) (Timeout)
-   [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) (Too Many Requests)
-   [5XX](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) (Internal Server Errors)

Use the `maxRetries` request option to configure this behavior.

```typescript
const response = await seedTrace.updateTestSubmissionStatus(..., {
    maxRetries: 0 // override maxRetries at the request level
});
```

## Timeouts

The SDK defaults to a 60 second timeout. Use the `timeoutInSeconds` option to configure this behavior.

```typescript
const response = await seedTrace.updateTestSubmissionStatus(..., {
    timeoutInSeconds: 30 // override timeout to 30s
});
```

## Aborting Requests

The SDK allows users to abort requests at any point by passing in an abort signal.

```typescript
const controller = new AbortController();
const response = await seedTrace.updateTestSubmissionStatus(..., {
    abortSignal: controller.signal
});
controller.abort(); // aborts the request
```

## Runtime Compatibility

The SDK defaults to `node-fetch` but will use the global fetch client if present. The SDK works in the following
runtimes:

-   Node.js 18+
-   Vercel
-   Cloudflare Workers
-   Deno v1.25+
-   Bun 1.0+
-   React Native

### Customizing Fetch Client

The SDK provides a way for your to customize the underlying HTTP client / Fetch function. If you're running in an
unsupported environment, this provides a way for you to break glass and ensure the SDK works.

```typescript
import { SeedTraceClient } from '@fern/trace';

const seedTrace = new SeedTraceClient({
    ...
    fetcher: // provide your implementation here
});
```

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically.
Additions made directly to this library would have to be moved over to our generation code,
otherwise they would be overwritten upon the next generated release. Feel free to open a PR as
a proof of concept, but know that we will not be able to merge it as-is. We suggest opening
an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!