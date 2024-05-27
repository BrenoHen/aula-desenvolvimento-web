const escola = "Xerebas";

console.log("Palavra: " + escola);
console.log("4º indice: " + escola.charAt(4));
console.log("7º indice: " + escola.charAt(7));
console.log("4º indice tabela ASCI: " + escola.charCodeAt(4));
console.log("A partir da 1 indice: " + escola.substring(1));
console.log("Do indice 0 ao indice 3-1: " + escola.substring(0, 3));

console.log("Substituindo a letra e pela letra a: " + escola.replace('e','a'));

console.log('Joao,Ana,Maria,Pedro'.split(','));
console.log(escola.indexOf('s'));
