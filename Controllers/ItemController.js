const Item = require("../Models/Item");

const Get = (req, res) => {
  const data = req.query;

  if (data.id != null)
    Item.findById(data.id) // find by id
      .then((response) => {
        res.send({ status: "success", result: response });
      })
      .catch((err) => {
        res.send({ status: "failed", message: err });
      });
  else if (Object.keys(data).length > 0)
    Item.findOne(data) // find by parameter
      .then((response) => {
        res.send({ status: "success", result: response });
      })
      .catch((err) => {
        res.send({ status: "failed", message: err });
      });
  else
    Item.find({}) // get all
      .then((response) => {
        res.send({ status: "success", result: response });
      })
      .catch((err) => {
        res.send({ status: "failed", message: err });
      });
};

const Add = (req, res) => {
  const data = req.body;
  Item.create(data)
    .then((response) => {
      return res.send({
        status: "success",
        message: "Data has been added.",
        data: response,
      });
    })
    .catch((err) => {
      return res.send({ status: "failed", message: err });
    });
};

const Update = (req, res) => {
  const data = req.body;
  Item.findByIdAndUpdate(data.id, data)
    .then((response) => {
      return res.send({
        status: "success",
        message: "Data has been updated.",
        data: response,
      });
    })
    .catch((err) => {
      return res.send({ status: "failed", message: err });
    });
};

const Delete = (req, res) => {
  const data = req.body;
  Item.findByIdAndDelete(data.id)
    .then((response) => {
      return res.send({
        status: "success",
        message: "Data has been deleted.",
        data: response,
      });
    })
    .catch((err) => {
      return res.send({ status: "failed", message: err });
    });
};

module.exports = { Get, Add, Update, Delete };
