//Récupération du modèle de publication
const Post = require('../models/post');
//Récupération du module FileSystme qui nous permettra de gérer les fichiers téléchargés
const fs = require('fs');
//On va chercher les modèles du fichiers index.js
const db = require('../models');

//Fonction qui permettra de créer une publication
exports.createPost = (req, res, next) => {
    const postObject = req.body
    const post = {
        ...postObject,
        
    };
    db.Post.create(post)
    .then(() => res.status(201).json({message : 'Publication crée avec succès !'}))
    .catch((error) => res.status(400).json({error : error}))
};

//Fonction qui permettra de supprimer une publication
exports.deletePost = (req, res, next) => {
    db.Post.findOne({where : { id : req.params.id}})
    .then(post => {
        console.log(post)
        if (!req.auth.userAdmin){
            return res.status(401).json({error : 'Vous ne pouvez pas supprimer ce post'})
        }
        db.Post.destroy({ where : { id : req.params.id}})
        .then(() => {res.status(200).json({message: 'Publication supprimée avec succès'})})
        .catch((error) => {res.status(400).json({error : error})})
        
    })
    .catch((error) => {res.status(401).json({error : error})})
};

//Fonction qui permettra d'afficher une publication
exports.getOnePost = (req, res, next) => {
    db.Post.findOne({where : { id : req.params.id}, include : db.User})
    .then((post) => {
        console.log(post)
        if (post == null) {
            res.status(404).json({error : "Ce post n'existe pas"})
        }
        res.status(200).json(post)
    })
    .catch((error) => {res.status(404).json({error : error})})
};

//Fonction qui permettra d'afficher toutes les publications
exports.getAllPost = (req, res, next) => {
    db.Post.findAll({include : db.User})
    .then((posts) => {
        if (posts == null) {
            res.status(404).json({error : "Ces posts n'existent pas"})
        } 
        res.status(200).json(posts)
    })
    .catch((error) => {res.status(400).json({error : error})})
};