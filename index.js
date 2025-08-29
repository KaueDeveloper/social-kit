const express = require('express');
const API = express();
const PORT = process.env.PORT || 3000;

//Rotas
const fakeUserRoutes = require('./src/routes/fake-user');
const emailRoutes = require('./src/routes/email');
const nameRoutes = require('./src/routes/name');
const avatarRoutes = require('./src/routes/avatar');
const postRoutes = require('./src/routes/post');
const bannerRoutes = require('./src/routes/banner');
const bioRoutes = require('./src/routes/bio');
const mediaRoutes = require('./src/routes/media');

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

//Rotas de banners
API.use('/', bannerRoutes);

//Rotas de bios
API.use('/', bioRoutes);

//Rotas de mídias
API.use('/', mediaRoutes);

//Rota de ping para manter a API ativa
API.use('/ping', (req, res) => res.send('OK'));

API.listen(PORT, () => {
    console.log('Servidor rodando');
})