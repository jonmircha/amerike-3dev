console.log("Hola Mundo desde JavaScript");

// Comentario de una línea

/* Comentarios 
de 
bloque */

let name = "Jon";
let age = 40;
const GRAVITY = 9.8;

console.log(`Hola mi nombre es ${name} y tengo ${age} años`);

age = 41;

console.log(age);
console.log(GRAVITY);

//GRAVITY = 10;

const colores = ["rojo", "verde", "azul"];
console.log(colores);
console.log(colores[0]);

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matriz[1][1]);
colores.push("morado");
console.log(colores);

//colores = true;

const book = {
  title: "Sobre tu cadáver",
  author: "Moren, David",
  editorial: "VRYA",
  year: 2015,
  citeBook: function () {
    return `"${this.title}". ${this.author}. ${this.editorial}, ${this.year}.`;
  },
};

console.log(book);
console.log(book.title);
console.log(book.author);
console.log(book["editorial"]);
console.log(book.citeBook());

// Operadores Aritméticos
let a = 5;
let b = 10;
console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicación
console.log(a / b); // División
console.log(a % b); // Módulo
console.log(a ** b); // Exponente
a++; // Incremento
console.log(a);
b--; // Decremento
console.log(b);

// Operadores de comparación
let d = 5;
let e = 10;
console.log(`${d} > ${e}`, d > e); // Mayor que
console.log(`${d} < ${e}`, d < e); // Menor que
console.log(`${d} >= ${e}`, d >= e); // Mayor o igual que
console.log(`${d} <= ${e}`, d <= e); // Menor o igual que
console.log(`${d} == ${e}`, d == e); // Igualdad por valor
console.log(`${d} === ${e}`, d === e); // Igualdad por identidad (por tipo y valor) o igualdad estricta
console.log(`${d} == ${d}`, d == d);
console.log(`${d} == "${d}"`, d == `${d}`);
console.log(`${d} === ${d}`, d === d);
console.log(`${d} === "${d}"`, d === `${d}`);
console.log(`${d} != ${e}`, d != e); // Desigualdad por valor
console.log(`${d} !== ${e}`, d !== e); // Desigualdad por identidad (por tipo y valor) o desigualdad estricta
console.log(`${d} != ${d}`, d != d);
console.log(`${d} != "${d}"`, d != `${d}`);
console.log(`${d} !== ${d}`, d !== d);
console.log(`${d} !== "${d}"`, d !== `${d}`);

// Los siguientes valores retornan `false`
console.log(`false`, Boolean(false));
console.log(`0`, Boolean(0));
console.log(`-0`, Boolean(-0));
console.log(`0n`, Boolean(0n));
console.log(`''`, Boolean(""));
console.log(`""`, Boolean(""));
console.log(`\`\``, Boolean(``));
console.log(`null`, Boolean(null));
console.log(`undefined`, Boolean(undefined));
console.log(`NaN`, Boolean(NaN));

// Los siguientes valores retornan `true`
console.log(`true`, Boolean(true));
console.log(`42`, Boolean(42));
console.log(`-42`, Boolean(-42));
console.log(`3.14`, Boolean(3.14));
console.log(`-3.14`, Boolean(-3.14));
console.log(`Infinity`, Boolean(Infinity));
console.log(`-Infinity`, Boolean(-Infinity));
console.log(`"0"`, Boolean("0"));
console.log(`"."`, Boolean(" "));
console.log(`"Hola Mundo"`, Boolean("Hola mundo"));
console.log(`[]`, Boolean([]));
console.log(`{}`, Boolean({}));
console.log(`new Date()`, Boolean(new Date()));

// Operadores lógicos

// and - &&
console.log("Operador and - &&");
console.log(`4 < 8 && 16 < 24`, 4 < 8 && 16 < 24);
console.log(`4 > 8 && 16 > 24`, 4 > 8 && 16 > 24);
console.log(`4 < 8 && 16 > 24`, 4 < 8 && 16 > 24);
console.log(`4 < 8 && 16 < 24 && 32 > 40`, 4 < 8 && 16 < 24 && 32 > 40);

// or - ||
console.log("Operador or - ||");
console.log(`4 > 8 || 16 > 24`, 4 > 8 || 16 > 24);
console.log(`4 < 8 || 16 < 24`, 4 < 8 || 16 < 24);
console.log(`4 < 8 || 16 > 24`, 4 < 8 || 16 > 24);
console.log(`4 > 8 || 16 > 24 || 32 < 40`, 4 > 8 || 16 > 24 || 32 < 40);

// and - && y or - || juntos
console.log("Operador and - && y or - || juntos");
console.log(`(4 > 8 && 16 > 24) || 32 < 40`, (4 > 8 && 16 > 24) || 32 < 40);
console.log(`4 > 8 && (16 > 24 || 32 < 40)`, 4 > 8 && (16 > 24 || 32 < 40));

