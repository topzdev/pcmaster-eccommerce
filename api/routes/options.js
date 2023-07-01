const express = require('express');
const router = express.Router();

//############################### CATEGORY ###############################

router.use('/', require('./option/category'));

//############################### SUBCATEGORY ###############################

router.use('/', require('./option/subcategory'));

//############################### TAGS ###############################

router.use('/', require('./option/tags'));

//############################### BRAND ###############################

router.use('/', require('./option/brand'));

//############################### VARIETY ###############################

router.use('/', require('./option/variety'));

module.exports = router;
