<div align="center">

# 01 · Conversor de segundos a horas, minutos y segundos

![Dificultad](https://img.shields.io/badge/dificultad-★☆☆☆☆-brightgreen?style=flat)
![Bloque](https://img.shields.io/badge/bloque-variables%20y%20operadores-3776AB?style=flat)
![Estado](https://img.shields.io/badge/estado-pendiente-lightgrey?style=flat)

</div>

---

## 📋 Enunciado

Dado un número entero **no negativo** de segundos, devuelve cuántas horas, minutos y segundos componen esa cantidad de tiempo.

## 🎯 Ejemplos

| Entrada | Resultado esperado       |
| :-----: | ------------------------ |
|   `0`   | `0 h`, `0 min`, `0 s`    |
|  `59`   | `0 h`, `0 min`, `59 s`   |
|  `60`   | `0 h`, `1 min`, `0 s`    |
| `3600`  | `1 h`, `0 min`, `0 s`    |
| `3661`  | `1 h`, `1 min`, `1 s`    |
| `7325`  | `2 h`, `2 min`, `5 s`    |
| `86399` | `23 h`, `59 min`, `59 s` |
| `86400` | `24 h`, `0 min`, `0 s`   |
| `90061` | `25 h`, `1 min`, `1 s`   |

## ⚠️ Casos límite a considerar

- La entrada `0`.
- Múltiplos exactos de `60` y de `3600`.
- Entradas mayores que un día completo: las horas pueden superar `24` sin problema.

## 📐 Restricciones

- La entrada siempre será un entero **no negativo**. No hace falta validar el tipo ni manejar errores en esta versión.
- **Sin librerías externas** ni módulos de fecha/hora. Solo aritmética básica.

---

## 🔧 Firma esperada

### Python · `solucion.py`

```python
def segundos_a_hms(segundos: int) -> tuple[int, int, int]:
    ...
```

Devuelve una tupla `(horas, minutos, segundos)`.

### TypeScript · `solucion.ts`

```typescript
type Hms = {
  horas: number
  minutos: number
  segundos: number
}

export const segundosAHms = (segundos: number): Hms => {
  // ...
}
```

Devuelve un objeto con los tres campos.

---

## 🧠 Conceptos implicados

| Concepto              | Python                 | TypeScript                |
| --------------------- | ---------------------- | ------------------------- |
| División entera       | `a // b`               | `Math.floor(a / b)`       |
| Resto de división     | `a % b`                | `a % b`                   |
| Agrupación de valores | Tupla                  | Objeto literal con `type` |
| Tipado del retorno    | `tuple[int, int, int]` | `type Hms = { ... }`      |

### 📚 Documentación oficial

- Python · [Tuples and sequences](https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences)
- TypeScript · [Object types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

---

## 🚦 Por dónde empezar

> **Antes de escribir una sola línea de código**, crea un fichero `descomposicion.md` en esta misma carpeta y resuelve el problema **en lenguaje natural y matemáticas**. Sin sintaxis. Sin tipos. Solo razonamiento.

Responde a estas tres preguntas:

1. ¿Cómo calculas las **horas** a partir del total de segundos?
2. Una vez calculadas las horas, ¿qué cantidad de segundos te **sobra**? ¿Cómo extraes los **minutos** de esa cantidad?
3. Los **segundos finales**, ¿de dónde salen?

Cuando la descomposición esté clara, traduce a Python. Y solo después, de Python a TypeScript.

---

<div align="center">

[← Volver al índice](../README.md)

</div>
