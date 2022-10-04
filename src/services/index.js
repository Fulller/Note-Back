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
        avatar:
          "https://cdn.uconnectlabs.com/wp-content/uploads/sites/46/2019/04/GitHub-Mark.png",
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
        images: body.images,
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
        data.images = body.images;
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
let restoreNote = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {
      errCode: 7,
      message: "Cant't restore note!",
    };
    try {
      let data = await Note.findById(body.id);
      if (data) {
        data.isDelete = false;
        await data.save();
        result.errCode = 0;
        result.message = "Restore note succeeds";
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
let foreverdeleteNote = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {
      errCode: 8,
      message: "Cant't forever delete note!",
    };
    try {
      let data = await Note.findById(body.id);
      if (data) {
        await data.remove();
        result.errCode = 0;
        result.message = "Forever delete note succeeds";
        resole(result);
      } else {
        resole(result);
      }
    } catch (e) {
      reject(result);
    }
  });
};
let updateUser = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {
      errCode: 9,
      message: "Cant't update user!",
    };
    try {
      let data = await User.findById(body.id);
      if (data) {
        data.avatar = body.avatar;
        data.firstName = body.firstName;
        data.lastName = body.lastName;
        data.password = body.password;
        await data.save();
        result.errCode = 0;
        result.message = "Update user succeeds";
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
let deleteAccount = (body) => {
  return new Promise(async (resole, reject) => {
    let result = {
      errCode: 10,
      message: "Cant't delete account note!",
    };
    try {
      let data = await User.findById(body.id);
      if (data) {
        await data.remove();
        result.errCode = 0;
        result.message = "Delete account succeeds";
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
  restoreNote,
  foreverdeleteNote,
  updateUser,
  deleteAccount,
};
