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
			.withMessage('Fields for Overview is empty'),
		check('sku')
			.not()
			.isEmpty()
			.withMessage('Fields for SKU is empty'),
		check('name')
			.not()
			.isEmpty()
			.withMessage('Fields for Product Name is empty'),
		check('price')
			.not()
			.isEmpty()
			.withMessage('Fields for Price is empty'),
		check('barcode')
			.not()
			.isEmpty()
			.withMessage('Fields for Barcode is empty'),
		check('category')
			.not()
			.isEmpty()
			.withMessage('Fields for Category is empty'),
		check('brand')
			.not()
			.isEmpty()
			.withMessage('Fields for Brand is empty'),
		check('tags')
			.not()
			.isEmpty()
			.withMessage('Fields for Tags is empty'),
		check('quantity')
			.not()
			.isEmpty()
			.withMessage('Fields for Quantity is empty'),
		check('price')
			.not()
			.isEmpty()
			.withMessage('Fields for Price is empty')
	],

	async (req, res) => {
		const error = validationResult(req);

		if (!error.isEmpty())
			return res.status(400).json({ type: 'error', msg: error.errors });

		const { name, sku, barcode } = req.body;

		try {
			let product = await Product.findOne({ name });
			let skuDup = await Product.findOne({ sku });
			let barDup = await Product.findOne({ barcode });
			if (product || skuDup || barDup)
				return res.status(400).json({
					type: 'error',
					param: 'exist',
					msg: 'Product is already exist'
				});

			product = new Product({ ...req.body });

			product = await product.save();

			res.status(200).json({
				type: 'success',
				msg: 'Product Successfully Added',
				data: product
			});
		} catch (err) {
			console.error(err.message);
			return res.status(500).send('Server Error');
		}
	}
);

router.put(
	'/update-img',
	[
		check('img')
			.not()
			.isEmpty()
			.withMessage('Fields for image is empty')
	],
	async (req, res) => {
		const error = validationResult(req);

		if (!error.isEmpty())
			return res.status(400).json({ type: 'error', msg: error.errors });

		const { _id, img } = req.body;
		console.log('my id ' + _id, img);
		try {
			await Product.findByIdAndUpdate(_id, { $set: { img: img } });

			res.status(200).json({
				type: 'success',
				msg: 'Image Successfully Uploaded'
			});
		} catch (err) {
			console.error(err.message);
			return res.status(500).send('Server Error');
		}
	}
);

module.exports = router;
