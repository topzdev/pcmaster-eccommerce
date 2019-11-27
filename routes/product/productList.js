const express = require("express");
const router = express.Router();

//model
const Product = require("../../model/Product");

//@route    GET api/product
//@desc     view all product
//@access   public
router.get("/", async (req, res) => {
    try {
        let products = await Product.find({});

        if (!products)
            return res
                .status(400)
                .json({ param: "exist", msg: "No product yet" });

        res.json(products);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
    }
});

module.exports = router;
