const { model, Schema } = require("mongoose");

const Order = model(
  "Order",
  new Schema({
    no_osr: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    identity: { type: String, required: true },
    no_identity: { type: String, required: true },
    phonenumber: { type: String, required: true },
    address: { type: String, required: true },
    note: { type: String, required: false },
    osr_date: { type: Date, required: true },
    invoice: { type: String, required: true },
    no_koordinator: { type: String, required: true },
    nama_koordinator: { type: String, required: true },
    no_bmb: { type: String, required: true },
    bmb_date: { type: Date, required: true },
    remainInstallment: { type: Number, required: true },
    bill: { type: Number, required: true },
    item_id: { type: Schema.Types.ObjectId, required: true },
    item_qty: { type: Number, required: true },
    leader: { type: Schema.Types.ObjectId, required: true },
    collector: { type: Schema.Types.ObjectId, required: true },
    sales1: { type: Schema.Types.ObjectId, required: true },
    sales2: { type: Schema.Types.ObjectId, required: true },
  })
);

module.exports = Order;
