const { checkSchema } = require('express-validator');

const validadorLogin = checkSchema(
  {
    email: {
      isEmail: {
        errorMessage: 'Informe um E-mail válido',
      },
      isLength: {
        min: 1,
        max: 200,
      },
      errorMessage: 'O E-mail deve conter no mínimo 1 e no máximo 200 caracteres',
    },
    senha: {
      notEmpty: {
        errorMessage: 'Senha é obrigatorio ',
      },
      isLength: {
        options: {
          min: 8,
          max: 16,
        },
      },
      errorMessage: 'A SENHA TEM QUER TER NO MINIMO OITO E NO MAXIMO 16 CARACTERES',
    },
  },
  ['body'],
);

const validadorCadastroUsuario = checkSchema(
  {
    // TODO: implementar validação
    nome: {
      notEmpty: {
        errorMessage: 'O nome não pode ser vazio',
      },
      isLength: {
        options: {
          min: 3,
          max: 200,
        },
        errorMessage: 'O Nome deve ter no mínimo 3 e no máximo 200 caracteres',
      },
    },
    email: {
      isEmail: {
        errorMessage: 'Informe um E-mail válido',
      },
      isLength: {
        min: 1,
        max: 200,
      },
      errorMessage: 'O E-mail deve conter no mínimo 1 e no máximo 200 caracteres',
    },
    senha: {
      notEmpty: {
        errorMessage: 'Senha é obrigatorio ',
      },
      isLength: {
        options: {
          min: 8,
          max: 16,
        },
      },
      errorMessage: 'A SENHA TEM QUER TER NO MINIMO OITO E NO MAXIMO 16 CARACTERES',
    },
  },
  ['body'],
);

module.exports = {
  validadorLogin,
  validadorCadastroUsuario,
};
