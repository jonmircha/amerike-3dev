# Números Aleatorios

```js
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
```

---

## 📌 Explicación:

1. **`Math.random()`**
   - Genera un número decimal **aleatorio** entre `0` (incluido) y `1` (excluido).
   - Ejemplo: `0.234`, `0.78`, `0.9999` …
2. **`Math.random() * (max - min + 1)`**
   - Escala ese número aleatorio al rango que va desde `0` hasta `max - min + 1`.
   - Si `min = 5` y `max = 10`:
     `Math.random() * (10 - 5 + 1)` → `Math.random() * 6` → valor entre `0` y `5.999...`
3. **`+ min`**
   - Desplaza el rango para que comience en `min`.
   - Siguiendo el ejemplo: ahora el rango es entre `5` y `10.999...`
4. **`Math.floor(...)`**
   - Redondea el número **hacia abajo** al entero más cercano.
   - Esto asegura que el resultado final sea un número entero entre **`min` y `max`** (ambos inclusive).

---

## 📊 Ejemplo de uso:

```js
// Simula un dado → valores entre 1 y 6
console.log(aleatorio(1, 6));
// Números aleatorios entre 10 y 15
console.log(aleatorio(10, 15));
```

Posibles salidas:

```js
3;
6;
12;
15;
```

---

## ✅ En resumen

La función `aleatorio(min, max)` devuelve un **número entero aleatorio** entre el valor mínimo (`min`) y el máximo (`max`), ambos **incluidos**.

---
