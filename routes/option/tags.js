const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const _ = require('lodash');

const Tags = require('../../model/Tags');

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
			tags = await tags.save();
			res
				.status(200)
				.json({ type: 'success', msg: 'Tag Successfully Added', data: tags });
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

module.exports = router;
