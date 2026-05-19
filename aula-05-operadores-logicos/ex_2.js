const prompt = require('prompt-sync')()

console.log("--- Bilheteria do Parque ---");
let idade = parseFloat(prompt("Informe a idade do visitante: "));

//No JavaScript, o operador lógico 'ou' é repesentado por ||
if (idade < 5 || idade >= 65) {
    console.log("Resultado: Entrada Gratuita!");
} else {
    console.log("Resultado: Paga ingresso normal.");
}