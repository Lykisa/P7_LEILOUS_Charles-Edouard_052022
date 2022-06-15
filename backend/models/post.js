/* //Ajout de la constante pour utiliser Sequelize
const { Sequelize } = require('sequelize');


//Etablissement du modèle de post
const Post = sequelize.define('post', {
    id : { type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true},
    imageUrl : { type : Sequelize.STRING },
    text : { type : Sequelize.STRING }
},
    {tableName : 'post'}
);

exports.Post = Post;

module.exports = sequelize.model('post', Post); */

module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('post', {
        id : { type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true},
        text : { type : Sequelize.STRING, allowNull : false }
    },
        {tableName : 'post'}
    );
    return Post
};