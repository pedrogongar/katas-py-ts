# Descomposición — 02 · Detector de años bisiestos

## 1. Expresar divisibilidad con módulo

> ¿Cómo se expresa "es divisible por X" usando el operador módulo?

x % y == 0

Con el operador módulo obtenemos el resto de una división

---

## 2. Estructura del razonamiento

> Las tres reglas del enunciado pueden verse como un árbol de decisión anidado o como una única expresión booleana. Explora ambas formas y decide cuál te parece más clara.

### Opción A — Árbol de decisión con condicionales anidados

Si es divisible por 4 y no es divisible por 100, entonces es bisiesto.
Si es divisible por 400, entonces es bisiesto.

### Opción B — Única expresión booleana con operadores lógicos

Un año es bisiesto cuando es divisible por 4 Y no es divisible por 100 O cuando es divisible por 400.

### Elección

Es más sencillo y limpio de estructurar una única expresión booleana mediante operadores lógicos

---

## ✏️ Comprobación mental

Aplica tu razonamiento paso a paso, **sin código**, a este caso límite de la tabla:

### `1900`

- ¿Es divisible por 4? Si
- ¿Es divisible por 100? Si
- ¿Es divisible por 400? No

- No es bisiesto
