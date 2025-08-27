//Controladores das rotas de geração de avatares
const avatars = require('../data/avatars');
const path = require('path');

//Função de erro para parâmetro incompletos
function avatarError(req, res) {
    return res.status(400).json({error: 'Rota incompleta'});
}

//Função para gerar um avatar aleatório
function randomAvatar(req, res) {
    const u = Math.floor(Math.random() * avatars.length);

    try {
        return res.status(200).sendFile(path.join(__dirname, '..', 'assets', 'images', avatars[u].photo));
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

//Função para gerar um avatar aleatório por gênero
function avatarForGender(req, res) {
    const gender = req.params.gender;
    const avatarsList = [];

    try {
        for(let i = 0; i < avatars.length; i++) {
            if(gender === 'm') {
                if(avatars[i].gender === 'Masculino') {
                    avatarsList.push(avatars[i].photo);
                }
            }else if(gender === 'f') {
                if(avatars[i].gender === 'Feminino') {
                    avatarsList.push(avatars[i].photo);
                }
            }else {
                return res.status(400).json({error: `${gender} não é um gênero válido, apenas as letras m e f são permitidos`})
            }
        }

        const u = Math.floor(Math.random() * avatarsList.length);
        return res.status(200).sendFile(path.join(__dirname, '..', 'assets', 'images', avatarsList[u]));
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

//Função de erro ao não informar nenhum gênero
function avatarForGenderError(req, res) {
    return res.status(400).json({error: 'Você deve fornecer um gênero. Ex: /avatar/random/gender/m ou /avatar/random/gender/f'})
}

//Função para selecionar um avatar pelo id
function selectAvatar(req, res) {
    const id = req.params.id;

    try {
        if(id > avatars.length) {
            return res.status(400).json({error: `Id inválido, o valor máximo permitido é ${avatars.length}`});
        }else if(id <= 0) {
            return res.status(400).json({error: 'Id inválido, o valor mínimo permitido é 1'});
        }

        return res.status(200).sendFile(path.join(__dirname, '..', 'assets', 'images', avatars[id - 1].photo));
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

//Função de erro ao não informar nenhum id
function selectAvatarError(req, res) {
    return res.status(400).json({error: 'Você deve fornecer um id. Ex: /avatar/id/1'});
}

module.exports= {
    avatarError,
    randomAvatar,
    avatarForGender,
    avatarForGenderError,
    selectAvatar,
    selectAvatarError
}