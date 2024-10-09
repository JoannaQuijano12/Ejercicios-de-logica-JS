//NIVEL 5
/*Herencia: Crea una clase Estudiante que herede de Persona y agregue la
propiedad grado . Agrega un método para imprimir el grado.*/

class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }

    saludo() {
        console.log(`Mi nombre es  ${this.nombre} y tengo la edad de ${this.edad}`);
      }
}

class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
      super(nombre, edad);
      this.grado = grado;
    }
  
    Grado() {
      console.log(`Me encuentro cursando el: ${this.grado} cuatrimestre`);
    }
  }
  
  let estudiante = new Estudiante('Joanna', 20, 'Decimo');
  estudiante.saludo();
  estudiante.Grado();