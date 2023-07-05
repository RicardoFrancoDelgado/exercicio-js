// 19) O cardápio de uma lanchonete é o seguinte:
// Código Descrição do Produto      Preço
// 100    Cachorro Quente          R$3,00
// 200    Hambúrguer Simples       R$ 4,00
// 300    Cheeseburguer            R$ 5,50
// 400    Bauru                    R$ 7,50
// 500    Refrigerante             R$ 3,50
// 600    Suco                     R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.

function cardapioLanchonete(codigo, preco, quantidade) {
  let valorPagar;
  switch(codigo) {
    case 100:
      valorPagar = preco * quantidade
      return `Comprou Cachorro quente, código do produto: ${codigo}, valor R$ ${valorPagar.toFixed(2)}`
      break
    case 200:
      valorPagar = preco * quantidade
      return `Comprou Hambúrguer Simples, código do produto: ${codigo}, valor R$ ${valorPagar.toFixed(2)}`
      break
    case 300:
      valorPagar = preco * quantidade
      return `Comprou Cheeseburguer, código do produto: ${codigo}, valor R$ ${valorPagar.toFixed(2)}`
      break
    case 400:
      valorPagar = preco * quantidade
      return `Comprou Bauru, código do produto: ${codigo}, valor R$ ${valorPagar.toFixed(2)}`
      break
    case 500:
      valorPagar = preco * quantidade
      return `Comprou Refrigerante, código do produto: ${codigo}, valor R$ ${valorPagar.toFixed(2)}`
      break
    case 600:
      valorPagar = preco * quantidade
      return `Comprou Suco, código do produto: ${codigo}, valor R$ ${valorPagar.toFixed(2)}`
      break
    default:
      return 'Produto não existente'
  } 
}

console.log(cardapioLanchonete(100, 3, 5))
console.log(cardapioLanchonete(200, 4, 5))
console.log(cardapioLanchonete(300, 5.50, 5))
console.log(cardapioLanchonete(400, 7.50, 5))
console.log(cardapioLanchonete(500, 3.50, 5))
console.log(cardapioLanchonete(600, 2.80, 5))
console.log(cardapioLanchonete(700, 2.80, 5))