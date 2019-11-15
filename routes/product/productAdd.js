const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
//Model
const Product = require('../../model/Product');

//@route    POST api/product
//@desc     add product
//@access   private
router.post(
	'/',
	[
		check('overview')
			.not()
			.isEmpty()
			.withMessage('Please enter first name'),
		check('sku')
			.not()
			.isEmpty()
			.withMessage('Please enter first name'),
		check('name')
			.not()
			.isEmpty()
			.withMessage('Please enter first name'),
		check('price')
			.not()
			.isEmpty()
			.withMessage('Please enter first name')
	],

	async (req, res) => {
		const error = validationResult(req);

		if (!error.isEmpty()) return res.status(400).json({ msg: error });

		const { name } = req.body;

		try {
			let product = await Product.findOne({ name });

			if (product)
				return res
					.status(400)
					.json({ msg: { name: 'exist', msg: 'Product is already exist' } });

			product = new Product({ ...req.body });

			await product.save();

			res.send('Successfully Saved');
		} catch (err) {
			console.error(err.message);
			return res.status(500).send('Server Error');
		}
	}
);

module.exports = router;
