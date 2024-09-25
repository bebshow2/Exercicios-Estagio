const fs = require('fs');

// Função para ler os dados do arquivo JSON
function lerDados() {
  const data = fs.readFileSync('faturamento.json');
  const json = JSON.parse(data);
  return json.faturamento;
}

// Função para calcular o faturamento
function calcularFaturamento() {
  const faturamento = lerDados();

  let menorValor = null;
  let maiorValor = null;
  let somaValores = 0;
  let diasComFaturamento = 0;

  for (let i = 0; i < faturamento.length; i++) {
    const valor = faturamento[i].valor;
    if (valor > 0) {
      if (menorValor === null || valor < menorValor) {
        menorValor = valor;
      }
      if (maiorValor === null || valor > maiorValor) {
        maiorValor = valor;
      }
      somaValores += valor;
      diasComFaturamento++;
    }
  }

  const mediaMensal = somaValores / diasComFaturamento;
  let diasAcimaDaMedia = 0;

  for (let i = 0; i < faturamento.length; i++) {
    if (faturamento[i].valor > mediaMensal) {
      diasAcimaDaMedia++;
    }
  }

  return {
    menorValor: menorValor !== null ? menorValor : 0,
    maiorValor: maiorValor !== null ? maiorValor : 0,
    diasAcimaDaMedia: diasAcimaDaMedia
  };
}

const resultado = calcularFaturamento();
console.log(`Menor valor de faturamento: ${resultado.menorValor}`);
console.log(`Maior valor de faturamento: ${resultado.maiorValor}`);
console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
