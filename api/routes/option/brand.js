const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const _ = require('lodash');
const verified = require('../../middleware/verify');

//############################### BRAND ###############################
const Brand = require('../../model/Brand');

//@route    GET api/options/brand
//@desc     view all brandd
//@access   public
router.get('/brand', verified, async (req, res) => {
	try {
		let brand = await Brand.find({});
		res.status(200).json(brand);
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server Error');
	}
});

//@route    POST api/options/brand
//@desc     add brand
//@access   public
router.post(
	'/brand',
	[
		verified,
		[
			check('title')
				.not()
				.isEmpty()
				.withMessage('Brand is empty')
		]
	],
	async (req, res) => {
		const error = validationResult(req);

		if (!error.isEmpty())
			return res.status(400).json({ type: 'error', msg: error.array() });

		const { title } = req.body;
		try {
			let brand = await Brand.find({ title });
			if (!_.isEmpty(brand))
				return res
					.status(400)
					.json({ type: 'error', msg: 'Brand is already exist' });

			brand = new Brand({ title });
			brand = await brand.save();
			res.status(200).json({
				type: 'success',
				msg: 'Brand Successfully Added',
				data: brand
			});
		} catch (error) {
			console.error(error.message);
			return res.status(500).send('Server Error');
		}
	}
);

//@route    DELETE api/options/brand
//@desc     delete brand
//@access   public
router.delete('/brand/:id', verified, async (req, res) => {
	const { id } = req.params;
	try {
		let brand = await Brand.findById(id);

		if (!brand)
			return res.status(400).json({ type: 'error', msg: 'Brand is not exist' });

		await Brand.findByIdAndDelete(id);
		res
			.status(200)
			.json({ type: 'success', msg: 'Brand Successfully Deleted' });
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server Error');
	}
});

module.exports = router;
