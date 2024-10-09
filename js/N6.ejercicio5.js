//NIVEL 6
/*Formularios: Escribe un programa que valide que un formulario tiene todos
sus campos llenos antes de enviarlo.*/

document.getElementById('form').addEventListener('submit', function(event) {
    let cam1 = document.getElementById('Nom').value;
    let cam2 = document.getElementById('Ape').value;
    let cam3 = document.getElementById('Com').value;
    
    if (cam1 === '' || cam2 === '' || cam3 === '') {
      event.preventDefault();
      alert('Los campos estan vacios');
    }
  });