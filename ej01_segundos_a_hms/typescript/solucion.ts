type Hms = {
    horas: number
    minutos: number
    segundos_finales: number
}

export const segundosAHms = (segundos: number): Hms => {

    const horas: number = Math.floor(segundos / 3600);
    const resto: number = segundos % 3600;

    const minutos: number = Math.floor(resto / 60);
    const segundos_finales: number = resto % 60;

    return { horas, minutos, segundos_finales }
}
