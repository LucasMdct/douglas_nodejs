const { checkSchema } = require('express-validator');

const validadorCadastroTarefa = checkSchema(

  {
    titulo: {
      notEmpty: {
        errorMessage: 'O titulo é obrigatorio',
      },
      isLength: {
        options: {
          min: 1,
          max: 1000,
        },
        errorMessage: 'O Titulo deve ter no mínimo 1 e no máximo 1000 caracteres',
      },
      isString: {
        errorMessage: 'O Título deve ser uma STRING',
      },
    },
    concluida: {
      isBoolean: {
        errorMessage: 'Valor precisa ser boolean',
      },
      optional: true,
    },
  },
  ['body'],
);

const validadorAtualizacaoTarefa = checkSchema(
  {
    // TODO: implementar validação
    titulo: {
      optional: true,
      notEmpty: {
        errorMessage: 'O titulo é obrigatorio',
      },
      isLength: {
        options: {
          min: 1,
          max: 1000,
        },
        errorMessage: 'O Titulo deve ter no mínimo 1 e no máximo 1000 caracteres',
      },
      isString: {
        errorMessage: 'O Título deve ser uma STRING',
      },
    },
    concluida: {
      isBoolean: {
        errorMessage: 'Valor precisa ser boolean',
      },
      optional: true,
    },
  },
  ['body'],
);

module.exports = {
  validadorCadastroTarefa,
  validadorAtualizacaoTarefa,
};
