const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	firstname: {
		type: String,
		required: true
	},

	lastname: {
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

	wish_list: [
		{
			productId: String
		}
	],

	cart: [
		{
			productId: String,
			quantity: Number
		}
	],

	delivered: [
		{
			productId: String,
			quantity: Number
		}
	],

	date_added: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('user', UserSchema);
