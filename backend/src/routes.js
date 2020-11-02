const express = require('express');

const ClientController = require('./controllers/ClientController');

const routes = express.Router();

routes.post('/client', ClientController.store);
routes.get('/client', ClientController.index);
routes.get('/client/:account', ClientController.search);

module.exports = routes;
