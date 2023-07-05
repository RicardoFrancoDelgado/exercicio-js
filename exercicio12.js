// 12) Faça um algoritmo que calcule o fatorial de um número.

function calcularFatorial(numero) {
  let resultado = 1

  for (let i = 1; i <= numero; i++) {
    resultado *= i
  }

  return resultado
}

console.log(calcularFatorial(5))
console.log(calcularFatorial(7))
