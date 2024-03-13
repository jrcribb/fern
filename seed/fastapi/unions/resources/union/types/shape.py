# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import datetime as dt
import typing

from ....core.datetime_utils import serialize_datetime
from .circle import Circle as resources_union_types_circle_Circle
from .square import Square as resources_union_types_square_Square

try:
    import pydantic.v1 as pydantic  # type: ignore
except ImportError:
    import pydantic  # type: ignore

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def circle(self, value: resources_union_types_circle_Circle) -> Shape:
        return Shape(__root__=_Shape.Circle(**value.dict(exclude_unset=True), type="circle"))

    def square(self, value: resources_union_types_square_Square) -> Shape:
        return Shape(__root__=_Shape.Square(**value.dict(exclude_unset=True), type="square"))


class Shape(pydantic.BaseModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    def get_as_union(self) -> typing.Union[_Shape.Circle, _Shape.Square]:
        return self.__root__

    def visit(
        self,
        circle: typing.Callable[[resources_union_types_circle_Circle], T_Result],
        square: typing.Callable[[resources_union_types_square_Square], T_Result],
    ) -> T_Result:
        if self.__root__.type == "circle":
            return circle(
                resources_union_types_circle_Circle(**self.__root__.dict(exclude_unset=True, exclude={"type"}))
            )
        if self.__root__.type == "square":
            return square(
                resources_union_types_square_Square(**self.__root__.dict(exclude_unset=True, exclude={"type"}))
            )

    __root__: typing.Annotated[typing.Union[_Shape.Circle, _Shape.Square], pydantic.Field(discriminator="type")]

    def json(self, **kwargs: typing.Any) -> str:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().json(**kwargs_with_defaults)

    def dict(self, **kwargs: typing.Any) -> typing.Dict[str, typing.Any]:
        kwargs_with_defaults: typing.Any = {"by_alias": True, "exclude_unset": True, **kwargs}
        return super().dict(**kwargs_with_defaults)

    class Config:
        extra = pydantic.Extra.forbid
        json_encoders = {dt.datetime: serialize_datetime}


class _Shape:
    class Circle(resources_union_types_circle_Circle):
        type: typing.Literal["circle"]

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True

    class Square(resources_union_types_square_Square):
        type: typing.Literal["square"]

        class Config:
            allow_population_by_field_name = True
            populate_by_name = True


Shape.update_forward_refs()