/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
  
    return array[0];
}
const arr = [1, 2, 3, 4, 5];
console.log(devolverPrimerElemento(arr))


function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}
let ar = [1, 4, 5, 8];
console.log(devolverUltimoElemento(ar));

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}
let retornarLongitud = [2,4,6,9,10,7,10];
console.log(obtenerLargoDelArray(retornarLongitud))

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   const newArray = array.map((element) => element + 1);
   return newArray;
}

let numeros = [1, 2, 3, 4, 5];
console.log(incrementarPorUno(numeros))
   
function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}
let miArray = [1, 2, 3];
let elementoNuevo = 4;
console.log(agregarItemAlFinalDelArray(miArray, elementoNuevo))

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

   array.unshift(elemento)
   return array;
}
let miArr = [0, 2, 4];
let elementoN = 6;
console.log(agregarItemAlFinalDelArray(miArr, elementoN))

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join (" ");
}
let palabra = ["Henry", "Plataforma","tecnologia","array"];
console.log(dePalabrasAFrase(palabra))


function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
}
let arrayM = ["string", "elemento"];
let elementoBuscado = "elemento";
console.log(arrayContiene(arrayM, elementoBuscado))

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma = 0;
   for (let i = 0; i < arrayOfNums.length; i++) {
      suma += arrayOfNums[i];
   }
   return suma;
}

let arM = [1, 5, 6, 7, 9];
console.log(agregarNumeros(arM));;

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let suma = 0;
   for (let i = 0; i < resultadosTest.length; i++) {
      suma += resultadosTest[i];
   }
   const promedio = suma / resultadosTest.length;
   return promedio;
}
let notas = [80, 90, 75, 95, 70];
console.log(promedioResultadosTest(notas))


function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

   let maximo = arrayOfNums[0]; 

   for (let i = 1; i < arrayOfNums.length; i++) {
      if (arrayOfNums[i] > maximo) {
         maximo = arrayOfNums[i]; 
   }

  }
  return maximo;
}

let numeros2 = [5, 20, 10, 8, 15];
console.log(numeroMasGrande(numeros2))

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0) {
      return 0; 
   }
   let producto = 1;
   for (let i = 0; i < arguments.length; i++) {
      producto *= arguments[i]; // Multiplicamos cada argumento
   }
   return producto;
}

console.log(multiplicarArgumentos()) 
console.log(multiplicarArgumentos(5)) 
console.log(multiplicarArgumentos(2, 3, 4))


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let contador = 0;
   for (let i = 0; i < array.length; i++) {
      if (array[i] > 18) {
         contador++;
      }
   }
   return contador;
}
let miArray2 = [10, 20, 25, 15, 30, 5];
console.log(cuentoElementos(miArray2));


function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

   switch (numeroDeDia) {
      case 1 :
         return "Es fin de semana";
      case 7 :
        return "Es fin de semana";
      default:
        return "Es dia laboral";
    }
}
console.log(diaDeLaSemana(1))
console.log(diaDeLaSemana(7))
console.log(diaDeLaSemana(2))
console.log(diaDeLaSemana(3))

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   const numString = num.toString();
   return numString.charAt(0) === "9";
}

console.log(empiezaConNueve(954))
console.log(empiezaConNueve(234))

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   const primerElemento = array[0];

   for (let i = 1; i < array.length; i++) {
      if (array[i] !== primerElemento) {
         return false;

      }
      return true;
   }
}
console.log(todosIguales([2, 2, 2, 2]))
console.log(todosIguales([1, 2, 3, 4]))
console.log(todosIguales(['a', 'a', 'a', 'a']))

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   const mesesBuscados = ["Enero", "Marzo", "Noviembre"];
   const mesesEncontrados = [];

   for (let i = 0; i < array.length; i++) {
      if (mesesBuscados.includes(array[i])) {
         mesesEncontrados.push(array[i]);
      }
   }

   if (mesesEncontrados.length === 3) {
      return mesesEncontrados;
   } else {
      return "No se encontraron los meses pedidos";
   }
}
const mesesDesordenados = ["Febrero", "Abril", "Marzo", "Enero", "Diciembre", "Noviembre"];
console.log(mesesDelAño(mesesDesordenados));

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   const tabla = [];
   for (let i = 0; i <= 10; i++) {
      tabla.push(i * 6);
   }
   return tabla;
}
console.log(tablaDelSeis());

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   return array.filter((elemento) => elemento > 100);
}
const miArray3 = [80, 95, 105, 120, 150];
console.log(mayorACien(miArray3));



/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:

   const resultado = [];
   for (let i = 0; i < 10; i++) {
      num += 2; 
      resultado.push(num);

      if (num === i) {
         return "Se interrumpió la ejecución";
      }
   }
   return resultado;
}
console.log(breakStatement(5));
console.log(breakStatement(4));


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let resultArray = [];

  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }

    num += 2; 
    resultArray.push(num); 
  }

  return resultArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
