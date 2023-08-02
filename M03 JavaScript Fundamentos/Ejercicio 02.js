/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   let resultado = x + y;
   return resultado;
}
let resultadoSuma = suma(4,5)
console.log(resultadoSuma)

function resta(x, y) {
   let resultado = x - y;
   return resultado;
}
let resultadoResta = resta(10,9)
console.log(resultadoResta)

function divide(x, y) {
   let resultado = x / y;
   return resultado;
}
let resultadoDivide = divide(7,2)
console.log(resultadoDivide)

function multiplica(x, y) {
   let resultado = x * y;
   return resultado;
}
let resultadoMultiplica = multiplica(10,5)
console.log(resultadoMultiplica)

function obtenerResto(x, y) {
   let resultado = x % y;
   return resultado;
}
let resultadoObtenerResto = obtenerResto(20,6)
console.log(resultadoObtenerResto)


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
