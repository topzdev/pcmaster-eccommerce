const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const _ = require('lodash');

//############################### CATEGORY ###############################

//Category Model
const Category = require('../model/Category');

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
			return res.status(400).json({ type: 'error', msg: error });

		const { title } = req.body;
		try {
			console.log(title);
			let category = await Category.find({ title });
			console.log(category);
			if (!_.isEmpty(category))
				return res
					.status(400)
					.json({ type: 'error', msg: 'Category is already exist' });

			category = new Category({ title });
			await category.save();
			res
				.status(200)
				.json({ type: 'success', msg: 'Category Successfully Added' });
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

//############################### TAGS ###############################
const Tags = require('../model/Tags');

//@route    GET api/options/tags
//@desc     view all tags
//@access   public
router.get('/tags', async (req, res) => {
	try {
		let tags = await Tags.find({});
		res.status(200).json(tags);
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server Error');
	}
});

//@route    POST api/options/tags
//@desc     add tags
//@access   public
router.post(
	'/tags',
	[
		[
			check('title')
				.not()
				.isEmpty()
				.withMessage('Tag is empty')
		]
	],
	async (req, res) => {
		const error = validationResult(req);

		if (!error.isEmpty())
			return res.status(400).json({ type: 'error', msg: error });

		const { title } = req.body;
		try {
			let tags = await Tags.find({ title });
			if (!_.isEmpty(tags))
				return res
					.status(400)
					.json({ type: 'error', msg: 'Tag is already exist' });

			tags = new Tags({ title });
			await tags.save();
			res.status(200).json({ type: 'success', msg: 'Tag Successfully Added' });
		} catch (error) {
			console.error(error.message);
			return res.status(500).send('Server Error');
		}
	}
);

//@route    DELETE api/options/tags
//@desc     delete tags
//@access   public
router.delete('/tags/:id', async (req, res) => {
	const { id } = req.params;
	try {
		let tags = await Tags.findById(id);

		if (!tags)
			return res.status(400).json({ type: 'error', msg: 'Tag is not exist' });

		await Tags.findByIdAndDelete(id);
		res.status(200).json({ type: 'success', msg: 'Tag Successfully Deleted' });
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server Error');
	}
});

//############################### TAGS ###############################
const Brand = require('../model/Brand');

//@route    GET api/options/brand
//@desc     view all brandd
//@access   public
router.get('/brand', async (req, res) => {
	try {
		let brand = await Brand.find({});
		res.status(200).json(brand);
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server Error');
	}
});

//@route    POST api/options/brand
//@desc     add brand
//@access   public
router.post(
	'/brand',
	[
		[
			check('title')
				.not()
				.isEmpty()
				.withMessage('Brand is empty')
		]
	],
	async (req, res) => {
		const error = validationResult(req);

		if (!error.isEmpty())
			return res.status(400).json({ type: 'error', msg: error });

		const { title } = req.body;
		try {
			let brand = await Brand.find({ title });
			if (!_.isEmpty(brand))
				return res
					.status(400)
					.json({ type: 'error', msg: 'Brand is already exist' });

			brand = new Brand({ title });
			await brand.save();
			res
				.status(200)
				.json({ type: 'success', msg: 'Brand Successfully Added' });
		} catch (error) {
			console.error(error.message);
			return res.status(500).send('Server Error');
		}
	}
);

//@route    DELETE api/options/brand
//@desc     delete brand
//@access   public
router.delete('/brand/:id', async (req, res) => {
	const { id } = req.params;
	try {
		let brand = await Brand.findById(id);

		if (!brand)
			return res.status(400).json({ type: 'error', msg: 'Brand is not exist' });

		await Brand.findByIdAndDelete(id);
		res
			.status(200)
			.json({ type: 'success', msg: 'Brand Successfully Deleted' });
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server Error');
	}
});

module.exports = router;
