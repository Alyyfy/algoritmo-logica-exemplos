const prompt = require('prompt-sync')()

let senha
console.log('--- Senha ---')
console.log("============================================================================")
console.log(" ")

// Estrutura do WHILE
do {
    senha = prompt("Digite a senha: ")
} while (senha != "1234")
console.log(" ")
console.log("=============================================================================================")
console.log("Acesso permitido!")