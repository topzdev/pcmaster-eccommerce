const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},

	sku: {
		type: String,
		required: true,
		unique: true
	},

	brand: {
		type: String
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
	},

	createdBy: {
		type: String
	}
});

module.exports = mongoose.model('product', ProductSchema);
