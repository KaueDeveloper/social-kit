//Rotas de geração de banners
const express = require('express');
const router = express.Router();
const bannerControllers = require('../controllers/bannerControllers');

//Rota de erro para parâmetros incompletos
router.get('/banner', bannerControllers.bannerError);

//Rota para gerar um banner aleatório
router.get('/banner/random', bannerControllers.randomBanner);

//Rota para gerar um banner pelo id
router.get('/banner/id/:id', bannerControllers.selectBanner);

//Rota de erro ao não informar nenhum id
router.get('/banner/id', bannerControllers.selectBannerError);

module.exports = router;