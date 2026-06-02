const prompt = require('prompt-sync')()

let nota
let soma = 0
let contador = 0

console.log('--- Média dos alunos ---')
console.log("============================================================================")
console.log("Digite as notas dos alunos")
console.log("Digite -1 para encerrar")
console.log(" ")

nota = parseFloat(prompt("Digite a nota: "))

//Estruta enquanto
while (nota != -1) {
    soma += nota
    contador++

    nota = parseFloat(prompt("Digite outra nota: "))
}

let media = soma/contador

//Exibir na tela
console.log("==============================================================================")
console.log("Média das notas: ", media.toFixed(2))