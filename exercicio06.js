// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
  const montante = capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)
  return montante
}

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
  const montante = capitalInicial * (1 + taxaJuros) ** tempoAplicacao
  return montante
}

console.log(jurosSimples(1500, 5/100, 5))
console.log(jurosCompostos(1500, 5/100, 5).toFixed(2))