# This file was auto-generated by Fern from our API Definition.

import typing

import typing_extensions

from ....core.serialization import FieldMetadata


class ObjectWithMapOfMapParams(typing_extensions.TypedDict):
    map_: typing_extensions.Annotated[typing.Dict[str, typing.Dict[str, str]], FieldMetadata(alias="map")]
