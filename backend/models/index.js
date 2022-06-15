require('dotenv').config();

const { Sequelize } = require('sequelize');

//Etablissement de la création et de la connexion à la base de données SQL
const sequelize = new Sequelize(process.env.DATABASENAME, process.env.DATABASEUSER, process.env.DATABASEPASS, {
    dialect: "mysql",
    host: process.env.LOCALHOST,
   });
   
   try {
      sequelize.authenticate();
      console.log('Connecté à la base de données MySQL!');
 
    } catch (error) {
      console.error('Impossible de se connecter, erreur suivante :', error);
    }

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Modèles utilisés pour les actions CRUD -> Create, Read, Update et Delete.
db.User = require("./user")(sequelize, Sequelize);
db.Post = require("./post")(sequelize, Sequelize);


//Liaison entre les tables.

/**Table User **/
db.User.hasMany(db.Post, {
  onDelete: "CASCADE",
});


/**Table Post **/
db.Post.belongsTo(db.User, {
  foreignKey: {
    allowNumm: false,
  },
  onDelete: "CASCADE",
});


module.exports = db;