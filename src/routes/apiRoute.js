const express = require("express");
const route = express.Router();
const apiController = require("../controllers/ApiController");
const upload = require("../index");

route.post("/register", apiController.register);
route.post("/login", apiController.login);
route.post("/allnotes", apiController.getAllNotes);
route.post("/createNote", apiController.createNote);
route.post("/updateNote", apiController.updateNote);
route.post("/deleteNote", apiController.deleteNote);
route.post("/restoreNote", apiController.restoreNote);
route.post("/foreverdeleteNote", apiController.foreverdeleteNote);
route.post("/updateUser", apiController.updateUser);
route.post("/deleteAccount", apiController.deleteAccount);

module.exports = route;
