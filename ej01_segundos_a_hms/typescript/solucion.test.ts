import { describe, test, expect } from 'vitest'
import { segundosAHms } from './solucion.js'

describe('segundosAHms', () => {
  test.each([
    { entrada: 0,     esperado: { horas: 0,  minutos: 0,  segundos_finales: 0  } },
    { entrada: 59,     esperado: { horas: 0,  minutos: 0,  segundos_finales: 59  } },
    { entrada: 60,     esperado: { horas: 0,  minutos: 1,  segundos_finales: 0  } },
    { entrada: 3600,     esperado: { horas: 1,  minutos: 0,  segundos_finales: 0  } },
    { entrada: 3661,     esperado: { horas: 1,  minutos: 1,  segundos_finales: 1  } },
    { entrada: 7325,     esperado: { horas: 2,  minutos: 2,  segundos_finales: 5  } },
    { entrada: 86399,     esperado: { horas: 23,  minutos: 59,  segundos_finales: 59  } },
    { entrada: 86400,     esperado: { horas: 24,  minutos: 0,  segundos_finales: 0  } },
    { entrada: 90061,     esperado: { horas: 25,  minutos: 1,  segundos_finales: 1  } },

  ])('convierte $entrada segundos', ({ entrada, esperado }) => {
    expect(segundosAHms(entrada)).toEqual(esperado)
  })
})
