def segundos_a_hms(segundos: int) -> tuple[int, int, int]:

    horas = segundos // 3600
    resto = segundos % 3600

    minutos: int = resto // 60
    segundos_finales: int = resto % 60

    return horas, minutos, segundos_finales
