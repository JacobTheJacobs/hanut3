const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Configure Schema
const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: 1,
      maxlength: 100,
    },
  },
  { timestamps: true }
);

module.exports = Category = mongoose.model("category", CategorySchema);
