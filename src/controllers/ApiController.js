const Notes = require("../modules/Note");
const Users = require("../modules/User");
const services = require("../services");

async function register(req, res) {
  let body = req.body;
  let data = await services.register(body);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      errCode: 1,
      massage: "Account creation failed",
    });
  }
}

async function login(req, res) {
  let body = req.body;
  let data = await services.login(body);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      errCode: 2,
      massage: "Login unsuccessful",
    });
  }
}

async function createNote(req, res) {
  let body = req.body;
  let data = await services.createNote(body);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      errCode: 3,
      massage: "Note creation failed",
    });
  }
}

async function getAllNotes(req, res) {
  let body = req.body;
  let data = await services.allnotes(body.userName);
  if (data) {
    return res.json(data);
  } else {
    return res.json({
      errCode: 4,
      message: "Can't get notes !",
    });
  }
}

module.exports = {
  login,
  register,
  createNote,
  getAllNotes,
};