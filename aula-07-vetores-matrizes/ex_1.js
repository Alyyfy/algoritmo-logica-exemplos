const prompt = require('prompt-sync')()

// Criando Vetor
let produtos = []

//Primeira pergunta
console.log("=== Lista de compras ===")
console.log('Digite o nome de 5 produtos abaixo: ')
console.log("======================================")
console.log(' ') // linha em branco

// Laço de repetição para colocar o nome dos produtos
for (let i = 0; i < 5; i ++) {
    produtos[i] = prompt(`Digite o nome do ${i + 1}º produto: `)
}

// Exibindo os nomes dos produtos
console.log('_____________________________')
console.log("Nomes dos produtos selecionados: ")
console.log(" ")

for (let i = 0; i < 5; i++) {
    console.log(`O nome do ${i + 1}º produtos selecionados foi: ${produtos[i]}.`)
}