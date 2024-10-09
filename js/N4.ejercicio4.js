//NIVEL 4
/*Promedio de un array: Crea una función que reciba un array de números y
devuelva su promedio.*/

function promedio(array) {
    let suma = array.reduce((acc, num) => acc + num, 0);
    return suma / array.length;
  }
  console.log(promedio([10, 9, 10, 9, 8]));   