// not - !
console.log("Operador not - !");
console.log(`!true`, !true);
console.log(`!false`, !false);

// Operador Ternario
// condición ? expresiónVerdadera : expresiónFalsa;

let f = 10;
let g = 11;
console.log(f % 2 ? `${f} es ImPar` : `${f} es Par`);
console.log(g % 2 ? `${g} es Impar` : `${g} es Par`);

/* 
  ifs anidados

  Si la edad del usuario esta entre:
    0-3 bebé
    4-10 infante
    11-17 adolescente
    18-30 joven
    31-59 adulto
    +60 adulto mayor
*/

let userAge = 40;

if (userAge <= 3) {
  console.log("Bebé 👶🏻");
} else if (userAge >= 4 && userAge <= 10) {
  console.log("Infante 👧🏻👦🏻");
} else if (userAge >= 11 && userAge <= 17) {
  console.log("Adolescente 👩🏻‍🎤👨🏻‍🎤");
} else if (userAge >= 18 && userAge <= 30) {
  console.log("Jovén 👩🏻🧑🏻");
} else if (userAge >= 31 && userAge <= 59) {
  console.log("Adulto 👩🏻‍💼👨🏻‍💼");
} else {
  console.log("Adulto Mayor 🧓🏻👴🏻");
}

// switch - case

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
let day = new Date().getDay();
let dayName;

switch (day) {
  case 0:
    dayName = "Domingo";
    break;
  case 1:
    dayName = "Lunes";
    break;
  case 2:
    dayName = "Martes";
    break;
  case 3:
    dayName = "Miércoles";
    break;
  case 4:
    dayName = "Jueves";
    break;
  case 5:
    dayName = "Viernes";
    break;
  case 6:
    dayName = "Sábado";
    break;
  default:
    dayName = "El número de día es incorrecto";
    break;
}

console.log(`Hoy es ${dayName}`);

// while
let h = 0;

while (h <= 5) {
  console.log(`Hola while ${h}`);
  h++;
}

// do while
h = 7;
do {
  console.log(`Hola do while ${h}`);
  h++;
} while (h <= 5);

// for
for (let i = 0; i <= 5; i++) {
  console.log(`Hola for ${i}`);
}

// for of
let aString = "Hola Mundo";

for (let value of aString) {
  console.log(value);
}

const anArray = ["Uno", "Dos", "Tres", "Cuatro", "Cinco"];

for (let value of anArray) {
  console.log(value);
}

//for in
let aObject = {
  name: "Jon",
  age: 40,
  isTeacher: true,
};

for (let key in aObject) {
  let value = aObject[key];
  console.log(`Clave: ${key}, Valor: ${value}`);
}

// Definición
function sayHi() {
  console.log("Hola Mundo desde una función en JS");
  console.log("Bienvenidos al maravilloso mundo de la Programación Web");
  console.log("JavaScript es el lenguaje de la Web");
}

// Ejecución o Invocación
sayHi();

// Función que recibe parámetros y retorna un valor.
function add(a, b) {
  let c = a + b;
  return c;
}

// Al retornar el valor y no imprimirlo o guardarlo, este se pierde en la ejecución
add(2, 4);
console.log(add(2, 1));

// Almacenando el valor retornado en una variable
let result = add(3, 4);
console.log(result);

function calculateSpeed(d, t) {
  let v = d / t;
  return `La velocidad es ${v} m/s`;
}

console.log(calculateSpeed(100, 8));

// Función que inicializa un valor por defecto a sus parámetros
function sayHelloTo(name = "Desconocid@") {
  console.log(`Hola ${name}, ¿cómo estás?`);
}

sayHelloTo();
sayHelloTo("Jon");
sayHelloTo("Irma");

// Función flecha sin parámetros
const sayHiWithArrow = () => {
  console.log("Hola Mundo desde una función flecha en JS");
  console.log("Bienvenidos al maravilloso mundo de la Programación Web");
  console.log("JavaScript es el lenguaje de la Web");
};

sayHiWithArrow();

// Función flecha con parámetros
const addWithArrow = (a, b) => {
  let c = a + b;
  return c;
};

console.log(addWithArrow(2, 1));

// Funciones flecha con return implícito
const substract = (a, b) => a - b;
console.log(substract(8, 4));

const multiply = (a, b) => a * b;
console.log(multiply(8, 4));

setTimeout(function () {
  console.log("Esto se ejecuta después de 3 segundos");
  console.log("Sólo una vez");
}, 3000);

setInterval(function () {
  console.log(`${new Date().toLocaleString()}`);
}, 1000);
