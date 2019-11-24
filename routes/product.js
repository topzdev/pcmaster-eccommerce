const express = require('express');
const router = express.Router();

//@route    POST api/product
//@desc     add product
//@access   private
router.use('/', require('./product/productAdd'));

//@route    GET api/product
//@desc     view all product
//@access   public
router.use('/', require('./product/productList'));

//@route    GET api/product
//@desc     view single product
//@access   public
router.use('/', require('./product/productView'));

//@route    PUT api/product
//@desc     update single product
//@access   private
router.use('/', require('./product/productUpdate'));

//@route    DELETE api/product
//@desc     delete single product
//@access   private
router.use('/', require('./product/productDelete'));

//@route    POST api/product/image-upload
//@desc     Upload product image
//@access   private
router.use('/', require('./product/uploadImage'));

module.exports = router;
