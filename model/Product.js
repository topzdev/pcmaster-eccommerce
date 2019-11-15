const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },

  sku: {
    type: String,
    required: true,
    unique: true
  },

  brand: {
    type: String
  },

  name: {
    type: String,
    required: true
  },

  overview: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  img: [
    {
      highReso: String,
      lowReso: String
    }
  ],

  description: [
    {
      title: String,
      content: String
    }
  ],

  category: [],

  tags: [],

  reviews: [
    {
      userId: String,
      dateAdded: {
        type: Date,
        default: Date.now()
      },
      rating: {
        type: Number
      },
      title: String,
      comment: String
    }
  ],

  dateAdded: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("product", ProductSchema);
