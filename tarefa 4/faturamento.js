// Faturamento mensal por estado
var faturamentoSP = 67836.43;
var faturamentoRJ = 36678.66;
var faturamentoMG = 29229.88;
var faturamentoES = 27165.48;
var faturamentoOutros = 19849.53;

// Calculando o faturamento total
var faturamentoTotal = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros;

// Calculando o percentual para cada estado
var percentualSP = (faturamentoSP / faturamentoTotal) * 100;
var percentualRJ = (faturamentoRJ / faturamentoTotal) * 100;
var percentualMG = (faturamentoMG / faturamentoTotal) * 100;
var percentualES = (faturamentoES / faturamentoTotal) * 100;
var percentualOutros = (faturamentoOutros / faturamentoTotal) * 100;

// Exibindo os resultados
console.log("Percentual de representação por estado:");
console.log("SP: " + percentualSP.toFixed(2) + "%");
console.log("RJ: " + percentualRJ.toFixed(2) + "%");
console.log("MG: " + percentualMG.toFixed(2) + "%");
console.log("ES: " + percentualES.toFixed(2) + "%");
console.log("Outros: " + percentualOutros.toFixed(2) + "%");
