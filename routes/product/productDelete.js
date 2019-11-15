const express = require('express');
const router = express.Router();

//model
const Product = require('../../model/Product');

//@route    DELETE api/product
//@desc     delete single product
//@access   private
router.delete('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		console.log(id);
		let product = await Product.findOne({ _id: id });

		if (!product)
			return res.status(400).json({ param: 'exist', msg: 'Product not exist' });

		await Product.findByIdAndDelete(id);

		res.send('Product Deleted');
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server Error');
	}
});

module.exports = router;
