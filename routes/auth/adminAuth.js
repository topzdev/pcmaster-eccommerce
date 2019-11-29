const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
require('dotenv').config();

//Middlewares
const verified = require('../../middleware/verify');

//Admin Auth Model
const AdminSchema = require('../../model/AdminUser');
//Add Administrator User

//@route    POST api/auth/admin/
//@desc     add admin user
//@access   public

router.post(
	'/admin/auth/',
	[
		check('email')
			.not()
			.isEmpty()
			.withMessage('Please enter your email address'),
		check('password')
			.not()
			.isEmpty()
			.withMessage('Please enter your password')
	],
	async (req, res) => {
		const { email, password } = req.body;

		try {
			let adminUser = await AdminSchema.findOne({ email });
			if (!adminUser)
				res.json({
					type: 'error',
					msg: 'No user found for this email, Please Contact the Administrator.'
				});
			let match = await bcrypt.compare(password, adminUser.password);

			if (!match)
				res.json({ type: 'error', msg: 'Invalid Password, Please try again' });

			const payload = {
				user: {
					id: adminUser.id
				}
			};

			jwt.sign(
				payload,
				process.env.JWT_SECRET,
				{
					expiresIn: 360000
				},
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.log(err.message);
			res.status(500).send('Server Error');
		}
	}
);

//@route    GET api/auth/admin/
//@desc     get the credentials of the verified user
//@access   private
router.get('/admin/verified', verified, async (req, res) => {
	let user = req.user.id;
	try {
		user = await AdminSchema.findById(user, { password: 0 });
		console.log(user);
		if (!user)
			return res
				.status(401)
				.json({ type: error, msg: '[Warning] Unauthorized User' });

		res
			.status(200)
			.json({ type: 'success', msg: 'Hello, Welcome to PC MASTER Dashboard' });
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

//@route    POST api/auth/admin/
//@desc     register admin user
//@access   public

router.post(
	'/admin/',
	[
		verified,
		[
			check('email')
				.not()
				.isEmpty()
				.withMessage('Email Address must not be empty'),
			check('email')
				.isEmail()
				.withMessage('Email Address is not valid email'),
			check('password')
				.not()
				.isEmpty()
				.withMessage('Password cannot be empty'),
			check('password')
				.isLength({ min: 6 })
				.withMessage('Password length must be 6 and above'),
			check('firstname')
				.not()
				.isEmpty()
				.withMessage('Firstname cannot be empty'),
			check('lastname')
				.not()
				.isEmpty()
				.withMessage('Lastname cannot be empty'),
			check('role')
				.not()
				.isEmpty()
				.withMessage('Role cannot be empty')
		]
	],
	async (req, res) => {
		let error = validationResult(req);

		if (!error.isEmpty())
			return res.status(400).json({ type: 'error', msg: error });

		let { email, password } = req.body;

		try {
			let adminUser = await AdminSchema.find({ email });

			if (!_.isEmpty(adminUser))
				return res
					.status(400)
					.json({ type: 'error', msg: 'The admin user is already exist' });

			adminUser = new AdminSchema({ ...req.body });
			let salt = await bcrypt.genSalt(10);
			adminUser.password = await bcrypt.hash(password, salt);

			await adminUser.save();

			res.json({
				type: 'success',
				msg: 'Admin User Successfully Registered',
				data: adminUser
			});
		} catch (err) {
			console.log(err.message);
			res.status(500).send('Server Error');
		}
	}
);

router.get('/admin/', async (req, res) => {
	try {
		const accounts = await AdminSchema.find({});

		res.json(accounts);
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

//@route    DELETE api/auth/admin/
//@desc     delete admin user
//@access   private
router.delete('/admin/:id', verified, async (req, res) => {
	const { id } = req.params;

	try {
		let adminDelete = await AdminSchema.findById(id);

		if (!adminDelete)
			return res
				.status(400)
				.json({ type: 'error', msg: 'Admin User is not exist or registered' });

		adminDelete = await AdminSchema.findByIdAndDelete(id);

		res.json({ type: 'success', msg: 'Admin User Deleted', data: adminDelete });
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

//@route    PUT api/auth/admin/
//@desc     update admin user
//@access   private
router.put(
	'/admin/',
	[
		verified,
		[
			check('email')
				.not()
				.isEmpty()
				.withMessage('Email Address must not be empty'),
			check('email')
				.isEmail()
				.withMessage('Email Address is not valid email'),
			check('password')
				.not()
				.isEmpty()
				.withMessage('Password cannot be empty'),
			check('firstname')
				.not()
				.isEmpty()
				.withMessage('Firstname cannot be empty'),
			check('lastname')
				.not()
				.isEmpty()
				.withMessage('Lastnmae cannot be empty'),
			check('role')
				.not()
				.isEmpty()
				.withMessage('Role cannot be empty')
		]
	],
	async (req, res) => {
		let error = validationResult(res);

		if (!error.isEmpty())
			return res.status(400).json({ type: 'error', msg: error });

		let { id, password } = req.body;

		try {
			let adminUpdate = await AdminSchema.findById(id);

			if (!adminUpdate)
				return res.status(400).json({
					type: 'error',
					msg: 'Admin User is not exist or registered'
				});

			if (adminUpdate.password != password) {
				let salt = await bcrypt.genSalt(69);
				password = await bcrypt.hash(password, salt);
			}

			adminUpdate = await AdminSchema.findByIdAndUpdate(id, {
				...req.body,
				password
			});
		} catch (err) {
			console.log(err.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;
