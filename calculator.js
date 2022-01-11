console.log("hola mundo")

// FUNCIONES DECLARATIVAS
// SOLO SE HACE UNA VEZ
// function
function sum(a, b) {

  // EN CASO DE QUE NO HAYA ARGUMENTOS
  if (!a && !b) {
    return 0
  }

  // EN CASO DE QUE EL SEGUNDO ARGUMENTO NO EXISTA
  if(!b) {
    b = 0
  }

  const total = a + b  

  return total;
}

// INVOCACIÓN DE FUNCIÓN
// PUEDE USARASE (INVOCARSE) LAS VECES QUE QUIERAN

function subtract(a, b) {
  return;
}

function divide(a, b) {
  return;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
