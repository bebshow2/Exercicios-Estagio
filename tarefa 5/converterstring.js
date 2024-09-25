const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para inverter uma string
function inverterString(s) {
    let stringInvertida = "";

    for (let i = 0; i < s.length; i++) {
        stringInvertida = s[i] + stringInvertida; 
    }

    return stringInvertida;
}

// Função principal que pede a entrada do usuário
function main() {
    rl.question("Digite uma string para inverter: ", function(entrada) {
        const resultado = inverterString(entrada);
        console.log("String invertida:", resultado);
        rl.close();
    });
}

main();