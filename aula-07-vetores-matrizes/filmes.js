// Instalação biblioteca
// npm install prompt-sync

// Importação da biblioteca
const prompt = require('prompt-sync')()

// Criando vetor (Tecnica para guardar informações)
let filmes = []

//Primeir pergunta
console.log('Digite o nome de 5 filmes abaixo: ')
console.log(' ') // linha em branco

// Laço de repetição para colocar o nome dos filmes
for (let i = 0; i < 5; i ++) {
    filmes[i] = prompt(`Digite o nome do ${i + 1}º filme: `)
}

// Exibindo os nomes do filmes
console.log('_____________________________')
console.log("Nomes dos filmes digitados: ")
console.log(" ")

for (let i = 0; i < 5; i++) {
    console.log(`O nome do ${i + 1}º filme digitado foi: ${filmes[i]}.`)
}
