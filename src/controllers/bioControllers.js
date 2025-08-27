//Controladores das rotas de bios
const bios = require('../data/bios');

//Função de erro para parâmetros incompletos
function bioError(req, res) {
    return res.status(400).json({error: 'Você deve passar a rota completa. Ex: /bio/random'});
}

//Função para gerar uma bio aleatória
function randomBio(req, res) {
    try {
        const u = Math.floor(Math.random() * bios.length);

        return res.status(200).json(bios[u]);
    }
    catch (err) {
        res.status(400).json({error: err});
    }
}

module.exports = {
    bioError,
    randomBio
}