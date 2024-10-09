//NIVEL 2
/*Palíndromos: Pide al usuario ingresar una palabra y determina si es un
palíndromo (se lee igual al derecho y al revés).*/


let pal = prompt("Ingresa una palabra: ")

let invertir = pal.split("").reverse().join("")

if (pal===invertir) {
    console.log("Es una palbra que es palindroma")
} else {
    console.log("La Es una  no es palindroma")
}