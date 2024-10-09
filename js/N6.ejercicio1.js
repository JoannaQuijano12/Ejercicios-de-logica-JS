//NIVEL 6
/*Manipulación del DOM: Crea un programa que cambie el texto de un párrafo
en una página HTML al hacer clic en un botón.*/

document.getElementById('textoI').addEventListener('click', function() {
    document.getElementById('textoC').textContent = 'Tu texto final es hola';
  });