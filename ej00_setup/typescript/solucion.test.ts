import { test, expect } from 'vitest'
import { suma } from './solucion.js'

test('comprobación de la función de suma', () => {
    const resultado = suma(2, 3)
    expect(resultado).toBe(5)
})