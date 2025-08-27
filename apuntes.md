# Mis Apuntes de _P.L.I._

## Comandos básicos de terminal

## Sintaxis de _Markdown_

## Comandos de _Git_

### Configuración inicial

Estos comandos los vas a ejecutar una sola vez, después de que hayas instalado _**git**_ en tu computadora.

```bash
git --version
git config --global user.name "Jonathan MirCha"
git config --global user.email jonmircha@gmail.com
git config --global user.ui true
git config --global init.defaultBranch main
git config --list
# asignando visual studio code como editor de configuración de git
git config --global core.editor "code --wait"
git config --global -e
# para estandarizar los saltos de línea en windows
git config --global core.autocrlf true
# para estandarizar los saltos de línea en linux/mac
git config --global core.autocrlf input
# ver todas las opciones de la configuración en la terminal
git config -h
# ver todas las opciones de la configuración en el navegador
git help config
```

### Inicializando _Git_

Cuando queremos inicializar _git_ en alguna carpeta local de nuestra computadora, debemos ejecutar el comando:

```bash
git init
```

Este comando lo debemos ejecuta sólo una vez, para indicarle a _git_ que comience a darle seguimiento al contenido de nuestra carpeta.

El siguiente comando nos ayuda a visualizar el estado de seguimiento de los archivos de nuestra carpeta:

```bash
git status
```

### Flujo básico de _Git & GitHub_

![Flujo básico de Git y GitHub](https://jonmircha.com/img/blog/git-flow.png)

```bash
git add .
```

---

# Encabezado nivel 1

## Encabezado nivel 2

### Encabezado nivel 3

#### Encabezado nivel 4

##### Encabezado nivel 5

###### Encabezado nivel 6

####### Encabezado nivel 7

Esto es un párrafo, el párrafo en markdown se termina cuando damos enter

Esto es otro párrafo

Para poner **negrita** debes encerrar el texto entre doble asterísco

Para poner _cursiva_ debes encerrar el texto entre guines bajos

Para poner _**cursiva y negrita**_ debes encerrar el texto entre guines bajos

- Primavera
- Verano
- Otoño
- Invierno

1. Primavera
1. Verano
1. Otoño
1. Invierno

| País    | Ciudad | Continente |
| ------- | ------ | ---------- |
| México  | CDMX   | América    |
| Francia | París  | Europa     |
| Japón   | Tokio  | Asia       |

---

> Yo sólo se que no se nada - Sócrates

[Visita la web de AMERIKE](https://amerike.edu.mx)

[Aprende la sintaxis _Markdown_](https://jonmircha.com/markdown)

![nombre](url)

![This is JavaScript!!!](https://jonmircha.com/img/blog/this-is-javascript.jpg)

```js
function sumar(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.error(`Los valores ingresados NO son números.`);
    return false;
  }

  let c = a + b;
  return c;
}
```

<form>
  <label for="q">Buscar:</label>
  <input type="search" name="q" id="q" required />
  <input type="submit" value="🔍" />
</form>

<!-- Esto es un comentario en MArkdown -->

<!-- ygkgipugliugiuglliugi -->
