//Rotas de validação e criação de emails falsos
const express = require('express');
const router = express.Router();
const emailControllers = require('../controllers/emailControllers');

//Rota para validar email
router.get('/isEmail', emailControllers.isEmail);

//Rota para validar email por domínio
router.get('/isEmail/:domain', emailControllers.isEmailForDomain);

//Rota para gerar um email aleatório
router.get('/email', emailControllers.email);

//Rota para gerar um email aleatório por domínio
router.get('/email/:domain', emailControllers.emailForDomain);

module.exports = router;