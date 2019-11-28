const mongoose = require('mongoose');

const VarietySchema = mongoose.Schema({
	subcategory: { type: String, required: true },
	title: { type: String, required: true }
});

module.exports = mongoose.model('variety', VarietySchema);
