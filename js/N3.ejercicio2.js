//NIVEL 3
/*Suma de elementos de un array: Crea un programa que sume todos los
números de un array.*/

let array = [1, 2, 3];
let suma = array.reduce((res, num) => res + num, 0);
console.log(suma);