//Controladores para as rotas de postagens
const posts = require('../data/posts');

//Função de erro para parâmetros incompletos
function postError(req, res) {
    return res.status(400).json({error: 'Rota incompleta'});
}

//Função para gerar uma postagem aleatória
function randomPost(req, res) {
    const limit = req.query.limit;
    const postsList = [];

    function random() {
        return Math.floor(Math.random() * posts.length);
    }

    try {
        if(limit > posts.length) {
            return res.status(400).json({error: `A quantidade máxima de postagens é ${posts.length}`});
        }else if(limit <= 0) {
            return res.status(400).json({error: `${limit} não é um valor válido, a quantidade mínima é 1`});
        }

        if(!limit) {
            return res.status(200).json(posts[random()]);
        }else {
            for(let i = 0; i < limit; i++) {
                postsList.push(posts[random()]);
            }
            return res.status(200).json(postsList);
        }
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

//Função para gerar postagens aleatórias de algum usuário
function randomPostForUser(req, res) {
    const user = req.params.user;
    const postsList = [];

    try {
        for(let i = 0; i < posts.length; i++) {
            if(posts[i].author.username === user || posts[i].author.username === `@${user}`) {
                postsList.push(posts[i]);
            }
        }

        if(postsList.length === 0) {
            return res.status(400).json({error: `${user} não é um nome de usuário válido`});
        }

        const u = Math.floor(Math.random() * postsList.length);
        return res.status(200).json(postsList[u]);
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

//Função para gerar todas as postagens
function allPosts(req, res) {
    const limit = req.query.limit;
    const postsList = [];

    try {
        if(limit > posts.length) {
            return res.status(400).json({error: `A quantidade máxima de postagens é ${posts.length}`});
        }else if(limit <= 0) {
            return res.status(400).json({error: `${limit} não é um valor válido, a quantidade mínima é 1`});
        }

        if(!limit) {
            return res.status(200).json(posts);
        }else {
            for(let i = 0; i < limit; i++) {
                postsList.push(posts[i]);
            }
            return res.status(200).json(postsList);
        }
    }
    catch (err) {
        return res.status(400).json({error: err})
    }
}

//Função para gerar todas as postagens de algum usuário
function allPostsForUser(req, res) {
    const user = req.params.user;
    const postsList = [];

    try {
        for(let i = 0; i < posts.length; i++) {
            if(posts[i].author.username === user || posts[i].author.username === `@${user}`) {
                postsList.push(posts[i]);
            }
        }

        if(postsList.length === 0) {
            return res.status(400).json({error: `${user} não é um nome de usuário válido`});
        }

        return res.status(200).json(postsList);
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

module.exports = {
    postError,
    randomPost,
    randomPostForUser,
    allPosts,
    allPostsForUser
}