//Rotas de geração de avatares
const express = require('express');
const router = express.Router();
const avatarControllers = require('../controllers/avatarControllers');

//Rota para gerar um avatar aleatório
router.get('/avatar', avatarControllers.randomAvatar);

//Rota para gerar um avatar aleatório por gênero
router.get('/avatar/gender/:gender', avatarControllers.avatarForGender);

//Rota de erro ao não informar nenhum gênero
router.get('/avatar/gender', avatarControllers.avatarForGenderError);

//Rota para selecionar um avatar pelo id
router.get('/avatar/id/:id', avatarControllers.selectAvatar);

//Rota de erro ao não informar nenhum id
router.get('/avatar/id', avatarControllers.selectAvatarError);

module.exports = router;