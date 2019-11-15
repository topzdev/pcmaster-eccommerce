const express = require("express");
const router = express.Router();

//@route    PUT api/product
//@desc     update single product
//@access   private
router.put("/:id", (req, res) => {
  res.send("Update Single Product Request");
});

module.exports = router;
