// document.getElementById("count").innerText;
//
// document.getElementById("count")
// en esta línea de código le estoy pidiendo información al HTML, diciéndole, el document,
// traeme un elemento según su ID.

// .innerText;
// le indico que cambiar

// NO HACIA FALTA const document = require("./index.html");

// ERA IGUAL var countEl = document.getElementById("count-el");

// IGUAL console.log(countEl);

// IGUAL var count = 0;

// NO ESTABA PISANDO LA VARIABLE
// function increment() {
//   count++;
//   countEl.innerText = count;
// }

let countEl = document.getElementById("count-el");
let multiplyEl = document.getElementById("multiply-el");
let savedEl = document.getElementById("saved-el");
let saveEl = document.getElementById("save-el");

let count = 0;

function msje() {
  countEl.innerText = "El tren salió";
  setTimeout(() => {
    save();
  }, 1000);
}

function increment() {
  count += 1;
  countEl.innerText = count;
}

function multiply() {
  count = count * 2;
  countEl.innerText = count;
}

function divide() {
  count = count / 2;
  countEl.innerText = count;
}

function resta() {
  count = count - 1;
  countEl.innerText = count;
}

function save() {
  // esto anda pero hay otra manera de hacerlo
  // numActual = " " + count + " -";
  // saveEl.innerText += numActual;
  // count = 0;
  // countEl.innerText = 0;
  let countString = count + " - ";
  saveEl.textContent += countString;
  count = 0;
  countEl.innerText = 0; // que vuelva a 0 lo agregué yo
  // esta forma y la anterior dan exactamente el mismo resultado
  // pero es un poquito más corta y la voy a usar más a futuro
}
