from pydantic import BaseModel
from typing import Optional
from resources.folder_b.resources.common.types.foo import Foo
from dt import datetime
from core.datetime_utils import serialize_datetime


class Response(BaseModel):
    foo: Optional[Foo] = None

    class Config:
        frozen = True
        smart_union = True
        json_encoders = {datetime: serialize_datetime}
