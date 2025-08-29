//Controladores para as rotas de geração de mídias
const medias = require('../data/medias');
const path = require('path');

//Função de erro para parâmetros incompletos
function randomMediaError(req, res) {
    return res.status(400).json({error: 'Especifique a mídia que será gerada aleatoriamente. Ex: /media/random/image ou /media/random/video'});
}

//Função de erro ao não informar nenhum imagem
function imageMediaError(req, res) {
    return res.status(400).json({error: 'Informe uma imagem. Ex: /media/image/image01.png'});
}

//Função para gerar uma mídia de imagem
function imageMedia(req, res) {
    try {
        const image = req.params.image;

        return res.status(200).sendFile(path.join(__dirname, '..', 'assets', 'media', 'images', image));
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

//Função para gerar uma mídia de imagem aleatória
function randomImageMedia(req, res) {
    try {
        const u = Math.floor(Math.random() * medias[1].length);

        return res.status(200).sendFile(path.join(__dirname, '..', 'assets', 'media', 'images', medias[1][u].image));
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

//Função para gerar uma mídia de imagem aleatória por categoria
function randomImageMediaForCategory(req, res) {
    try {
        const category = req.params.category;
        const images = [];

        for(let i = 0; i < medias[1].length; i++) {
            if(medias[1][i].categorys.includes(category)) {
                images.push(medias[1][i].image);
            }
        }

        if(images.length === 0) {
            return res.status(400).json({error: 'Informe uma categoria válida. Ex: /media/random/image/peoples'});
        }

        const u = Math.floor(Math.random() * images.length);
        return res.status(200).sendFile(path.join(__dirname, '..', 'assets', 'media', 'images', images[u]));
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

//Função para gerar uma mídia aleatória de video
function randomVideoMedia(req, res) {
    try {
        const u = Math.floor(Math.random() * medias[0].length);

        return res.status(200).sendFile(path.join(__dirname, '..', 'assets', 'media', 'videos', medias[0][u].video));
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

//Função para gerar uma mídia de video aleatória por categoria
function randomVideoMediaForCategory(req, res) {
    try {
        const category = req.params.category;
        const videos = [];

        for(let i = 0; i < medias[0].length; i++) {
            if(medias[0][i].categorys.includes(category)) {
                videos.push(medias[0][i].video);
            }
        }

        if(videos.length === 0) {
            return res.status(400).json({error: 'Informe uma categoria válida. Ex: /media/random/video/animals'});
        }

        const u = Math.floor(Math.random() * videos.length);
        return res.status(200).sendFile(path.join(__dirname, '..', 'assets', 'media', 'videos', videos[u]));
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

//Função de erro ao não informar nenhum vídeo
function videoMediaError(req, res) {
    return res.status(400).json({error: 'Informe um vídeo. Ex: /media/video/video01.mp4'});
}

//Função para gerar uma mídia de vídeo
function videoMedia(req, res) {
    const video = req.params.video;

    try {
        return res.status(200).sendFile(path.join(__dirname, '..', 'assets', 'media', 'videos', video));
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

module.exports = {
    imageMediaError,
    imageMedia,
    randomMediaError,
    randomImageMedia,
    randomImageMediaForCategory,
    randomVideoMediaForCategory,
    randomVideoMedia,
    videoMediaError,
    videoMedia
}