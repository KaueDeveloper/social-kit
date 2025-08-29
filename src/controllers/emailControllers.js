//Controladores das rotas de email
const emails = require('../data/email');

//Função para validar email
function isEmail(req, res) {
    const email = req.query.email;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

    try {
        if(!email) {
            return res.status(400).json({error: 'Você deve fornecer um email. Ex: /isEmail?email=exemple@gmail.com'})
        }
    
        if(!regex.test(email)) {
            return res.status(200).send(false)
        }
    
        return res.status(200).send(true);
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

//Função para validar email por domínio
function isEmailForDomain(req, res) {
    const email = req.query.email;
    const domain = req.params.domain;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    const partes = email.split('@');

    try {
        if(!email) {
            return res.status(400).json({error: 'Você deve fornecer um email. Ex: /isEmail/gmail.com?email=exemple@gmail.com'});
        }
    
        if(!regex.test(email)) {
            return res.status(200).send(false);
        }
    
        if(partes[1].includes(domain)) {
            return res.status(200).send(true);
        }
    
        return res.status(200).send(false);
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

//Função de erro para rota incompleta
function emailError(req, res) {
    return res.status(400).json({error: 'Rota incompleta'});
}

//Função para gerar um email aleatório
function email(req, res) {
    const i = Math.floor(Math.random() * emails.length)

    try {
        return res.status(200).json(emails[i])
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

//Função para gerar um email aleatório por domínio
function emailForDomain(req, res) {
    const domain = req.params.domain;
    const mails = [];

    try {
        for(let i = 0; i < emails.length; i++) {
            let partes = emails[i].split('@');

            if(partes[1] === domain) {
                mails.push(emails[i]);
            }        
        }

        if(mails.length === 0) {
            return res.status(400).json({error: 'Você deve fornecer um domínio de email válido, são aceitos somente os domínios: gmail.com, yahoo.com, hotmail.com, outlook.com, live.com, icloud.com, gmx.com e protonmail.com. Ex: /email/random/gmail.com'});
        }

        const u = Math.floor(Math.random() * mails.length);
        return res.status(200).json(mails[u]);
    }
    catch (err) {
        return res.status(400).json({error: err});
    }
}

module.exports = {
    emailError,
    isEmail,
    isEmailForDomain,
    email,
    emailForDomain
}