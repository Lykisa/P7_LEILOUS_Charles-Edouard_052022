//On utilise bcrypt pour hacher le mot de passe de l'utilisateur
const bcrypt = require('bcrypt');
//On récupère le modèle user
const User = require('../models/user');
//On utilise JsonWebToken pour attribuer un token à l'utilisateur lors de sa connexxion
const jwt = require('jsonwebtoken');
//On protège l'inscription du TOKEN
const TOKEN = process.env.TOKEN;
//On va chercher les modèles du fichiers index.js
const db = require('../models');

//Fonction pour créer un utilisateur, lorsque celui ci s'inscrit
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = {
            username : req.body.username,
            email : req.body.email,
            password : hash,
            admin : 0
        }
        db.User.create(user)
        .then(() => res.status(201).json({ message : 'Utilisateur crée'}))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(401).json({ error }));
};


//Fonction pour la connexion d'un utilisateur
exports.login = (req, res, next) => {
    db.User.findOne({ where : {email : req.body.email}})
    .then(user => {
        if(!user) {
            return res.status(401).json({ message : 'Utilisateur non trouvé'})
        }
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (!valid) {
                return res.status(401).json({ message : 'Mot de passe incorrect'})
            }
            res.status(200).json({
                userId: user.id,
                username: user.username,
                email: user.email,
                admin: user.admin,
                token : jwt.sign(
                    { userId : user.id, admin : user.admin},
                    TOKEN, 
                    { expiresIn: '24h'}
                )
            })
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

//Fonction pour supprimer un utilisateur
exports.deleteOneUser = (req, res, next) => {
    db.User.findOne({where : {id : req.auth.userId}})
    .then(user => {
        if(!user) {
            return res.status(401).json({ message : 'Utilisateur non trouvé'})
        } else {
            db.User.destroy({ where : {id : req.auth.userId}})
            .then(() => {res.status(200).json({ message : 'Utilisateur supprimé'})})
            .catch((error) => {res.status(400).json({error : error})})
        }
    })
    .catch((error) => {res.status(400).json({error: error})});
};