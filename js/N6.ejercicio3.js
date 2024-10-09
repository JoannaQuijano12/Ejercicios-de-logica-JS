//NIVEL 6
/*Eliminar elementos del DOM: Crea un programa que elimine el último
elemento de una lista ul cuando se haga clic en un botón.*/

document.getElementById('EliminarF').addEventListener('click', function() {
    let lista = document.getElementById('lista');
    lista.removeChild(lista.lastElementChild);
  });