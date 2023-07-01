const express = require("express");
const router = express.Router();

//@route    POST api/user
//@desc     register user
//@access   public
router.post("/", (req, res) => {
  res.send("User register");
});

//@route    POST api/user
//@desc     register admin user
//@access   private
router.post("/admin", (req, res) => {
  res.send("Admin User register");
});

module.exports = router;
