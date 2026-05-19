const prompt = require('prompt-sync')()

console.log("--- Produtos nos estoques ---");
console.log(" ")

let esgotado = prompt("O produto está esgotado?(S para sim e N para não) ") === "S"
console.log(" ")

//Se não tiver esgotado
if(!esgotado) {
    console.log("Produto disonível para venda");
} else {
    console.log("Por favor,reabasteça o estoque");
}

