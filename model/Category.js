const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },

  title: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("category", CategorySchema);
