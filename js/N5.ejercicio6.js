//NIVEL 5
/*Objetos y métodos: Crea un objeto que represente una calculadora con
métodos para sumar, restar, multiplicar y dividir.*/

let calculadora = {
    suma: function(a, b) {
      return a + b;
    },
    resta: function(a, b) {
      return a - b;
    },
    multiplicacion: function(a, b) {
      return a * b;
    },
    division: function(a, b) {
      return b !== 0 ? a / b : 'Cero';
    }
  };
  
  console.log(calculadora.suma (90, 10)); 