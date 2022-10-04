const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Notes = new Schema({
  value: { type: String },
  userName: { type: String },
  title: { type: String },
  isDelete: { type: Boolean, default: false },
  images: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("notes", Notes);
