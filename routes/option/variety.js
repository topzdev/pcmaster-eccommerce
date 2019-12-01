const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const _ = require('lodash');
const verified = require('../../middleware/verify');
//############################### Variety ###############################
//Category Variety
const Variety = require('../../model/Variety');

// @route    GET api/options/variety
// @desc     view all variety
// @access   public
router.post('/variety/search', verified, async (req, res) => {
	const { title, subcategory } = req.body;
	let query = [];

	if (subcategory) query.push({ subcategory });
	if (title) query.push({ title: { $regex: title, $options: 'i' } });

	try {
		console.log(subcategory, query);
		let variety = await Variety.find(query.length > 0 ? { $or: query } : {});
		res.status(200).json(variety);
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server Error');
	}
});

//@route    POST api/options/variety
//@desc     add variety
//@access   public
router.post(
	'/variety',
	[
		verified,
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
			return res.status(400).json({ type: 'error', msg: error.array() });

		const { title, subcategory } = req.body;
		try {
			console.log('Variety', req.body);
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
//@desc     delete variety
//@access   public
router.delete('/variety/:id', verified, async (req, res) => {
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
