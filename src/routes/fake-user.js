//Rotas de geração de usuários fakes

const express = require('express');
const router = express.Router();
const fakeUserController = require('../controllers/fake-userController');

//Rota para gerar um usuário fake aleatório
router.get('/fakeUser', fakeUserController.fakeUser);

//Rota para gerar um usuário fake aleatório por gênero
router.get('/fakeUser/gender/:gender', fakeUserController.fakeUserForGender);

//Rota de erro ao não informar nenhum gênero
router.get('/fakeUser/gender', fakeUserController.userForGenderError);

//Rota para selecionar um usuário fake
router.get('/fakeUser/id/:id', fakeUserController.selectFakeUser);

//Rota de erro ao não informar nenhum id de usuário fake
router.get('/fakeUser/id', fakeUserController.selectFakeUserError);

//Rota para retornar todos os usuários fakes
router.get('/fakeUser/all', fakeUserController.allFakeUsers);

//Rota para retornar todos os usuários por gênero
router.get('/fakeUser/all/:gender', fakeUserController.allFakeUsersForGender);

module.exports = router;