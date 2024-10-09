//NIVEL 2
/*Validación de entrada: Pide al usuario que ingrese un número y verifica si es
realmente un número. Si no lo es, muestra un mensaje de error.*/


let valor = prompt("Ingresa algun valor: ")

if (isNaN(valor)) {
    console.log("No es un numero")
} else {
    console.log("Es un numero")
}