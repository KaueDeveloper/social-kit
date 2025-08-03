const express = require('express');
const router = express.Router();
const fakeUserController = require('../controllers/fake-userController');

//Rota para gerar um usuário fake
router.get('/fakeUser', fakeUserController.fakeUser);

//Rota para selecionar um usuário fake
router.get('/fakeUser/:id', fakeUserController.selectFakeUser);

module.exports = router;