const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (let i in notas) {
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Veronica',
    sobrenome: 'Novaes',
    idade: 27,
    peso: 70.5
}

for (let atributo in pessoa) {
    console.log(`${atributo}: ${pessoa[atributo]}`);
}