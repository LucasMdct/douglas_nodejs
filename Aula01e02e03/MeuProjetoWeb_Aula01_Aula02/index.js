/// express

const express = require("express");
const porta = 3000;

const servidor = express();

servidor.use(express.json());


//autenticação de middle wares 

servidor.use((request, response, next) => {
     const token = request.headers.token;

     if(token == 'meu-token'){
        next();
     }else{
        response.status(403);
        response.send('Token invalido');
     }
});


// servidor.use("/", (request, response) => {
//     const nome = request.query.nome;
//     const idade = request.query.idade;

//     response.setHeader('content-type', 'text/html; charset=utf-8');
//     response.status(200);
//     response.send('Ola Express !!! Bem vindo ' + nome + ', Sua idade é ' + idade);
// });

servidor.get('/usuario/:usuarioId', (request, response) => {
    const usuarioId = request.params.usuarioId;

    response.status(200);

    const dadosRespota = {
        id: usuarioId,
    };

    response.json(dadosRespota);

});

servidor.post('/usuarios', (request, response) => {

    console.log(request);
    const conteudo = request.body;

    response.status(201); // um status de criação de registro (201: resposta de êxito do método POST ) 
    //restful para boas praticas de programaçao

    //sel *  from

    console.log(conteudo);

    //insert into database;

    const conteudoResponsa = {
        usuario  : conteudo
    }

    response.json(conteudo)

});

servidor.listen(porta, () => {
    console.log('Servidor iniciado na porta:', porta);
});