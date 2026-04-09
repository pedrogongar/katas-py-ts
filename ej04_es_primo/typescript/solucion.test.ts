import { describe, test, expect } from 'vitest'
import { esPrimo } from './solucion.js'

describe('esPrimo', () => {
  test.each([
    { n: -7, esperado: false },
    { n: 0, esperado: false },
    { n: 1, esperado: false },
    { n: 2, esperado: true },
    { n: 3, esperado: true },
    { n: 4, esperado: false },
    { n: 7, esperado: true },
    { n: 9, esperado: false },
    { n: 25, esperado: false },
    { n: 97, esperado: true },
    { n: 100, esperado: false },
    { n: 101, esperado: true },
  ])('¿Es primo el número $n?', ({ n, esperado }) => {
    expect(esPrimo(n)).toBe(esperado)
  })
})
