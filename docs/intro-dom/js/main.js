/*
console.log(window);
console.log(document);
console.log(navigator);

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
*/

const $firstParagraph = document.querySelector("p");
const $firstPaleGreenItem = document.querySelector(".bg-palegreen");
const $idTitle = document.querySelector("#title");

console.log($firstParagraph);
console.log($firstPaleGreenItem);
console.log($idTitle);

const $paragraphs = document.querySelectorAll("p");
const $paleGreenItems = document.querySelectorAll(".bg-palegreen");

console.log($paragraphs);
console.log($paragraphs.length);
console.log($paragraphs[3]);
console.log($paleGreenItems);
console.log($paleGreenItems.length);
console.log($paleGreenItems[0]);

const $linkDOM = document.querySelector("#link-dom");

//Obtener el valor actual
console.log($linkDOM.textContent);
console.log($linkDOM.innerHTML);

$linkDOM.textContent = "Acceso a la documentación del DOM en MDN";
$linkDOM.innerHTML = "Acceso a la documentación del <i>DOM</i> en <i>MDN</i>";

console.log($linkDOM.hasAttribute("target"));
console.log($linkDOM.hasAttribute("href"));

// Obtener el valor actual del atributo
console.log($linkDOM.getAttribute("href"));

// Elimina el atributo del elemento
$linkDOM.removeAttribute("download");

let urlDoc =
  "https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model";

// Establecer un nuevo valor al atributo
$linkDOM.setAttribute("href", urlDoc);
$linkDOM.setAttribute("target", "_blank");

// Modificamos los estilos de un elemento mediante la propiedad style
const $subtitleCSS = document.querySelector("#subtitle-css");

console.log($subtitleCSS.style);

// Cualquiera de las 2 opciones son válidas:
//    1) usar el método setProperty o
//    2) acceder a la propiedad directa

$subtitleCSS.style.setProperty("color", "red");
$subtitleCSS.style.color = "orangered";
$subtitleCSS.style.setProperty("background-color", "blue");
$subtitleCSS.style.backgroundColor = "black";

$subtitleCSS.style.padding = "1rem";
$subtitleCSS.style.borderRadius = "0.5rem";
$subtitleCSS.style.textAlign = "center";
$subtitleCSS.style.fontSize = "2rem";

// Para modificar los estilos de varios elementos a la vez, nos ayudamos del método forEach
const $thumbnails = document.querySelectorAll(".thumbnail");

$thumbnails.forEach((el) => {
  el.style.borderRadius = "50%";
  el.style.filter = "grayscale(1)";
  el.style.transform = "rotate(45deg)";
  el.style.border = "5px dotted red";
});

// Accediendo a las clases de un elemento
const $p5 = document.querySelector("#p5");

// La propiedad className nos permite acceder a las clases de un elemento, en formato de cadena de texto
console.log($p5.className);

// La propiedad classList nos permite acceder a las clases de un elemento en formato de lista
console.log($p5.classList);

// La propiedad classList contiene varios métodos que nos permiten manipular las clases de un elemento

// El método contains nos permite verificar si un elemento tiene una clase en específico
console.log($p5.classList.contains("bg-palegreen"));
console.log($p5.classList.contains("bg-skyblue"));

// El método add nos permite añadir una clase al elemento
$p5.classList.add("text-black");

// El método remove nos permite eliminar una clase al elemento
$p5.classList.remove("text-black");

// El método toggle nos permite añadir o eliminar una clase al elemento, dependiendo de si la clase ya existe o no en el elemento
$p5.classList.toggle("text-black");
$p5.classList.toggle("text-black");

// El método replace nos permite reemplazar una clase del elemento por otra
$p5.classList.replace("bg-palegreen", "bg-skyblue");

const $list = document.querySelector("#list");

console.log($list.parentElement);
console.log($list.children);
console.log($list.children[1]);
console.log($list.children[1].textContent);
console.log($list.firstElementChild);
console.log($list.lastElementChild);
console.log($list.previousElementSibling);
console.log($list.nextElementSibling);

const $insertDOM = document.querySelector("#dom-insert");

// Crea un nuevo elemento HTML del tipo indicado pero no lo inserte en el DOM
const $languagesList = document.createElement("ol");
$languagesList.setAttribute("id", "languages");
$languagesList.innerHTML = "<li>Hola</li>";

// Insertar el elemento antes del nodo de referencia
$insertDOM.before($languagesList);
// Insertar el elemento después del nodo de referencia
$insertDOM.after($languagesList);
// Inserta el elemento al principio dentro del nodo de referencia
$insertDOM.prepend($languagesList);
// Inserta el elemento al final dentro del nodo de referencia
$insertDOM.append($languagesList);

const languages = ["JavaScript", "HTML", "CSS", "PHP", "Python", "JAVA"];

languages.forEach((el) => {
  const $item = document.createElement("li");
  $item.textContent = el;
  $languagesList.append($item);
});

// Elimina un elemento del DOM
$languagesList.firstElementChild.remove();
