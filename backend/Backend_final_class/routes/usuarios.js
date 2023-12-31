const express = require('express');
const { ValidationError } = require('sequelize');

const Usuarios = require('../models/Usuarios');
const { compararSenha } = require('../utils/senha');
const { gerarTokenUsuario } = require('../utils/token');
const { checarResultadoValidacao } = require('../validators');
const { validadorLogin, validadorCadastroUsuario } = require('../validators/usuarios');

const router = express.Router();

function erroEmailDuplicado(error) {
  if (!(error instanceof ValidationError)) {
    return false;
  }

  return error.errors.find((databaseError) => (
    databaseError.type === 'unique violation' && databaseError.path === 'usuario_email_unico'
  ));
}

/**
 * Cadastro de usuários
 */
router.post(
  '/',
  validadorCadastroUsuario,
  async (req, res) => {
    if (checarResultadoValidacao(req, res)) {
      return;
    }

    try {
      const { nome, email, senha } = req.body; 

      // eslint-disable-next-line no-unused-vars
      const resultado = await Usuarios.create({
        nome,
        email,
        senha,
      });

      const usuario = await Usuarios.findByPk(resultado.get('id'));

      res.status(201).json(usuario);

      // TODO: implementar aqui
    } catch (error) {
      console.warn(error);
      if (erroEmailDuplicado(error)) {
        res.status(402).send('E-mail já cadastrado!');
        return;
      }
      res.status(500).send();
    }
  },
);

/**
 * Login de usuários
 */
router.post('/login',
  validadorLogin,
  async (req, res) => {
    if (checarResultadoValidacao(req, res)) {
      return;
    }

    try {
      const { email, senha } = req.body;

      const usuario = await Usuarios.unscoped().findOne({
        // fazendo o loign
        where: {
          email,
        },
      });
      if (!usuario) {
        res.status(401).send('Credenciais Inválidas');
        return;
      }

      if (!compararSenha(senha, usuario.get('senha'))) {
        res.status(401).send('Credenciais Inválidas');
        return;
      }

      const usuarioJson = usuario.toJSON();
      delete usuarioJson.senha;

      const token = gerarTokenUsuario(usuarioJson);
      res.status(200).json({
        token,
        usuario: usuarioJson,
      });

      // TODO: implementar aqui
    } catch (error) {
      console.warn(error);
      res.status(500).send();
    }
  },
);

module.exports = router;
