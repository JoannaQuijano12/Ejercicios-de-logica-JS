//NIVEL 6
/*Crear elementos en el DOM: Escribe un programa que añada un nuevo
elemento li a una lista ul en HTML al hacer clic en un botón.*/

document.getElementById('AgregarC').addEventListener('click', function() {
    let nuevo = document.createElement('li');
     nuevo.textContent = 'Nuevo campo';
    document.getElementById('lista').appendChild(nuevo);
  });