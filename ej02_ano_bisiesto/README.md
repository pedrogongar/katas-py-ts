<div align="center">

# 02 · Detector de años bisiestos

![Dificultad](https://img.shields.io/badge/dificultad-★★☆☆☆-yellowgreen?style=flat)
![Bloque](https://img.shields.io/badge/bloque-condicionales%20y%20booleanos-3776AB?style=flat)
![Estado](https://img.shields.io/badge/estado-pendiente-lightgrey?style=flat)

</div>

---

## 📋 Enunciado

Dado un año como número entero positivo, determina si es **bisiesto** o no.

Un año es bisiesto si cumple las reglas del calendario gregoriano:

1. Es divisible por **4**, **excepto**...
2. ...si es divisible por **100**, en cuyo caso **no** es bisiesto, **excepto**...
3. ...si además es divisible por **400**, en cuyo caso **sí** es bisiesto.

Dicho en una sola frase: un año es bisiesto si es divisible por 4 y no por 100, **o** si es divisible por 400.

## 🎯 Ejemplos

|  Año   | ¿Bisiesto? | Motivo                            |
| :----: | :--------: | --------------------------------- |
| `2024` |   ✅ Sí    | Divisible por 4, no por 100       |
| `2023` |   ❌ No    | No es divisible por 4             |
| `2000` |   ✅ Sí    | Divisible por 400                 |
| `1900` |   ❌ No    | Divisible por 100 pero no por 400 |
| `2100` |   ❌ No    | Divisible por 100 pero no por 400 |
| `1600` |   ✅ Sí    | Divisible por 400                 |
|  `4`   |   ✅ Sí    | Divisible por 4, no por 100       |
|  `1`   |   ❌ No    | No es divisible por 4             |

## ⚠️ Casos límite a considerar

- **Múltiplos de 400** (`2000`, `1600`): el caso más fácil de olvidar en la lógica.
- **Múltiplos de 100 pero no de 400** (`1900`, `2100`): la trampa clásica del problema.
- **Año `4`**: el múltiplo de 4 más pequeño que es bisiesto.
- **Año `1`**: el año más pequeño posible.

## 📐 Restricciones

- La entrada siempre será un entero **positivo**. No hace falta validar el tipo ni manejar años negativos o cero en esta primera versión.
- **Sin librerías externas** ni módulos de fecha/hora. Solo aritmética y lógica booleana.

---

## 🔧 Firma esperada

### Python · `solucion.py`

```python
def es_bisiesto(anio: int) -> bool:
    ...
```

Devuelve `True` si es bisiesto, `False` en caso contrario.

### TypeScript · `solucion.ts`

```typescript
export const esBisiesto = (anio: number): boolean => {
  // ...
}
```

Devuelve `true` si es bisiesto, `false` en caso contrario.

---

## 🧠 Conceptos implicados

| Concepto           | Python                   | TypeScript                  |
| ------------------ | ------------------------ | --------------------------- |
| Tipo booleano      | `bool`, `True` / `False` | `boolean`, `true` / `false` |
| Es divisible por…  | `n % k == 0`             | `n % k === 0`               |
| Condicional        | `if` / `elif` / `else`   | `if` / `else if` / `else`   |
| Operador lógico Y  | `and`                    | `&&`                        |
| Operador lógico O  | `or`                     | `\|\|`                      |
| Operador lógico NO | `not`                    | `!`                         |

### 📚 Documentación oficial

- Python · [Control flow — `if` statements](https://docs.python.org/3/tutorial/controlflow.html#if-statements)
- Python · [Boolean operations](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not)
- TypeScript · [Narrowing — typeof guards y truthiness](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- MDN · [Operadores lógicos](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators#operadores_l%C3%B3gicos)

---

## 🚦 Por dónde empezar

> **Antes de escribir una sola línea de código**, crea `descomposicion.md` en esta carpeta y transforma las reglas del enunciado en un razonamiento estructurado.

Responde a estas preguntas:

1. ¿Cómo se expresa "es divisible por X" usando el operador módulo?
2. Las tres reglas del enunciado pueden verse como un **árbol de decisión** con condicionales anidados, o como una **única expresión booleana** con operadores lógicos. Piensa en las dos formas. ¿Cuál te resulta más clara de leer?
3. Comprueba tu razonamiento con los 4 casos límite de la tabla (`2000`, `1900`, `2024`, `2023`). Escribe paso a paso, en lenguaje natural, por qué tu lógica da el resultado correcto en cada uno.

Cuando tengas la descomposición clara, tradúcela a Python. Y solo después, tradúcela de Python a TypeScript.

---

<div align="center">

[← Volver al índice](../README.md)

</div>
