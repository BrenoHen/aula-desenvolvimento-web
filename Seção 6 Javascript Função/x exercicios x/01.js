// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

function calcular (valor1, valor2){
    console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`);
    console.log(`${valor1} - ${valor2} = ${valor1 - valor2}`);
    console.log(`${valor1} * ${valor2} = ${valor1 * valor2}`);
    console.log(`${valor1} / ${valor2} = ${valor1 / valor2}`);
}

calcular(100, 10);