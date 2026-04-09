import pytest

from .solucion import es_bisiesto


@pytest.mark.parametrize(
    "entrada, esperado",
    [
        (2024, True),
        (2023, False),
        (2000, True),
        (1900, False),
        (2100, False),
        (1600, True),
        (4, True),
        (1, False),
    ],
)
def test_es_bisiesto(entrada: int, esperado: bool):
    assert es_bisiesto(entrada) == esperado
