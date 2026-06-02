const prompt = require('prompt-sync')()

let numero
let soma = 0
let i=1

console.log("--- Soma dos números ---")
console.log(" ")

numero = parseInt(prompt("Digite um número inteiro positivo: "))

//Estrutura enquanto
while(i <= numero) {
    soma = soma + i
    i++
}

console.log("========================================================================================")
console.log("Resultado da soma: ", soma)