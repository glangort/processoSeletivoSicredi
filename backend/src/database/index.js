const Sequelize = require('sequelize');
const dbConfig = require('../configuration/database');

const Client = require('../models/Client');

const connection = new Sequelize(dbConfig);

Client.init(connection);

module.exports = connection;
