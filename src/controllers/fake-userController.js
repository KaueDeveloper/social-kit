//Função para gerar um usuário fake
const users = require('../data/fakeUsers');

//Função para gerar um usário fake aleatório
function fakeUser(req, res) {
    let n = Math.floor(Math.random() * users.length);

    try {
        return res.status(200).json(users[n]);
    }
    catch (err) {
        return res.status(400).json({"error": err});
    }
}

module.exports = {
    fakeUser
}