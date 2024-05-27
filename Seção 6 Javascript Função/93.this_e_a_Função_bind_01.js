const pessoa = {
    saudacao: 'bom dia',
    falar(){
        console.log(this.saudacao);
    }
}

const pessoinha = {
    saudacaozinha : 'bonzinho diazinho',
    falar(){
        console.log(this.saudacaozinha)
    }
}

const falar = pessoa.falar/*.bind(pessoa)*/;
falar(); // conflito entre paradigmas: funcional e OO

const falar2 = pessoinha.falar.bind(pessoinha);
falar2();

// const falarDePessoa = pessoa.falar.bind(pessoa);
// falarDePessoa();

