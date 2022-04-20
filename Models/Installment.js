const { model, Schema } = require("mongoose");

const Installment = model(
  "Installment",
  new Schema({
    created_date: { type: Date, default: Date.now },
    paid_date: { type: Date, required: false },
    no_osr: { type: String, required: true },
    invoice: { type: String, required: true },
    bill: { type: String, required: true },
    cicilan_ke: { type: Number, required: true },
    jatuh_tempo: { type: Date, required: true },
    status: { type: String, required: true },
  })
);

module.exports = Installment;
