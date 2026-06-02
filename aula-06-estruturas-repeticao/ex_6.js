const prompt = require('prompt-sync')()

let numero
let resultado

console.log("--- Tabuada ---")
console.log("==============================================================================")
console.log(" ")

numero = parseInt(prompt("Digite um número: "))

//Estrutura PARA
for (let i = 1; i <= 10; i++) {
    resultado = numero * i

    console.log(numero + " x " + i + " = " + resultado)
}
