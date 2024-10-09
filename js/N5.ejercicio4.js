//NIVEL 5
/*Clases básicas: Crea una clase Persona con propiedades nombre y edad , y un
método que salude con el nombre de la persona.*/

class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludo() {
      console.log(`Mi nombre es ${this.nombre} y tengo la edad de ${this.edad}`);
    }
  }
  
  let persona = new Persona('Joanna', 20);
  persona.saludo();