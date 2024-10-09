//NIVEL 4
/*Máximo y mínimo en un array: Escribe una función que encuentre el valor
más grande y el más pequeño en un array de números.*/

function mayor_menor(array) {
    let mayor = Math.max(...array);
    let menor = Math.min(...array);
    return { mayor, menor };
  }
  console.log(mayor_menor([1,2,3,4,5,10,9,8]));   