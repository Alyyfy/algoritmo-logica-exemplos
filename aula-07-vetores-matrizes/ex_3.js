const prompt = require('prompt-sync')();

// Criando o vetor vazio para armazenar os números
let numeros = [];

console.log("Digite 5 números: ");
console.log(" ");

// Esse laço roda 5 vezes, lê as entradas do usuário e as adiciona no vetor
for (let i = 0; i < 5; i++) {
    let numeroDigitado = parseInt(prompt(`Digite o ${i + 1}º número: `));
    numeros.push(numeroDigitado); // Adiciona o número no final do vetor
}

console.log("====\nExibindo na ordem inversa:\n====");

// Exibindo o resultado
for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(`Posição ${i}: ${numeros[i]}`);
}