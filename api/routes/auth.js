const express = require('express');
const router = express.Router();

//@route    ROUTE api/user
//@desc     login user
//@access   private
router.use('/', require('./auth/adminAuth'));

//@route    ROUTE api/user
//@desc     auth user
//@access   public
router.use('/', require('./auth/userAuth'));

module.exports = router;
