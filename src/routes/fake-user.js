const express = require('express');
const router = express.Router();
const fakeUserController = require('../controllers/fake-userController');

//Rota para gerar um usuário fake
router.get('/fakeUser', fakeUserController.fakeUser);

//Rota para selecionar um usuário fake
router.get('/fakeUser/:id', fakeUserController.selectFakeUser);

//Rota para retornar todos os usuários fakes
router.get('/allFakeUsers', fakeUserController.allFakeUsers);

module.exports = router;