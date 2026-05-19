const prompt = require('prompt-sync')()

console.log("---Análise de Currículo ---");
console.log("========================================================")
console.log(" ")

let idade = parseFloat(prompt("Digite a sua idade: "))
let sabeJS = prompt("Sabe JavaScript? (s/n) ") === "s";
let sabePython = prompt("Sabe Python? (s/n) ") ==="s";
console.log("========================================================")
console.log(" ")

//Currículo aceito se:
if (idade >= 18 && (sabePython || sabeJS)) {
    console.log("Currículo APROVADO! ")
} else {
    console.log("Currículo NEGADO! ")
}