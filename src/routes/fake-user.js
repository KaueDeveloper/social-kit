//Rotas de geração de usuários fakes

const express = require('express');
const router = express.Router();
const fakeUserControllers = require('../controllers/fake-userControllers');

//Rota para gerar um usuário fake aleatório
router.get('/fakeUser', fakeUserControllers.fakeUser);

//Rota para gerar um usuário fake aleatório por gênero
router.get('/fakeUser/gender/:gender', fakeUserControllers.fakeUserForGender);

//Rota de erro ao não informar nenhum gênero
router.get('/fakeUser/gender', fakeUserControllers.userForGenderError);

//Rota para selecionar um usuário fake
router.get('/fakeUser/id/:id', fakeUserControllers.selectFakeUser);

//Rota de erro ao não informar nenhum id de usuário fake
router.get('/fakeUser/id', fakeUserControllers.selectFakeUserError);

//Rota para retornar todos os usuários fakes
router.get('/fakeUser/all', fakeUserControllers.allFakeUsers);

//Rota para retornar todos os usuários por gênero
router.get('/fakeUser/all/:gender', fakeUserControllers.allFakeUsersForGender);

module.exports = router;