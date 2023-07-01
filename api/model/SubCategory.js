const mongoose = require('mongoose');

const SubCategorySchema = mongoose.Schema({
	category: { type: String, required: true },
	title: { type: String, required: true }
});

module.exports = mongoose.model('subCategory', SubCategorySchema);
