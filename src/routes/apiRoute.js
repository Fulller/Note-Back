const express = require('express');
const route = express.Router();
const apiController = require('../controllers/ApiController')

route.post('/register', apiController.register);
route.post('/login', apiController.login);
route.post('/createNote', apiController.createNote);
route.post('/allnotes', apiController.getAllNotes);


module.exports = route;
 