#!/usr/bin/env python3
""" adding type annotations to the function"""
from typing import TypeVar, Mapping, Any, Union, Optional


T = TypeVar('T')


def safely_get_value(
    dct: Mapping[Any, T],
    key: Any,
    default: Optional[T] = None
) -> Union[T, None]:
    """Gets the value associated with the key from the dictionary safely,
    with an optional default value."""
    if key in dct:
        return dct[key]
    else:
        return default
