const express = require("express");
const route = express.Router();
const apiController = require("../controllers/ApiController");
const upload = require("../index");

route.post("/register", apiController.register);
route.post("/login", apiController.login);
route.post("/createNote", apiController.createNote);
route.post("/allnotes", apiController.getAllNotes);
route.post("/updateNote", apiController.updateNote);
route.post("/deleteNote", apiController.deleteNote);

module.exports = route;
