# This file was auto-generated by Fern from our API Definition.

import typing
from json.decoder import JSONDecodeError

from ..core.api_error import ApiError
from ..core.client_wrapper import AsyncClientWrapper, SyncClientWrapper
from ..core.pydantic_utilities import parse_obj_as
from ..core.request_options import RequestOptions
from ..types.send_response import SendResponse


class PathClient:
    def __init__(self, *, client_wrapper: SyncClientWrapper):
        self._client_wrapper = client_wrapper

    def send(self, *, request_options: typing.Optional[RequestOptions] = None) -> SendResponse:
        """
        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        SendResponse

        Examples
        --------
        from seed import SeedLiteral

        client = SeedLiteral(
            base_url="https://yourhost.com/path/to/api",
        )
        client.path.send()
        """
        _response = self._client_wrapper.httpx_client.request(
            f"path/123", method="POST", request_options=request_options
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(SendResponse, parse_obj_as(type_=SendResponse, object_=_response.json()))  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)


class AsyncPathClient:
    def __init__(self, *, client_wrapper: AsyncClientWrapper):
        self._client_wrapper = client_wrapper

    async def send(self, *, request_options: typing.Optional[RequestOptions] = None) -> SendResponse:
        """
        Parameters
        ----------
        request_options : typing.Optional[RequestOptions]
            Request-specific configuration.

        Returns
        -------
        SendResponse

        Examples
        --------
        import asyncio

        from seed import AsyncSeedLiteral

        client = AsyncSeedLiteral(
            base_url="https://yourhost.com/path/to/api",
        )


        async def main() -> None:
            await client.path.send()


        asyncio.run(main())
        """
        _response = await self._client_wrapper.httpx_client.request(
            f"path/123", method="POST", request_options=request_options
        )
        try:
            if 200 <= _response.status_code < 300:
                return typing.cast(SendResponse, parse_obj_as(type_=SendResponse, object_=_response.json()))  # type: ignore
            _response_json = _response.json()
        except JSONDecodeError:
            raise ApiError(status_code=_response.status_code, body=_response.text)
        raise ApiError(status_code=_response.status_code, body=_response_json)
