const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;

//model
const Product = require('../../model/Product');

//@route    DELETE api/product
//@desc     delete single product
//@access   private
router.delete('/:id', async (req, res) => {
	const { id } = req.params;

	try {
		console.log(id);
		let product = await Product.findById(id);

		if (!product)
			return res.status(400).json({ param: 'exist', msg: 'Product not exist' });

		const public_ids = product.img.map(id => id.public_id);

		await deleteImage(public_ids);

		await Product.findByIdAndDelete(id);

		res.status(200).json({
			type: 'success',
			msg: 'Product Successfully Deleted',
			data: product
		});
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server Error');
	}
});

const deleteImage = public_ids => {
	cloudinary.uploader.delete_resources(public_ids, (error, result) => {
		if (error)
			return res.status(400).json({ param: 'exist', msg: 'Product not exist' });
	});
};

module.exports = router;
