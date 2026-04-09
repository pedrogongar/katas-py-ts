<div align="center">

# 03 · Calculadora de IMC con clasificación

![Dificultad](https://img.shields.io/badge/dificultad-★★☆☆☆-yellowgreen?style=flat)
![Bloque](https://img.shields.io/badge/bloque-condicionales%20m%C3%BAltiples-3776AB?style=flat)
![Estado](https://img.shields.io/badge/estado-pendiente-lightgrey?style=flat)

</div>

---

## 📋 Enunciado

Dado el **peso** (en kilogramos) y la **altura** (en metros) de una persona, calcula su **Índice de Masa Corporal (IMC)** y devuelve la categoría a la que pertenece.

La fórmula del IMC es:

```
IMC = peso / (altura × altura)
```

Las categorías, según la Organización Mundial de la Salud:

| Rango de IMC        | Categoría     |
| ------------------- | ------------- |
| Menor que 18.5      | `Bajo peso`   |
| Desde 18.5 hasta 25 | `Peso normal` |
| Desde 25 hasta 30   | `Sobrepeso`   |
| 30 o más            | `Obesidad`    |

Los rangos son **inclusivos por la izquierda**: un IMC de exactamente `25` es `Sobrepeso`, no `Peso normal`.

## 🎯 Ejemplos

| Peso (kg) | Altura (m) | IMC aprox. | Categoría     |
| :-------: | :--------: | :--------: | ------------- |
|   `50`    |   `1.70`   |  `17.30`   | `Bajo peso`   |
|   `60`    |   `1.80`   |  `18.52`   | `Peso normal` |
|   `70`    |   `1.75`   |  `22.86`   | `Peso normal` |
|   `75`    |   `1.75`   |  `24.49`   | `Peso normal` |
|   `80`    |   `1.75`   |  `26.12`   | `Sobrepeso`   |
|   `90`    |   `1.75`   |  `29.39`   | `Sobrepeso`   |
|   `100`   |   `1.75`   |  `32.65`   | `Obesidad`    |

## ⚠️ Casos límite a considerar

- Pesos cerca de los **bordes** entre categorías: `(60, 1.80)` cae justo por encima de `18.5`, `(75, 1.75)` justo por debajo de `25`.
- Personas en categorías **extremas** (muy bajo peso, obesidad).
- Alturas pequeñas y grandes que estresen el cálculo.

## 📐 Restricciones

- Las entradas siempre serán números **positivos**. No hace falta validar el tipo, ni gestionar pesos/alturas negativos o iguales a cero.
- La altura se da en **metros**, no en centímetros.
- **Sin librerías externas**.
- **No redondees el IMC**: la clasificación se hace sobre el valor exacto que devuelva la fórmula.

---

## 🔧 Firma esperada

### Python · `solucion.py`

```python
def clasificar_imc(peso: float, altura: float) -> str:
    ...
```

Devuelve uno de estos cuatro literales: `"Bajo peso"`, `"Peso normal"`, `"Sobrepeso"`, `"Obesidad"`.

### TypeScript · `solucion.ts`

```typescript
type CategoriaImc = 'Bajo peso' | 'Peso normal' | 'Sobrepeso' | 'Obesidad'

export const clasificarImc = (peso: number, altura: number): CategoriaImc => {
  // ...
}
```

> 💡 El tipo `CategoriaImc` es un **union de literales**: el compilador solo permitirá devolver una de esas cuatro cadenas exactas. Si te equivocas y devuelves `"bajo peso"` en minúscula, TypeScript te lo señala antes de ejecutar nada.

---

## 🧠 Conceptos implicados

| Concepto              | Python                            | TypeScript                        |
| --------------------- | --------------------------------- | --------------------------------- |
| Tipo decimal          | `float`                           | `number`                          |
| Tipo cadena           | `str`                             | `string`                          |
| Múltiples parámetros  | `def f(a: float, b: float)`       | `(a: number, b: number) =>`       |
| Potencia              | `altura ** 2` o `altura * altura` | `altura ** 2` o `altura * altura` |
| Cadena de condiciones | `if` / `elif` / `else`            | `if` / `else if` / `else`         |
| Comparación de rango  | `18.5 <= imc < 25` (encadenable)  | `imc >= 18.5 && imc < 25`         |
| Tipos union literales | _no aplica_                       | `type X = "a" \| "b" \| "c"`      |

### 📚 Documentación oficial

- Python · [`elif` statements](https://docs.python.org/3/tutorial/controlflow.html#if-statements)
- Python · [Comparaciones encadenadas](https://docs.python.org/3/reference/expressions.html#comparisons)
- TypeScript · [Literal types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)
- TypeScript · [Union types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)

---

## 🚦 Por dónde empezar

> **Antes de escribir código**, abre `descomposicion.md` y resuelve estas preguntas en lenguaje natural.

1. ¿Cómo calculas el IMC a partir de los dos parámetros? Escribe la fórmula.
2. Tienes cuatro categorías y por tanto cuatro "tramos" en el eje del IMC. ¿En qué orden tiene sentido comprobarlos para que el código sea limpio? Hay varias formas válidas — describe la que elijas y por qué.
3. **Trampa frecuente**: si pones los condicionales en el orden equivocado, algunos casos caen en la categoría incorrecta. Piensa qué pasa si comparas primero `imc >= 18.5` y luego `imc < 18.5`. ¿Funciona? ¿Por qué?

---

<div align="center">

[← Volver al índice](../README.md)

</div>
