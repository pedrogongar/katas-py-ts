# Descomposición — 01 · Conversor de segundos a HMS

## 1. Cálculo de las horas

> ¿Cómo obtengo las horas a partir del total de segundos?

1 hora = 3600 segundos 

Por lo tanto, para obtener el cociente hacemos,

horas = total de segundos // 3600

---

## 2. Cálculo de los minutos

> Una vez calculadas las horas, ¿qué cantidad de segundos sobra? ¿Cómo extraigo los minutos de esa cantidad?

Para obtener la cantidad de segundos que sobra obtenemos el resto de la operación anterior,

segundos = total de segundos % 3600

Y para obtener los minutos hallamos el cociente,

minutos = segundos // 60

---

## 3. Cálculo de los segundos finales

> ¿De dónde salen los segundos que devuelvo?

Los segundos devueltos corresponden al resto de la operación anterior,

segundos = segundos % 60

---

## ✏️ Comprobación mental

Escoge un ejemplo de la tabla del enunciado (por ejemplo, `7325`) y aplica tu razonamiento paso a paso, **sin código**, para verificar que el resultado coincide con el esperado.

total de segundos = 7325

Para calcular las horas,

horas = 7325 / 3600
horas = 2

segundos = 7325 - (2 * 3600)
segundos = 125

Para obtener los minutos,

minutos = segundos / 60
minutos = 2

Para obtener los segundos,

segundos = 125 - (2 * 60)
segundos = 5

Por tanto, 7325 segundos son 2 horas 2 minutos 5 segundos
