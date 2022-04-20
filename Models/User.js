const { model, Schema } = require("mongoose");

const User = model(
  "User",
  new Schema({
    name: { type: String, required: true },
    phonenumber: { type: String, required: true },
    level: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
  })
);

module.exports = User;
