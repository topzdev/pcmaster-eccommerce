const express = require('express');
const router = express.Router();
const verified = require('../../middleware/verify');
//@route    PUT api/product
//@desc     update single product
//@access   private
router.put('/:id', verified, (req, res) => {
	res.send('Update Single Product Request');
});

module.exports = router;
