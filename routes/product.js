const express = require("express");
const router = express.Router();

//@route    POST api/product
//@desc     add product
//@access   private
router.post("/", (req, res) => {
  res.send("Add Product Request");
});

//@route    GET api/product
//@desc     view all product
//@access   public
router.get("/", (req, res) => {
  res.send("View All Product Request");
});

//@route    GET api/product
//@desc     view single product
//@access   public
router.get("/:id", (req, res) => {
  res.send("View Single Product Request");
});

//@route    PUT api/product
//@desc     update single product
//@access   private
router.put("/:id", (req, res) => {
  res.send("Update Single Product Request");
});

//@route    DELETE api/product
//@desc     delete single product
//@access   private
router.delete("/:id", (req, res) => {
  res.send("Delete Single Product Request");
});

module.exports = router;
