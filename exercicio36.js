// 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

let valor = [1, 2, 3, 4, 5]

function multiplicarVetor(vetor, multiplicador) {
  let valorResultado1 = []

  vetor.forEach(elemento => {
    valorResultado1.push(elemento * multiplicador)
  })

  return valorResultado1
}

function multiplicarVetorMaiorQueCinco(vetor, multiplicador) {
  let valorResultado2 = []

  if (multiplicador < 5) return
  vetor.forEach(elemento => {
    valorResultado2.push(elemento * multiplicador)
  })

  return valorResultado2
}

console.log(multiplicarVetor(valor, 4))
console.log(multiplicarVetorMaiorQueCinco(valor, 6))