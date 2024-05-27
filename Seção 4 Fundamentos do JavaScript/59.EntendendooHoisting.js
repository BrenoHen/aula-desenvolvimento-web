// hoisting com var = içamento 
console.log('a = ', a); // undefined
var a = 2;
console.log('a = ', a); // 2

// hoisting com let -> nao existe içamento VAI DAR ERRO
console.log('b = ', b);
let b = 3;
console.log('b = ', b);
