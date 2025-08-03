//Função para gerar um usuário fake
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

//Função para gerar um usuário fake selecionado
function selectFakeUser(req, res) {
    const id = req.params.id

    if(id > users.length) {
        res.status(400).json({error: `A API posui apenas ${users.length} usuários fakes`});
    }

    try {
        return res.status(200).json(users[id - 1]);
    }
    catch (err) {
        return res.status(400).json({error: err})
    }
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
    allFakeUsers
}