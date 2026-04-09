<div align="center">

# 04 · ¿Es primo?

![Dificultad](https://img.shields.io/badge/dificultad-★★★☆☆-yellow?style=flat)
![Bloque](https://img.shields.io/badge/bloque-bucles-3776AB?style=flat)
![Estado](https://img.shields.io/badge/estado-pendiente-lightgrey?style=flat)

</div>

---

## 📋 Enunciado

Dado un número entero, determina si es **primo**.

Un número primo es un entero **mayor que 1** que solo es divisible por **1** y por **sí mismo**. Por convención, ni `0` ni `1` ni los números negativos son primos.

## 🎯 Ejemplos

| Entrada | ¿Primo? | Motivo                                     |
| :-----: | :-----: | ------------------------------------------ |
|  `-7`   |  ❌ No  | Los negativos no son primos por convención |
|   `0`   |  ❌ No  | Por convención                             |
|   `1`   |  ❌ No  | Por convención                             |
|   `2`   |  ✅ Sí  | El único primo par                         |
|   `3`   |  ✅ Sí  | Solo divisible por 1 y por sí mismo        |
|   `4`   |  ❌ No  | Divisible por 2                            |
|   `7`   |  ✅ Sí  | Solo divisible por 1 y por sí mismo        |
|   `9`   |  ❌ No  | Divisible por 3                            |
|  `25`   |  ❌ No  | Divisible por 5                            |
|  `97`   |  ✅ Sí  | Primo "grande" típico                      |
|  `100`  |  ❌ No  | Divisible por muchos                       |
|  `101`  |  ✅ Sí  | Primo "grande" típico                      |

## ⚠️ Casos límite a considerar

- **Números menores que 2**: `-7`, `0`, `1`. La regla los excluye explícitamente, no caen en la lógica general del bucle.
- **El `2`**: el único primo par. Si tu lógica trata todos los pares como no primos, fallarás aquí.
- **Pares mayores que 2**: `4`, `6`, `8`. Los más fáciles de detectar como no primos.
- **Primos pequeños y no-primos pequeños**: `3`, `4`, `5`, `9`. Sirven para validar el bucle básico.
- **Primos "grandes"** como `97` y `101`: aseguran que tu bucle no termina prematuramente.

## 📐 Restricciones

- La entrada será un número entero. Puede ser negativo, cero, uno o positivo.
- **Sin librerías externas** ni funciones predefinidas de "es primo".
- No hace falta optimizar al máximo en la primera versión. Una solución correcta y legible es preferible a una rápida y oscura. Si te queda tiempo, verás que se puede mejorar mucho.

---

## 🔧 Firma esperada

### Python · `solucion.py`

```python
def es_primo(n: int) -> bool:
    ...
```

Devuelve `True` si `n` es primo, `False` en caso contrario.

### TypeScript · `solucion.ts`

```typescript
export const esPrimo = (n: number): boolean => {
  // ...
}
```

Devuelve `true` o `false`.

---

## 🧠 Conceptos implicados

| Concepto                  | Python                  | TypeScript                       |
| ------------------------- | ----------------------- | -------------------------------- |
| Bucle con rango           | `for i in range(2, n):` | `for (let i = 2; i < n; i++) {}` |
| Salir del bucle antes     | `break`                 | `break`                          |
| Devolver dentro del bucle | `return False`          | `return false`                   |
| Comprobar divisibilidad   | `n % i == 0`            | `n % i === 0`                    |

### 📚 Documentación oficial

- Python · [`for` statements](https://docs.python.org/3/tutorial/controlflow.html#for-statements)
- Python · [`range()` function](https://docs.python.org/3/library/stdtypes.html#range)
- Python · [`break` and `continue` statements](https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements-and-else-clauses-on-loops)
- MDN · [`for` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- MDN · [`break` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)

---

## 🚦 Por dónde empezar

> **Sigue el flujo TDD**: tests primero con todos los casos del enunciado, placeholder de la función que devuelva siempre `False`, ejecutar y ver fallos, implementar, todo verde.

Antes de tirar a código, piensa estas tres preguntas en tu cabeza:

1. **El caso fácil**: ¿qué entradas se rechazan **antes** de entrar en cualquier bucle? (Pista: hay tres entradas que están fuera de la definición misma.)
2. **El bucle**: si quisieras saber si `n` es divisible por algún número entre `2` y `n-1`, ¿cómo lo recorres? ¿Qué haces en cuanto encuentras un divisor? ¿Necesitas seguir comprobando?
3. **El final del bucle**: si llegas hasta el final del bucle sin haber encontrado ningún divisor, ¿qué sabes con certeza sobre `n`?

Cuando tengas claras las respuestas, ataca `solucion.py`. Y solo después, traduce a TypeScript.

---

<div align="center">

[← Volver al índice](../README.md)

</div>
