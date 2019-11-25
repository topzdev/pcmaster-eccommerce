const express = require('express');
const router = express.Router();

//Model
const Product = require('../../model/Product');

//@route    GET api/product
//@desc     view single product
//@access   public
router.get('/:id', async (req, res) => {
	console.log(req.params.id);
	try {
		const product = await Product.findById(req.params.id);

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
