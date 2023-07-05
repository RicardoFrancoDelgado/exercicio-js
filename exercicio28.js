// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

let vetor = [10, 25, 34, 11, 7, 16, 29]

function vetorParOuImpar(vetorNumeros) {
  let qtdPares = 0
  let qtdImpar = 0 

  for (let i = 0; i < vetorNumeros.length; i++) {
    if(vetorNumeros[i] % 2 == 0) {
      qtdPares++
    } else {
      qtdImpar++
    }
  }
  console.log(`Quantidade de numeros pares ${qtdPares}, quantidade de números impar ${qtdImpar}`)
}

vetorParOuImpar(vetor)