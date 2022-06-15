require('dotenv').config();
//Etablissement des constantes qui font appel à des fonctions dans l'API
const express = require('express');
const { Sequelize } = require('sequelize');
const cors = require('cors');
const path = require('path');
const models = require('./models');

//Etablissement des constantes qui font appel à des routes
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');


//Création de l'application express
const app = express();
app.use(express.json());


models.sequelize
    .sync({force : false})
    .then(() => console.log('Mise à jour de la base effectuée'))
    .catch((error) => console.log('Mise à jour non effectuée'))



app.use(cors());

//Notre app va utiliser notre ressource Images de façon statique et va charger les fichiers qui sont dans le dossier images
app.use('/images', express.static(path.join(__dirname, 'images'))); 

//Notre app va utiliser les routes ci-dessous
app.use('/api/post', postRoutes);
app.use('/api/auth', userRoutes); 

module.exports = app;