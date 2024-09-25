const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função que verifica se o número pertence à sequência de Fibonacci
function pertenceAFibonacci(num) {
    let a = 0;
    let b = 1;

    // Verifica se o número é 0 ou 1 (casos base)
    if (num === a || num === b) {
        return true;
    }

    // Gera a sequência de Fibonacci até o número informado
    while (b < num) {
        const proximo = a + b;
        a = b;
        b = proximo;
    }

    // Retorna se o número pertence ou não
    return b === num;
}

// Entrada do usuário
rl.question("Informe um número: ", (input) => {
    const numeroInformado = parseInt(input, 10);
    if (isNaN(numeroInformado)) {
        console.log("Por favor, informe um número válido.");
    } else {
        if (pertenceAFibonacci(numeroInformado)) {
            console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
        } else {
            console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
        }
    }
    rl.close();
});
