import pytest

from .solucion import es_primo


@pytest.mark.parametrize(
    "n, esperado",
    [
        (-7, False),
        (0, False),
        (1, False),
        (2, True),
        (3, True),
        (4, False),
        (7, True),
        (9, False),
        (25, False),
        (97, True),
        (100, False),
        (101, True),
    ],
)
def test_es_primo(n: int, esperado: bool) -> None:
    assert es_primo(n) == esperado
