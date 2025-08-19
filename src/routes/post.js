//Rotas de gereação de postagens
const express = require('express');
const router = express.Router();
const postControllers = require('../controllers/postControllers');

//Rota de erro para parâmetros incompletos
router.get('/post', postControllers.postError);

//Rota para gerar uma postagem aleatória
router.get('/post/random', postControllers.randomPost);

//Rota para gerar postagens aleatórias de algum usuário
router.get('/post/random/:user', postControllers.randomPostForUser);

//Rota para gerar todas as postagens
router.get('/post/all', postControllers.allPosts);

//Rota para gerar todas as postagens de algum usuário
router.get('/post/all/:user', postControllers.allPostsForUser);

module.exports = router;