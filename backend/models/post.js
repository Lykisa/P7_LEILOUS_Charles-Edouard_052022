

module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('post', {
        id : { type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true},
        text : { type : Sequelize.STRING, allowNull : false }
    },
        {tableName : 'post'}
    );
    return Post
};