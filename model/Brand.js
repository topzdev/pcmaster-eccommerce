const mongoose = require('mongoose');

const BrandSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('brand', BrandSchema);
