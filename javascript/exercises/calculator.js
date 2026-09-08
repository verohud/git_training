/*const add = (numberParameter) => {
  console.log("Vysledek: " + numberParameter);
};

const substract = (numberParameter) => {
  console.log("Vysledek: " + numberParameter);
};

const multiply = (numberParameter) => {
  console.log("Vysledek: " + numberParameter);
};

const divide = (numberParameter) => {
  console.log("Vysledek: " + numberParameter);
};

add(15 + 48);
substract(98 - 41);
multiply(54 * 30);
divide(88 / 6);*/

//jina varianta

function add(a, b) {
  const result = a + b;
  console.log(`${a} + ${b} = ${result}`);
}

function substract(cislo1, cislo2) {
  const result = cislo1 - cislo2;
  console.log(`${cislo1} - ${cislo2} = ${result}`);
}

function multiply(cislo1, cislo2) {
  const result = cislo1 * cislo2;
  console.log(`${cislo1} * ${cislo2} = ${result}`);
}

function divide(cislo1, cislo2) {
  const result = cislo1 / cislo2;
  console.log(`${cislo1} / ${cislo2} = ${result}`);
}

add(15, 48);
substract(98, 41);
multiply(54, 30);
divide(88, 6);
