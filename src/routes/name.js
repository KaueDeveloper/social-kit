//Rotas de geração de nomes fakes

const express = require('express');
const router = express.Router();
const nameControllers = require('../controllers/namesController');

//Rota para gerar um nome aleatório fake
router.get('/name', nameControllers.fakeName);

//Rota para gerar um nome fake aleatório por gênero
router.get('/name/gender/:gender', nameControllers.fakeNameForGender);

//Rota de erro ao não informar nenhum gênero
router.get('/name/gender', nameControllers.fakeNameForGenderError);

//Rota para retornar todos os nomes fakes
router.get('/name/all', nameControllers.allFakeNames);

//Rota para retornar todos os nomes fakes por gênero
router.get('/name/all/:gender', nameControllers.allFakeNamesForGender);

module.exports = router;