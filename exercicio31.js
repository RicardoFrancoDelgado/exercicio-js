// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

function verificarNegativo(vetor) {
  let qtdNegativos = 0
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] < 0) {
      qtdNegativos++
    }
  }

  return qtdNegativos
}

let vetor = [10, 5, -8, -6, 77, -13, 1, -9, -4]

console.log(verificarNegativo(vetor))