// 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
// quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
// Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
// mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['oi', 'tudo bem', 'ta legal', 'ok']
let vetorDouble = [1.0, 1.5, 3.6, 5]

function concatenarVetores(...args) {
  let resultado = []

  for (let i = 0; i < arguments.length; i++) {
    resultado = resultado.concat(arguments[i])
  }

  return resultado
}

console.log(concatenarVetores(vetorInteiro, vetorString))
console.log(concatenarVetores(vetorString, vetorDouble))