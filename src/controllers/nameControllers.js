//Controladores das rotas de nomes fakes
const names = require('../data/names');

//Função de erro para parâmetros incompletos
function nameError(req, res) {
    return res.status(400).json({error: 'Rota incompleta'});
}

//Função para gerar um nome fake aleatório
function fakeName(req, res) {
    let n = Math.floor(Math.random() * names.length)

    try {
        return res.status(200).json(names[n].name);
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

//Função para gerar um nome fake aleatório por gênero
function fakeNameForGender(req, res) {
    const gender = req.params.gender;
    const namesList = [];

    try {
        for(let i = 0; i < names.length; i++) {
            if(gender === 'm') {
                if(names[i].gender === 'Masculino') {
                    namesList.push(names[i].name)
                }
            }else if(gender === 'f') {
                if(names[i].gender === 'Feminino') {
                    namesList.push(names[i].name);
                }
            }else {
                return res.status(400).json({error: `${gender} não é um gênero válido, apenas as letras m e f são permitidos`})
            }
        }

        const u = Math.floor(Math.random() * namesList.length);
        return res.status(200).json(namesList[u]);
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

//Função de erro ao não informar nenhum gênero
function fakeNameForGenderError(req, res) {
    return res.status(400).json({error: 'Você deve fornecer um gênero. Ex: /name/random/gender/m ou /name/random/gender/f'});
}

//Função para retornar todos os nomes fakes
function allFakeNames(req, res) {
    const namesList = [];

    try {
        for(let i = 0; i < names.length; i++) {
            namesList.push(names[i].name);
        }

        return res.status(200).json(namesList);
    }
    catch (err) {
        return res.status(400).json({error: err})
    }
}

//Função para retornar todos os nomes fakes por gênero
function allFakeNamesForGender(req, res) {
    const gender = req.params.gender;
    const namesList = [];

    try {
        for(let i = 0; i < names.length; i++) {
            if(gender === 'm') {
                if(names[i].gender === 'Masculino') {
                    namesList.push(names[i].name);
                }
            }else if(gender === 'f') {
                if(names[i].gender === 'Feminino') {
                    namesList.push(names[i].name);
                }
            }else {
                return res.status(400).json({error: `${gender} não é um gênero válido, apenas as letras m e f são permitidos`})
            }
        }

        const u = Math.floor(Math.random() * namesList.length);
        return res.status(200).json(namesList);
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

module.exports = {
    nameError,
    fakeName,
    fakeNameForGender,
    fakeNameForGenderError,
    allFakeNames,
    allFakeNamesForGender
}