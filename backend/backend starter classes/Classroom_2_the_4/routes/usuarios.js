const express = require('express');
const router = express.Router();

const mysql = require('mysql2');

const Sequelize = require('sequelize');

// forma mais top de fazer a const
const { DataTypes, Op, Association } = Sequelize;
// const DataTypes = Sequelize.DataTypes;


// const connection = mysql.createConnection({
//     host: '127.0.0.1', // OU LOCALHOST
//     port: 3306,
//     user: 'root',
//     password: '12345678',
//     database: 'exemplo'
// });

const sequelize = new Sequelize(
    'exemplo',
    'root',
    '12345678',
    {
        host: '127.0.0.1',
        port: '3306',
        dialect: 'mysql',
        define: {
            timestamps: false
        }
    }
);
// DEFININDO PROMISE
// const promise = sequelize.authenticate()
// promise.then(() => {
//     return sequelize.query();
// });
// promise.then((result) =>{
//     return sequelize.execute();
// });
// promise.catch((error) => {

// });

sequelize.authenticate()
    .then(() => {
        console.log('Banco de dados conectado com sucesso.');
    }).catch((erro) => {
        console.error("Não foi possível se conectar ao banco de dados.", erro);
    });

const Usuario = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING(200),
        allowNull: true,
        defaultValue: null,
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
    data_criacao: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
});



router.get('/', async (request, response) => {
    // FAZENDO UMA PROCURA NA TABELA DE USUARIOS
    try {
        const result = await Usuario.findAll(); //ID COMENTARIO 82 :                                      ENCONTROU ? SE SIM DESCE PRA PROXIMA LINHA
        response.json(result); // SE SIM EXECUTA ESSA FUNCAO 
    } catch (error) { // CASO NA LINHA ID COMENTARIO 82 NAO FOR ENCONTRATO CAI LOGO NO CATCH
        console.log("Não foi possível consultar ", error);
        response.status(500).send("Não Há possibilidades de identificar o que precisa no no momento !");
        // CÓDIGO DE STATUS ERROR 500 , onde não chegamos  a conseguir consultar o usuario e enviamos uma mensagem dentro do console e dentro do response.
    }


    // Usuario.findAll()
    // .then((result) => {
    //     response.json(result);
    // })
    // .catch((error) => {
    //     console.log("Não foi possível consultar ", error);
    //     response.status(500).send();
    // })

});
router.get('/:usuarioId', async (request, response) => {
    const usuarioId = request.params.usuarioId;

    try {
        const result = await Usuario.findByPk(usuarioId);
        if (result) {
            response.json(result);
            response.status(201);
        } else {
            response.status(404).json({ error: 'Usuário não encontrado' });
            //DUVIDA POR QUE TRATAR O ERRO COM JSON SE PODEMOS UTILIZAR O SEND ?
            // NO CASO DO JSON ELE TAMBÉM É TRANSMITIDO PARA FRONT O QUE FAZER NESSE CASO.
        }
    } catch (error) {
        console.log("Não foi possível consultar ", error);
        response.status(500).send();
    }

});

// const objeto = undefined;
// console.log(objeto ? objeto.nome : undefined);

router.post('/', async (request, response) => {

    const usuario = {}
    usuario.nome = request.body.nome;
    usuario.idade = request.body.idade;

    try {
        await Usuario.create(usuario);
        response.status(201).send("Usuario inserido com sucesso.");
    } catch (error) {
        console.log("Não foi possível cadastrar", error);
        response.status(500).send();
    }
});

router.post('/atualizar', async (request, response) => {

    const usuario = {}
    usuario.Id = request.body.usuarioId;
    usuario.nome = request.body.nome;
    usuario.idade = request.body.idade;

    try {
        const result = await usuario.update({
            nome: usuario.nome,
            idade: usuario.idade,
        },
            {
                where: {
                    id : usuario.Id,
                }
            }).then(() => {
            });

            if(result === true) {
                response.status(201).send('ATUALIZADO COM SUCESSO');
            }else{
                console.log('ERRROR');
            }

    } catch (error) {
        console.log("Não foi possível atualizar seu cadastro", error);
        response.status(500).send('Error na atualização do cadastro');
    }
});


module.exports = router;
