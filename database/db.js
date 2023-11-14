const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('vacunatorio3', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;