import pytest

from .solucion import segundos_a_hms


@pytest.mark.parametrize(
    "entrada, esperado",
    [
        (7325, (2, 2, 5)),
        (60, (0, 1, 0)),
        (3600, (1, 0, 0)),
        (0, (0, 0, 0)),
        (86399, (23, 59, 59)),
        (86400, (24, 0, 0)),
        (90061, (25, 1, 1)),
    ],
)
def test_segundos_a_hms(entrada: int, esperado: tuple[int, int, int]):
    assert segundos_a_hms(entrada) == esperado
