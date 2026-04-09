import { describe, test, expect } from 'vitest'
import { clasificarImc } from './solucion.js'

describe('clasificarImc', () => {
    test.each([
        {peso:18.5, altura: 1.0, esperado: "Peso normal" },
        {peso:18.4, altura: 1.0, esperado: "Bajo peso" },
        {peso:25, altura: 1.0, esperado: "Sobrepeso" },
        {peso:24.9, altura: 1.0, esperado: "Peso normal" },
        {peso:30, altura: 1.0, esperado: "Obesidad" },
        {peso:29.9, altura: 1.0, esperado: "Sobrepeso" },
        {peso:50, altura: 1.70, esperado: "Bajo peso" },
        {peso:60, altura: 1.80, esperado: "Peso normal" },
        {peso:70, altura: 1.75, esperado: "Peso normal" },
        {peso:75, altura: 1.75, esperado: "Peso normal" },
        {peso:80, altura: 1.75, esperado: "Sobrepeso" },
        {peso:90, altura: 1.75, esperado: "Sobrepeso" },
        {peso:100, altura: 1.75, esperado: "Obesidad" },
    ])('clasificar el IMC con $peso y $altura', ({ peso, altura, esperado }) => {
        expect(clasificarImc(peso, altura)).toBe(esperado)
    })
})
