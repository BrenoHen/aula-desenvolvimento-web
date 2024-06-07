function getPreco(imposto = 0, moeda = 'R$'){
    return `${this.nomeProduto}: ${moeda} ${(this.preco * (1 - this.desc) * (1 + imposto)).toFixed(2)}`;
}

// declarando os objetos
const produto = {nomeProduto: 'Acer Aspire 5', preco: 2500, desc: 0.15, getPreco};
const carro = {nomeProduto: 'Fiat Uno', preco: 15000, desc: 0.20, getPreco};

// chamada tradicional
console.log(produto.getPreco());
console.log(carro.getPreco() + '\n');

// chamada usando o call
console.log(getPreco.call(produto));
console.log(getPreco.call(carro) + '\n');

// chamada usando o apply
console.log(getPreco.apply(produto));
console.log(getPreco.apply(carro) + '\n');

// passando valores diferentes por parametro com o call
console.log(getPreco.call(produto, 0.17, '$'))
console.log(getPreco.call(carro, 0.017, '$') + '\n')

// passando valores diferentes por parametro com o apply
console.log(getPreco.apply(produto, [0.17, '$']))
console.log(getPreco.apply(carro, [0.17, '$']))
