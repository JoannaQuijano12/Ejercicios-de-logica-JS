//NIVEL 6
/*Eventos: Crea un programa que detecte cuándo se ha presionado una tecla y
lo muestre en la consola.*/

document.addEventListener('keydown', function(event) {
    console.log(`Letra presionada es: ${event.key}`);
  });
  