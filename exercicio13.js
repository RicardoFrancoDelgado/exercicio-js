// 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

function verificarDia(numero) {
  switch(numero) {
    case 1:
      return 'Final de semana'
      break
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return 'Dia útil'
      break
    case 7:
      return 'Final de semana'
    default:
      return 'Dia inválido'
  }
}

console.log(verificarDia(1))
console.log(verificarDia(2))
console.log(verificarDia(3))
console.log(verificarDia(4))
console.log(verificarDia(5))
console.log(verificarDia(6))
console.log(verificarDia(7))
console.log(verificarDia(8))
console.log(verificarDia('a'))