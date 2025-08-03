const express = require('express');
const API = express();
const path = require('path');

//Rotas
const fakeUserRoutes = require('./src/routes/fake-user');

//Rotas de usuários fakes
API.use('/', fakeUserRoutes);

API.listen(8080, () => {
    console.log('Servidor rodando');
})