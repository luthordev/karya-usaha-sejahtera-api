const { model, Schema } = require("mongoose");

const Employee = model(
  "Employee",
  new Schema({
    code: { type: String, required: true },
    name: { type: String, required: true },
    level: { type: String, required: true },
    address: { type: String, required: true },
  })
);

module.exports = Employee;
