//NIVEL 5
/*Callbacks: Crea una función que reciba un callback. Usa el callback para
imprimir un mensaje en la consola.*/

function callback(callback) {
    callback('Hey');
  }
  
  callback(function(mensaje) {
    console.log(mensaje);
  });  