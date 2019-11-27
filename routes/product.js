const express = require('express');
const router = express.Router();

//@route    POST api/product
//@desc     view all product
//@access   public
router.use('/list/', require('./product/productList'));

//@route    POST api/product
//@desc     add product
//@access   private
router.use('/', require('./product/productAdd'));

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

module.exports = router;
