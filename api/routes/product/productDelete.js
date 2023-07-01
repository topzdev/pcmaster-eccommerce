const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const verified = require('../../middleware/verify');
//model
const Product = require('../../model/Product');

//@route    DELETE api/product
//@desc     delete single product
//@access   private
router.delete('/:id', verified, async (req, res) => {
	const { id } = req.params;

	try {
		console.log(id);
		let product = await Product.findById(id);

		if (!product)
			return res.status(400).json({ param: 'img', msg: 'Product not exist' });

		const public_ids = product.img.map(id => id.public_id);

		let cloud_res = await deleteImage(public_ids);

		if (cloud_res != null && cloud_res.type === 'error')
			return res.status(400).json({ param: 'img', msg: cloud_res.msg });

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
	console.log(public_ids);

	cloudinary.api.delete_resources(public_ids, (error, result) => {
		if (error) return { type: 'error', msg: 'Error on deleting images' };

		if (result) return { type: 'success', msg: result };
	});
};

module.exports = router;
