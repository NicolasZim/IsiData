const express = require('express');

const IndustriesController = require('./controllers/IndustriesController');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/industries', IndustriesController.index);
routes.post('/industries', IndustriesController.create);

module.exports = routes;
