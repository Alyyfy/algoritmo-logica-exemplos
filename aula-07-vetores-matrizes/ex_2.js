const prompt = require('prompt-sync')()

// Vetor com os nomes dos produtos
const produtos = ["Arroz 5kg", "Feijão 1kg", "Azeite de Oliva", "Macarrão", "Café torrado", "Sal Refinado"];

// Criando preço no vetor
const precos = [29.90, 5.50, 12.00, 15.75, 89.90, 1.99];

// Criando Vetor
let maiorPreco = precos[0];
let menorPreco = precos[0];

//Primeira pergunta
console.log("=== Lista de produtos ===")
console.log("======================================")
console.log(" 1. Arroz 5kg ") 
console.log(" 2. Feijão 1kg ")
console.log(" 3. Azeite de Olivia ")
console.log(" 4. Macarrão ")
console.log(" 5. Café torrado ")
console.log(" 6. Sal refinado ")

// Laço de repetição
for (let i = 0; i < precos.length; i++) {
    
    // Verificando o maior preço
    if (precos[i] > maiorPreco) {
        maiorPreco = precos[i];
    }
    
    // Verificando o menor preço
    if (precos[i] < menorPreco) {
        menorPreco = precos[i];
    }
}

// Exibindo os resultados 
console.log("======================================")
console.log(`O maior preço encontrado: R$ ${maiorPreco.toFixed(2)}`);
console.log(`O menor preço encontrado: R$ ${menorPreco.toFixed(2)}`);