// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function percorrerVetorDeInteiro(vetor) {
  let maiorValor
  let menorValor

  for (let i = 0; i < vetor.length; i++) {
    if (maiorValor === undefined && menorValor === undefined) {
      maiorValor = vetor[i]
      menorValor = vetor[i]
    } else {
      if (vetor[i] > maiorValor) {
        maiorValor = vetor[i]
      }
      if (vetor[i] < menorValor) {
        menorValor = vetor[i]
      }
    }
  }

  return [maiorValor, menorValor]
}

let vetor = [10, 5, 8, 6, 77, 13, 1, 9, 4]

console.log(percorrerVetorDeInteiro(vetor))