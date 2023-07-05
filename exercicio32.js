// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function mediaDoVetor(vetor) {
  let soma = 0
  for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i]
  }

  return soma / vetor.length

}

vetor = [5, 5, 8, 7, 6]

console.log(mediaDoVetor(vetor))