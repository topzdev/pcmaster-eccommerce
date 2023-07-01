const mongoose = require('mongoose');

const AdminUserSchema = mongoose.Schema({
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

	role: {
		type: String,
		required: true
	},

	created_by: {
		type: String
	},

	date_added: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('adminUser', AdminUserSchema);
