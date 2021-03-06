const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},

	barcode: {
		type: String,
		unique: true
	},

	sku: {
		type: String,
		unique: true
	},

	quantity: {
		type: Number,
		required: true
	},

	brand: {
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

	img: [],

	description: [],

	category: {
		type: String
	},

	subcategory: {
		type: String
	},

	variety: {
		type: String
	},
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
	},

	created_by: {
		type: String
	}
});

module.exports = mongoose.model('product', ProductSchema);
