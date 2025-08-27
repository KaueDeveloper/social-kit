//Rotas de geração de bios
const express = require('express');
const router = express.Router();
const bioControllers = require('../controllers/bioControllers');

//Rota de erro para parâmetros incompletos
router.get('/bio', bioControllers.bioError);

//Rota para gerar uma bio aleatória
router.get('/bio/random', bioControllers.randomBio);

module.exports = router;