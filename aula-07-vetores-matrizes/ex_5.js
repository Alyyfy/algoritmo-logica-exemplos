const prompt = require('prompt-sync')();

// Vetores já preenchidos com o cardápio
const nomesPratos = ["Frango Grelhado", "Macarrão Bolonhesa", "Peixe na Brasa", "Salada Caesar"];
const precosPratos = [32.50, 28.00, 45.00, 22.00];

// Exibindo cardápio primeiro
console.log("--- Cardápio ---");
for (let i = 0; i < 4; i++) {
    console.log(`${i + 1}. ${nomesPratos[i]} - R$ ${precosPratos[i].toFixed(2)}`);
}
console.log(" "); // Linha em branco para separar visualmente

// Primeira pergunta
let escolha = parseInt(prompt("Escolha um prato pelo número (1 a 4): "));
console.log(" ");

// Exibindo resultado
if (escolha >= 1 && escolha <= 4) {
    let indiceSelecionado = escolha - 1; // Ajusta para o índice do vetor (0 a 3)
    
    console.log(`Você escolheu: ${nomesPratos[indiceSelecionado]}`);
    console.log(`Preço: R$ ${precosPratos[indiceSelecionado].toFixed(2)}`);
} else {
    console.log("Opção inválida! Por favor, escolha um número entre 1 e 4.");
}