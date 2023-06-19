const express = require('express');
const jwt = require('jsonwebtoken');


const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const payload = {
    nome: 'Lucas medeiros',
    email: 'lucasmedeiroscosta07@gmail.com',
    tipo: 'ADMINISTRADOR',
  };

  const token = jwt.sign(payload, 'minha-chave');


  res.send(token);
})

module.exports = router;
