const express = require('express');
const router = express.Router();

//model
const Product = require('../../model/Product');

//@route    GET api/product
//@desc     view all product
//@access   public
router.post('/', async (request, response) => {
	const { name, category, brand, sku, tags, barcode } = request.body;

	let query = [];

	if (name) query.push({ name: { $regex: name, $options: 'i' } });
	if (category) query.push({ category });
	if (sku) query.push({ sku });
	if (brand) query.push({ brand });
	if (barcode) query.push({ barcode: { $regex: barcode, $options: 'i' } });
	if (tags) query.push({ tags: { $in: tags } });

	try {
		console.log(query, request.body);
		let products = await Product.find(query.length > 0 ? { $or: query } : {});

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
