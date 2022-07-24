const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const Produto = require('../modules/produto/models/Produto');

const connection = new Sequelize(dbConfig);

Produto.init(connection);

module.exports = connection;