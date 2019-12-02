const express = require('express');
const router = express.Router();

//Model
const Product = require('../../model/Product');

//@route    GET api/product
//@desc     view single product
//@access   public
router.post('/single/', async (req, res) => {
	const { id, name, barcode, sku } = req.body;

	let query = {};
	if (id) query._id = id;
	if (name) query.name = name;
	if (barcode) query.barcode = barcode;
	if (sku) query.sku = sku;
	try {
		console.log(query);
		const product = await Product.findOne(query);
		console.log(product);
		if (!product) {
			return res.status(400).json({
				type: 'error',
				msg: 'Product not found'
			});
		}

		res.status(200).json(product);
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server Error');
	}
});

module.exports = router;
