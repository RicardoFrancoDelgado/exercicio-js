// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

function exibirResultados(n1, n2) {
  let soma = n1 + n2
  let subtracao = n1 - n2
  let multiplcacao = n1 * n2
  let divisao = n1 / n2

  return `A seguir os resultados: 
  Soma = ${soma}
  Subtração = ${subtracao}
  Multiplicação = ${multiplcacao}
  Divisão = ${divisao.toFixed(2)}`
}

console.log(exibirResultados(4, 6))