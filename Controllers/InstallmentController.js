const Installment = require("../Models/Installment");

const Get = (req, res) => {
  const data = req.query;

  if (data.id != null)
    Installment.findById(data.id) // find by id
      .then((response) => {
        res.send({ status: "success", result: response });
      })
      .catch((err) => {
        res.send({ status: "failed", message: err });
      });
  else if (Object.keys(data).length > 0)
    Installment.aggregate([
      // find by parameter
      { $match: data },
      {
        $lookup: {
          from: "orders",
          localField: "no_osr",
          foreignField: "no_osr",
          as: "order_detail",
        },
      },
    ])
      .then((response) => {
        res.send({ status: "success", result: response });
      })
      .catch((err) => {
        res.send({ status: "failed", message: err });
      });
  else
    Installment.aggregate([
      // get all
      {
        $lookup: {
          from: "orders",
          localField: "no_osr",
          foreignField: "no_osr",
          as: "order_detail",
        },
      },
    ])
      .sort({ created_date: -1 })
      .then((response) => {
        res.send({ status: "success", result: response });
      })
      .catch((err) => {
        res.send({ status: "failed", message: err });
      });
};

const Add = (req, res) => {
  const data = req.body;
  Installment.create(data)
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
  console.log(data);
  Installment.findByIdAndUpdate(data.id, data)
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

const UpdateStatus = (req, res) => {
  const data = req.body;
  Installment.findOneAndUpdate(
    { no_osr: data.no_osr, cicilan_ke: data.cicilan_ke },
    { ...data }
  )
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
  Installment.findByIdAndDelete(data.id)
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

module.exports = { Get, Add, Update, Delete, UpdateStatus };
