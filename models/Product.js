const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const Schema = mongoose.Schema;

//Configure Schema
const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    price: {
      type: Number,
      required: true,
      maxlength: 100,
    },
    category: {
      type: ObjectId,
      ref: "category",
      required: true,
      maxlength: 100,
    },
    quantity: {
      type: Number,
      required: true,
    },
    sold: {
      type: Number,
      maxlength: 100,
      default: 0,
    },
    images: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = Product = mongoose.model("product", ProductSchema);
