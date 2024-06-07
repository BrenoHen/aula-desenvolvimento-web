// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function verificaTipoDoTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return 'Triângulo equilátero';
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return 'Triângulo isósceles';
    } else {
        return 'Triângulo escaleno';
    }
}

console.log(verificaTipoDoTriangulo(3, 3, 3)); // Triângulo equilátero
console.log(verificaTipoDoTriangulo(1, 2, 3)); // Triângulo escaleno
console.log(verificaTipoDoTriangulo(3, 3, 2)); // Triângulo isósceles
