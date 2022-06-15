

module.exports = (sequelize, Sequelize) => {
    //Etablissement du modèle de l'utilisateur
    const User = sequelize.define('user', {
        id : { type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true},
        username : { type : Sequelize.STRING, allowNull : false, unique : true},
        email : { type : Sequelize.STRING, allowNull : false, unique : true},
        password : { type : Sequelize.STRING, allowNull : false},
        admin : { type : Sequelize.INTEGER, default : 0},
    },
        {tableName : 'user'}
    );
    return User
}