import { describe, test, expect } from 'vitest'
import { esBisiesto } from './solucion.js'

describe('esBisiesto', () => {
  test.each([
    { entrada: 2024, esperado: true },
    { entrada: 2023, esperado: false },
    { entrada: 2000, esperado: true },
    { entrada: 1900, esperado: false },
    { entrada: 2100, esperado: false },
    { entrada: 1600, esperado: true },
    { entrada: 4, esperado: true },
    { entrada: 1, esperado: false },
  ])('mostrar si $entrada es $esperado', ({ entrada, esperado }) => {
    expect(esBisiesto(entrada)).toBe(esperado)
  })
})
