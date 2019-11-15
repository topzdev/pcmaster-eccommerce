const mongoose = require("mongoose");

const TagSchema = mongoose.Schema({
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

module.exports = mongoose.model("tag", TagSchema);
