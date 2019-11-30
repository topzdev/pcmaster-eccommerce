const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const _ = require('lodash');
const verified = require('../../middleware/verify');
//############################### SUBCATEGORY ###############################

//Category Model
const SubCategory = require('../../model/SubCategory');

// @route    GET api/options/subCategory
// @desc     view all subCategory
// @access   public
router.post('/sub-category/search/', verified, async (req, res) => {
	const { category, title } = req.body;
	let query = [];

	if (category) query.push({ category });
	if (title) query.push({ title: { $regex: title, $options: 'i' } });

	try {
		console.log(category, query);
		let subCategory = await SubCategory.find(
			query.length > 0 ? { $or: query } : {}
		);
		res.status(200).json(subCategory);
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server Error');
	}
});

//@route    POST api/options/sub-category
//@desc     add subCategory
//@access   public
router.post(
	'/sub-category',
	[
		verified,
		[
			check('category')
				.not()
				.isEmpty()
				.withMessage('Select a category'),
			check('title')
				.not()
				.isEmpty()
				.withMessage('SubCategory is empty')
		]
	],
	async (req, res) => {
		const error = validationResult(req);

		if (!error.isEmpty())
			return res.status(400).json({ type: 'error', msg: error.errors });

		const { title, category } = req.body;
		try {
			let subCategory = await SubCategory.find({ title, category });
			if (!_.isEmpty(subCategory))
				return res
					.status(400)
					.json({ type: 'error', msg: 'SubCategory is already exist' });

			subCategory = new SubCategory({ title, category });
			subCategory = await subCategory.save();
			res.status(200).json({
				type: 'success',
				msg: 'SubCategory Successfully Added',
				data: subCategory
			});
		} catch (error) {
			console.error(error.message);
			return res.status(500).send('Server Error');
		}
	}
);

//@route    DELETE api/options/sub-category
//@desc     delete subCategory
//@access   public
router.delete('/sub-category/:id', verified, async (req, res) => {
	const { id } = req.params;
	try {
		let subCategory = await SubCategory.findById(id);
		console.log(subCategory);
		if (!subCategory)
			return res
				.status(400)
				.json({ type: 'error', msg: 'SubCategory is not exist' });

		await SubCategory.findByIdAndDelete(id);
		res
			.status(200)
			.json({ type: 'success', msg: 'SubCategory Successfully Deleted' });
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server Error');
	}
});

module.exports = router;
