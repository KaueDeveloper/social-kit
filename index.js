const express = require('express');
const API = express();
const path = require('path');

//Rotas
const fakeUserRoutes = require('./src/routes/fake-user');
const emailRoutes = require('./src/routes/email');
const nameRoutes = require('./src/routes/name');
const avatarRoutes = require('./src/routes/avatar');
const postRoutes = require('./src/routes/post');

//Rotas de usuários fakes
API.use('/', fakeUserRoutes);

//Rotas de validação e geração de emails
API.use('/', emailRoutes);

//Rotas de nomes fakes
API.use('/', nameRoutes);

//Rotas de avatares
API.use('/', avatarRoutes);

//Rotas de postagens
API.use('/', postRoutes);

API.listen(8080, () => {
    console.log('Servidor rodando');
})