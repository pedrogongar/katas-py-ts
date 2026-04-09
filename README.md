<div align="center">

# katas-py-ts

**Ejercicios de algoritmia y lógica en Python y TypeScript, resueltos en paralelo.**

![Python](https://img.shields.io/badge/Python-3.14-3776AB?style=flat&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat&logo=typescript&logoColor=white)
![pytest](https://img.shields.io/badge/pytest-9-0A9EDC?style=flat&logo=pytest&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-4-6E9F18?style=flat&logo=vitest&logoColor=white)

</div>

---

## Sobre este repositorio

Cada ejercicio se resuelve **dos veces**: primero en uno de los dos lenguajes y después se traduce al otro. El objetivo no es duplicar trabajo, sino entrenar la habilidad de **separar la lógica del problema de la sintaxis del lenguaje**. La primera implementación enfrenta ambas cosas a la vez; la segunda aísla la sintaxis porque el algoritmo ya está resuelto.

## Stack

| Área           | Herramienta             |
| -------------- | ----------------------- |
| Lenguajes      | Python 3.14, TypeScript |
| Tests Python   | pytest                  |
| Tests TS       | Vitest                  |
| Gestor TS      | pnpm                    |
| Linter Python  | Ruff + basedpyright     |
| Formateador TS | Prettier                |

## Estructura

Cada ejercicio vive en su propia carpeta con prefijo `ej`, y dentro tiene una subcarpeta por lenguaje:

```
katas-py-ts/
├── ej00_setup/
│   ├── python/
│   │   ├── __init__.py
│   │   ├── solucion.py
│   │   └── test_solucion.py
│   └── typescript/
│       ├── solucion.ts
│       └── solucion.test.ts
├── ej01_segundos_a_hms/
│   ├── README.md
│   ├── descomposicion.md
│   ├── python/
│   └── typescript/
└── ...
```

## Puesta en marcha

### Requisitos

- Python 3.11 o superior
- Node.js 20 o superior
- pnpm

### Python

```bash
python -m venv .venv
source .venv/bin/activate.fish   # fish
# source .venv/bin/activate      # bash / zsh
pip install -r requirements.txt
```

### TypeScript

```bash
pnpm install
```

## Ejecutar los tests

```bash
# Python
pytest

# TypeScript
pnpm test
```

---

<div align="center">

Repositorio de aprendizaje personal · [@pedrogongar](https://github.com/pedrogongar)

</div>
