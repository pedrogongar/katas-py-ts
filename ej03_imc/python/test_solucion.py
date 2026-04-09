import pytest

from .solucion import clasificar_imc


@pytest.mark.parametrize(
    "peso, altura, esperado",
    [
        (18.5, 1.0, "Peso normal"),
        (18.4, 1.0, "Bajo peso"),
        (25, 1.0, "Sobrepeso"),
        (24.9, 1.0, "Peso normal"),
        (30, 1.0, "Obesidad"),
        (29.9, 1.0, "Sobrepeso"),
        (50, 1.70, "Bajo peso"),
        (60, 1.80, "Peso normal"),
        (70, 1.75, "Peso normal"),
        (75, 1.75, "Peso normal"),
        (80, 1.75, "Sobrepeso"),
        (90, 1.75, "Sobrepeso"),
        (100, 1.75, "Obesidad"),
    ],
)
def test_clasificar_imc(peso: float, altura: float, esperado: str) -> None:
    assert clasificar_imc(peso, altura) == esperado
