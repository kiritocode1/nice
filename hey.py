

from functools import reduce


def hii(a, b) -> int:
    return a+b


a = reduce((lambda x, y:x*y), [1, 2, 3, 4, 5, 6, 7])
print(a)
