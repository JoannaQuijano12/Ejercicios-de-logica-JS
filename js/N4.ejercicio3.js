//NIVEL 4
/*Factorial: Escribe una función que calcule el factorial de un número.*/

function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  console.log(factorial(9));   