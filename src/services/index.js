// let db = require('../config/db')
const User = require("../modules/User");
const Note = require("../modules/Note");
const multer = require("multer");

let register = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      await User.create({
        userName: body.userName,
        firstName: body.firstName,
        lastName: body.lastName,
        password: body.password,
      });
      result.errCode = 0;
      result.massage = "Create Account Success";
      resole(result);
    } catch (e) {
      result.errCode = 1;
      result.massage = "Account creation failed";
      reject(e);
    }
  });
};
let login = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      let data = await User.findOne({ userName: body.userName });
      if (data) {
        if (data.password == body.password) {
          result.errCode = 0;
          result.massage = "Login successful";
          result.user = data;
        } else {
          result.errCode = 2;
          result.massage = "Incorrect password";
        }
      } else {
        result.errCode = 2;
        result.massage = "User not found";
      }
      resole(result);
    } catch (e) {
      result.errCode = 2;
      result.massage = "Login unsuccessful";
      reject(result);
    }
  });
};
let createNote = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {};
    try {
      await Note.create({
        userName: body.userName,
        value: body.value,
        title: body.title,
      });
      result.errCode = 0;
      result.massage = "Create note Success";
      resole(result);
    } catch (e) {
      result.errCode = 3;
      result.massage = "Note creation failed";
      reject(e);
    }
  });
};
let allnotes = (userName) => {
  return new Promise(async (resole, reject) => {
    let result = {
      errCode: 4,
      message: "Cant't get notes !",
    };
    try {
      let data = await Note.find({ userName: userName });
      if (data) {
        result.errCode = 0;
        result.message = "Get notes succeeds";
        result.data = data;
        resole(result);
      } else {
        resole(result);
      }
    } catch (e) {
      reject(result);
    }
  });
};
let updateNote = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {
      errCode: 5,
      message: "Cant't update note!",
    };
    try {
      let data = await Note.findById(body.id);
      if (data) {
        data.title = body.title;
        data.value = body.value;
        await data.save();
        result.errCode = 0;
        result.message = "Update note succeeds";
        result.data = data;
        resole(result);
      } else {
        resole(result);
      }
    } catch (e) {
      reject(result);
    }
  });
};
let deleteNote = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {
      errCode: 6,
      message: "Cant't delete note!",
    };
    try {
      let data = await Note.findById(body.id);
      if (data) {
        data.isDelete = true;
        await data.save();
        result.errCode = 0;
        result.message = "Delete note succeeds";
        result.data = data;
        resole(result);
      } else {
        resole(result);
      }
    } catch (e) {
      reject(result);
    }
  });
};

module.exports = {
  allnotes,
  register,
  login,
  createNote,
  updateNote,
  deleteNote,
};
