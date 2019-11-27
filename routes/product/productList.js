const express = require('express');
const router = express.Router();

//model
const Product = require('../../model/Product');

//@route    GET api/product
//@desc     view all product
//@access   public
router.get('/', async (request, response) => {
	const { name, category } = request.body;
	try {
		let products = await Product.find({
			$or: [{ name: { $regex: name ? name : '', $options: 'i' } }]
		});

		console.log(products);

		if (!products)
			return response
				.status(400)
				.json({ param: 'exist', msg: 'No product yet' });

		response.json(products);
	} catch (err) {
		console.error(err.message);
		return response.status(500).send('Server Error');
	}
});

module.exports = router;
