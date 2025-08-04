//Controladores das rotas de usuários fakes
const users = require('../data/fakeUsers');

//Função para gerar um usário fake aleatório
function fakeUser(req, res) {
    let n = Math.floor(Math.random() * users.length);

    try {
        return res.status(200).json(users[n]);
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

//Função para gerar um usuário fake aleatório feminino ou masculino
function fakeUserForGender(req, res) {
    const gender = req.params.gender;
    const fakeUsers = [];

    try {
        for(let i = 0; i < users.length; i++) {
            if(gender === 'f') {
                if(users[i].gender === "Feminino") {
                    fakeUsers.push(users[i]);
                }
            }else if(gender === 'm') {
                if(users[i].gender === "Masculino") {
                    fakeUsers.push(users[i]);
                }
            }else {
                return res.status(400).json({error: `${gender} não é um gênero válido, apenas as letras m e f são permitidos`})
            }
        }

        const c = Math.floor(Math.random() * fakeUsers.length)
        return res.status(200).json(fakeUsers[c]);
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

//Função de erro ao não informar nenhum gênero
function userForGenderError(req, res) {
    return res.status(400).json({error: "Você deve fornecer um gênero. Ex: fakeUser/gender/m ou fakeUser/gender/f"});
}

//Função para gerar um usuário fake selecionado
function selectFakeUser(req, res) {
    const id = req.params.id

    if(id > users.length) {
        res.status(400).json({error: `Usuário fake inválido, o valor máximo permitido é ${users.length}`});
    }else if(id <= 0) {
        res.status(400).json({error: 'Usuário fake inválido, o valor mínimo permitido é 1'});
    }

    try {
        return res.status(200).json(users[id - 1]);
    }
    catch (err) {
        return res.status(400).json({error: err})
    }
}

//Função de erro ao não informar nenhum id de usuário fake
function selectFakeUserError(req, res) {
    return res.status(400).json({error: "Você deve fornecer um id de um usuário fake. Ex: fakeUser/id/1"});
}

//Função para retornar todos os usuários fakes
function allFakeUsers(req, res) {
    try {
        return res.status(200).json(users);
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

module.exports = {
    fakeUser,
    selectFakeUser,
    allFakeUsers,
    fakeUserForGender,
    userForGenderError,
    selectFakeUserError
}