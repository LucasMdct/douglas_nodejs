
/* QUEBRANDO A MALDIÇÃO DO OLÁ MUNDO */
console.log("Hello Node JS");
console.log("Minha Primeira Mensagem");
/////////////////////////////////////////

const datefns = require('date-fns');

const dataAtual = new Date();

console.log(dataAtual);

const dataFormatada = datefns.format(dataAtual, 'dd/MM/yyyy');

console.log(dataFormatada);