function tratarErroELancar(erro){
    // throw new Error('...');
    // throw 10;
    throw 'Mensagem'
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    } catch(e){
        tratarErroELancar(e);
    }
};

const obj = { nome: 'veronica', };
imprimirNomeGritado(obj);