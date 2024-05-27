const fabricantes = ["BMW", "Audi", "Mercedez"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir);

fabricantes.forEach(function(nome){
    console.log(`- ${nome}`);
});

fabricantes.forEach((nome, indice) => console.log(`${indice+1}. ${nome}`));