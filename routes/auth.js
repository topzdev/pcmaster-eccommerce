const express = require("express");
const router = express.Router();

//@route    GET api/user
//@desc     login user
//@access   private
router.get("/", (req, res) => {
  res.send("check user on database");
});

//@route    POST api/user
//@desc     auth user
//@access   public
router.post("/", (req, res) => {
  res.send("User Login");
});

module.exports = router;
