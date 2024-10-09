//NIVEL 4
/*Contar vocales: Crea una función que cuente cuántas vocales hay en una
palabra.*/

function contar(palabra) {
    let vocales = 'aeiou';
    let contador = 0;
    for (let letra of palabra) {
      if (vocales.includes(letra)) {
        contador++;
      }
    }
    return contador;
  }
  console.log(contar('hola como estas'));   