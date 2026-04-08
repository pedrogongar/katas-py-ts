from .solucion import segundos_a_hms


def test_segundos_a_hms():
    assert segundos_a_hms(7325) == (2, 2, 5)
