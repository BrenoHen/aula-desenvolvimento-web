function criarProduto (nomeDoProduto, precoDoProduto){
    return{
        nomeDoProduto:nomeDoProduto,
        precoDoProduto: precoDoProduto,
        descontoAplicado: (precoDoProduto * 25 / 100)
    }
}

console.log(criarProduto('Carrinho de controle remoto', 250))
