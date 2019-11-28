const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const _ = require('lodash');

//############################### BRAND ###############################
//Category Variety
const Variety = require('../../model/Variety');

// @route    GET api/options/subCategory
// @desc     view all subCategory
// @access   public
router.get('/variety', async (req, res) => {
	try {
		let variety = await Variety.find({});
		res.status(200).json(variety);
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server Error');
	}
});

//@route    POST api/options/variety
//@desc     add subCategory
//@access   public
router.post(
	'/variety',
	[
		[
			check('subcategory')
				.not()
				.isEmpty()
				.withMessage('Select a SubCategory'),
			check('title')
				.not()
				.isEmpty()
				.withMessage('Variety title is empty')
		]
	],
	async (req, res) => {
		const error = validationResult(req);

		if (!error.isEmpty())
			return res.status(400).json({ type: 'error', msg: error.errors });

		const { title, subcategory } = req.body;
		try {
			let variety = await Variety.find({ title, subcategory });
			if (!_.isEmpty(variety))
				return res
					.status(400)
					.json({ type: 'error', msg: 'Variety is already exist' });

			variety = new Variety({ title, subcategory });
			variety = await variety.save();
			res.status(200).json({
				type: 'success',
				msg: 'Variety Successfully Added',
				data: variety
			});
		} catch (error) {
			console.error(error.message);
			return res.status(500).send('Server Error');
		}
	}
);

//@route    DELETE api/options/variety
//@desc     delete subCategory
//@access   public
router.delete('/variety/:id', async (req, res) => {
	const { id } = req.params;
	try {
		let variety = await Variety.findById(id);
		console.log(variety);
		if (!variety)
			return res
				.status(400)
				.json({ type: 'error', msg: 'Variety is not exist' });

		await Variety.findByIdAndDelete(id);
		res
			.status(200)
			.json({ type: 'success', msg: 'Variety Successfully Deleted' });
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server Error');
	}
});

module.exports = router;
