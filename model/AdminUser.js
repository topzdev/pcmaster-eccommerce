const mongoose = require("mongoose");

const AdminUserSchema = mongoose.Schema({
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

  role: {
    type: String,
    required: true
  },

  dateAdded: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("adminUser", AdminUserSchema);
