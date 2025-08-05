const express = require('express');
const API = express();
const path = require('path');

//Rotas
const fakeUserRoutes = require('./src/routes/fake-user');
const emailRoutes = require('./src/routes/email');

//Rotas de usuários fakes
API.use('/', fakeUserRoutes);

//Rotas de validação de email
API.use('/', emailRoutes);

API.listen(8080, () => {
    console.log('Servidor rodando');
})