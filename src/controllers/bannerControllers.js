//Controladores para as rotas de geração de banners
const banners = require('../data/banners');
const path = require('path');

//Função de erro para parâmetros incompletos
function bannerError(req, res) {
    return res.status(400).json({error: 'Rota incompleta'});
}

//Função para gerar um banner aleatório
function randomBanner(req, res) {
    const u = Math.floor(Math.random() * banners.length);

    try {
        return res.status(200).sendFile(path.join(__dirname, '..', 'assets', 'banners', banners[u]));
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

//Função para gerar um banner pelo id
function selectBanner(req, res) {
    const id = req.params.id;

    try {
        if(id > banners.length) {
            return res.status(400).json({error: `Id inválido, o valor máximo permitido é ${banners.length}`});
        }else if(id <= 0) {
            return res.status(400).json({error: 'Id inválido, o valor mínimo permitido é 1'});
        }

        return res.status(200).sendFile(path.join(__dirname, '..', 'assets', 'banners', banners[id - 1]));
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

//Função de erro ao não informar nenhum id
function selectBannerError(req, res) {
    return res.status(400).json({error: 'Você deve fornecer um id. Ex: /banner/id/1'});
}

module.exports = {
    bannerError,
    randomBanner,
    selectBanner,
    selectBannerError
}