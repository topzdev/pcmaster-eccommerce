const express = require("express");
const router = express.Router();

//@route    GET api/product
//@desc     view single product
//@access   public
router.get("/:id", (req, res) => {
  res.send("View Single Product Request");
});

module.exports = router;
