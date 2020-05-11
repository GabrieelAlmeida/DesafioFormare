
const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const ConsultorController = require('./controllers/ConsultorController');


//Route
routes.get('/user', UserController.index);
routes.get('/user/:id', UserController.show);
routes.post('/user/register', UserController.store);
routes.post('/user/login', UserController.login);
routes.post('/consultor/register', ConsultorController.store);
routes.post('/consultor/login', ConsultorController.login);
routes.get('/consultor/users', ConsultorController.index);




module.exports = routes;