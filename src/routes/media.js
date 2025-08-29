//Rotas de geração de mídias
const express  = require('express');
const router = express.Router();
const mediaControllers = require('../controllers/mediaControllers');

//Rotas de erro para parâmetros incompletos
router.get('/media/random', mediaControllers.randomMediaError);
router.get('/media', mediaControllers.randomMediaError);

//Rota de erro ao não informar nenhuma imagem
router.get('/media/image', mediaControllers.imageMediaError);

//Rota para gerar uma mídia de imagem
router.get('/media/image/:image', mediaControllers.imageMedia);

///Rota para gerar uma mídia de imagem aleatória
router.get('/media/random/image', mediaControllers.randomImageMedia);

//Rota para gerar uma mídia de imagem aleatória por categoria
router.get('/media/random/image/:category', mediaControllers.randomImageMediaForCategory);

//Rota de erro ao não informar nenhum vídeo
router.get('/media/video', mediaControllers.videoMediaError);

//Rota para gerar uma mídia de vídeo
router.get('/media/video/:video', mediaControllers.videoMedia);

//Rota para gerar uma mídia de video aleatória
router.get('/media/random/video', mediaControllers.randomVideoMedia);

//Rota para gerar uma mídia de video aleatória por categoria
router.get('/media/random/video/:category', mediaControllers.randomVideoMediaForCategory);


module.exports  = router;