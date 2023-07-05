// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).


function classeTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
    console.log("Equilátero")
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("Isósceles")
  } else {
    console.log("Escaleno")
  }
}


classeTriangulo(1,0,1)


