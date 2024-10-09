//NIVEL 3
/*Buscar en un array: Escribe un programa que busque un valor en un array y
muestre su posición.*/

let array = [10, 15, 20, 25, 30];
let buscar = 20;
let posicion = array.indexOf(buscar);

if (posicion !== -1) {
  console.log(`El valor ${buscar} esta en la posición ${posicion}.`);
} else {
  console.log('No esta dentro de los valores ingresados');
}