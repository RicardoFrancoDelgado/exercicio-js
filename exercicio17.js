// 17) Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A 10%
// B 15%
// C 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function aumentoSalario(plano, salario) {
  let novoSalario;
  switch(plano) {
    case 'A':
      novoSalario = salario + (salario * 0.10)
      break
    case 'B':
      novoSalario = salario + (salario * 0.15)
      break
    case 'C':
      novoSalario = salario + (salario * 0.20)
      break
    default:
      return 'Plano inválido'
  }
  return novoSalario
}

console.log(aumentoSalario('A', 1500))
console.log(aumentoSalario('B', 1500))
console.log(aumentoSalario('C', 1500))
console.log(aumentoSalario('D', 1500))


