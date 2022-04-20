const { model, Schema } = require("mongoose");

const Item = model(
  "Item",
  new Schema({
    code: { type: String, required: true },
    name: { type: String, required: true },
    system: { type: String, required: true },
    installment: { type: Number, required: true },
    price: { type: Number, required: true },
    kontes: { type: Number, required: true },
    commission: { type: Number, required: true },
    stok: { type: Number, required: true },
    stokTotal: { type: Number, required: true },
  })
);

module.exports = Item;
