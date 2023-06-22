const express = require('express');
const router = express.Router();

const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: '127.0.0.1', // OU LOCALHOST
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'exemplo'
});

connection.connect((error) => {
    if (error) {
        console.log('Não foi possível conectar', error);
    } else {
        console.log('Conectado com Sucesso');
    }
});

router.get('/:usuarioId', (request, response) => {
    const usuarioId = request.params.usuarioId;
// SQL INJECTION
    connection.query(
        'SELECT * FROM usuarios WHERE id = ?',
        [usuarioId],
        (error, result) => {
            if(error) {
                console.log('erro ao consultar', error);
            } else {
                if (result.length === 0) {
                    response.status(404).send('Usuário não encontrado');
                } else {
                    response.json(result[0]);
                }
            }
    
    });
    

});

router.post('/', (request, response) => {

    const usuario = {}
    usuario.nome = request.body.nome;
    usuario.idade = request.body.idade;
    
    connection.execute(
        'INSERT INTO usuarios (nome, idade) VALUES (?, ?)',
        [usuario.nome, usuario.idade],
        (error, result) => {
            if (error) {
                console.log('Erro ao inserir usuário:', error);
                response.status(500).send('Erro interno no servidor');
            } else {
                console.log('Usuário inserido com sucesso');
                response.status(201).send('Usuário inserido com sucesso');
            }
        }
    );

});


module.exports = router;
