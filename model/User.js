const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },

  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  img: {
    type: String
  },

  wishList: [
    {
      productId: String
    }
  ],

  cart: [
    {
      productId: String,
      quantity
    }
  ],

  dateAdded: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("user", UserSchema);
