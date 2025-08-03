const express = require('express');
const router = express.Router();
const fakeUserController = require('../controllers/fake-userController');

//Rota para gerar um usuário fake
router.get('/fakeUser', fakeUserController.fakeUser);

module.exports = router;