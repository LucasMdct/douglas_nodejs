/// express

const express = require("express");
const porta = 3000;

const servidor = express();

servidor.use("/", (request, response) => {
    const nome = request.query.nome;
    const idade = request.query.idade;

    response.setHeader('content-type', 'text/html; charset=utf-8');
    response.status(200);
    response.send('Ola Express !!! Bem vindo ' + nome + ', Sua idade é ' + idade);
});

servidor.listen(porta, () => {
console.log('Servidor iniciado na porta:', porta);
});