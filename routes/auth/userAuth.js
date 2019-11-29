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
const UserSchema = require('../../model/User');

//@route    POST api/auth/user/
//@desc     login user
//@access   private
router.post(
	'/user/auth/',
	[
		check('email', 'Please enter your email')
			.not()
			.isEmpty(),
		check('password', 'Please enter your password')
			.not()
			.isEmpty()
	],
	async (req, res) => {
		const error = validationResult(req);

		if (!error.isEmpty())
			return req.json({ type: 'error', msg: error.array() });

		const { email, password } = req.body;
		try {
			const user = await UserSchema.findOne({ email });

			if (!user)
				return res
					.status(400)
					.json({ type: 'error', msg: 'Invalid Email Addresss' });

			const match = await bcrypt.compare(password, user.password);

			if (!match)
				return res.status(400).json({ type: 'error', msg: 'Invalid Password' });

			const payload = {
				user: {
					id: user.id
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

router.get('/user/', verified, async (req, res) => {
	let user = req.user.id;
	try {
		user = await UserSchema.findById(user, { password: 0 });

		if (!user) return res.status(400).json({ msg: 'Your account not found' });

		res.json(user);
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

//@route    POST api/auth/user/
//@desc     add user
//@access   private
router.post(
	'/user/',
	[
		check('email', 'Email Address must not be empty')
			.not()
			.isEmpty(),
		check('email', 'Email Address is not valid email').isEmail(),
		check('password', 'Password cannot be empty')
			.not()
			.isEmpty(),
		check('password', 'Password length must be 6 and above').isLength({
			min: 6
		}),
		check('firstname', 'Firstname cannot be empty')
			.not()
			.isEmpty(),
		check('lastname', 'Lastname cannot be empty')
			.not()
			.isEmpty()
	],
	async (req, res) => {
		let error = validationResult(req);

		if (!error.isEmpty())
			return res.status(400).json({ type: 'error', msg: error });

		let { email, password } = req.body;

		try {
			let user = await UserSchema.findOne({ email });

			if (!_.isEmpty(user))
				return res
					.status(400)
					.json({ type: 'error', msg: 'The email is alreay taken' });

			user = new UserSchema({ ...req.body });

			let salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);

			await user.save();

			const payload = {
				user: {
					id: user.id
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

//@route    DELETE api/auth/user/
//@desc     delete user
//@access   private
router.delete('/user/:id', verified, async (req, res) => {
	const { id } = req.params;

	try {
		let adminDelete = await UserSchema.findById(id);

		if (!adminDelete)
			return res
				.status(400)
				.json({ type: 'error', msg: 'User is not exist or registered' });

		await UserSchema.findByIdAndDelete(id);

		res.json({ type: 'error', msg: 'User Deleted' });
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

//@route    UPDATE api/auth/user/
//@desc     delete user
//@access   private
router.put(
	'/user',
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
				.isLength({ min: 6 })
				.withMessage('Password cannot be empty'),
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
				.withMessage('Lastname cannot be empty')
		]
	],
	async (req, res) => {
		let error = validationResult(res);

		if (!error.isEmpty())
			return res.status(400).json({ type: 'error', msg: error.array() });

		let { _id, password } = req.body;

		try {
			let user = await UserSchema.findById(_id);

			if (!user)
				return res.status(400).json({
					type: 'error',
					msg: 'Admin User is not exist or registered'
				});

			if (user.password != password) {
				let salt = await bcrypt.genSalt(10);
				password = await bcrypt.hash(password, salt);
			}

			user = await UserSchema.findByIdAndUpdate(id, {
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
