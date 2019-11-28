const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const _ = require('lodash');
//############################### CATEGORY ###############################

//Category Model
const Category = require('../../model/Category');

// @route    GET api/options/category
// @desc     view all category
// @access   public
router.get('/category', async (req, res) => {
	try {
		let category = await Category.find({});
		res.status(200).json(category);
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server Error');
	}
});

//@route    POST api/options/category
//@desc     add category
//@access   public
router.post(
	'/category',
	[
		[
			check('title')
				.not()
				.isEmpty()
				.withMessage('Category is empty')
		]
	],
	async (req, res) => {
		const error = validationResult(req);

		if (!error.isEmpty())
			return res.status(400).json({ type: 'error', msg: error.errors });

		const { title } = req.body;
		try {
			let category = await Category.find({ title });
			if (!_.isEmpty(category))
				return res
					.status(400)
					.json({ type: 'error', msg: 'Category is already exist' });

			category = new Category({ title });
			category = await category.save();
			res.status(200).json({
				type: 'success',
				msg: 'Category Successfully Added',
				data: category
			});
		} catch (error) {
			console.error(error.message);
			return res.status(500).send('Server Error');
		}
	}
);

//@route    DELETE api/options/category
//@desc     delete category
//@access   public
router.delete('/category/:id', async (req, res) => {
	const { id } = req.params;
	try {
		let category = await Category.findById(id);
		console.log(category);
		if (!category)
			return res
				.status(400)
				.json({ type: 'error', msg: 'Category is not exist' });

		await Category.findByIdAndDelete(id);
		res
			.status(200)
			.json({ type: 'success', msg: 'Category Successfully Deleted' });
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server Error');
	}
});

module.exports = router;
