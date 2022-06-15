//Ajout de la constante pour utiliser JSONWebToken
const jwt = require('jsonwebtoken');
const user = require('../models/user');
//On protège l'inscription du TOKEN
const TOKEN = process.env.TOKEN;

//Fonction pour le middleware qui sera appliqué aux routes pour les sécuriser
module.exports = (req,res,next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, TOKEN);
        const userId = decodedToken.userId;
        const userAdmin = decodedToken.admin;
        if (req.body.userId && req.body.userId != userId && !userAdmin) {
            throw 'ID non valide';
        } else {
            req.auth = { userId, userAdmin };  
            next();
        }
    }
    catch {
        res.status(401).json({ error : new Error('Requête invalide')})
    };
};
