const { model, Schema } = require("mongoose");

const DailyInput = model(
  "DailyInput",
  new Schema({
    created_at: { type: Date, default: Date.now },
    employee_id: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    no_ipk: { type: String, required: true },
    nama_koordinator: { type: String, required: true },
    no_osr: { type: String, required: true },
    customer: { type: String, required: true },
    cicilan_ke: { type: Number, required: true },
  })
);

module.exports = DailyInput;
