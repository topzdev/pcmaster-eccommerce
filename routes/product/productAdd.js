const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const cloudinary = require("cloudinary").v2;

//Model
const Product = require("../../model/Product");

//@route    POST api/product
//@desc     add product
//@access   private
router.post(
    "/",
    [
        check("overview")
            .not()
            .isEmpty()
            .withMessage("Fields for Overview is empty"),
        check("sku")
            .not()
            .isEmpty()
            .withMessage("Fields for SKU is empty"),
        check("name")
            .not()
            .isEmpty()
            .withMessage("Fields for Product Name is empty"),
        check("price")
            .not()
            .isEmpty()
            .withMessage("Fields for Price is empty"),
        check("barcode")
            .not()
            .isEmpty()
            .withMessage("Fields for Barcode is empty"),
        check("category")
            .not()
            .isEmpty()
            .withMessage("Fields for Category is empty"),
        check("brand")
            .not()
            .isEmpty()
            .withMessage("Fields for Brand is empty"),
        check("quantity")
            .not()
            .isEmpty()
            .withMessage("Fields for Quantity is empty"),
        check("price")
            .not()
            .isEmpty()
            .withMessage("Fields for Price is empty")
    ],

    async (req, res) => {
        const error = validationResult(req);

        if (req.files === null)
            error.errors.push({
                param: "files",
                msg: "Images cannot be empty, Please try again..."
            });

        if (!error.isEmpty())
            return res.status(400).json({ type: "error", msg: error.errors });

        let data = req.body;
        const { name, sku, barcode } = req.body;

        try {
            let product = await Product.findOne({ name });
            let skuDup = await Product.findOne({ sku });
            let barcodeDup = await Product.findOne({ barcode });
            if (product || skuDup || barcodeDup)
                return res.status(400).json({
                    type: "error",
                    param: "exist",
                    msg: "Product is already exist"
                });

            const imageFiles = Object.values(req.files);
            data.img = await uploadImage(imageFiles);

            data.tags = JSON.parse(data.tags);
            data.description = JSON.parse(data.description);

            product = new Product({ ...data });

            product = await product.save();
            res.status(200).json({
                type: "success",
                msg: "Product Successfully Added",
                data: product
            });
        } catch (err) {
            console.error(err.message);
            return res.status(500).send("Server Error");
        }
    }
);

const uploadImage = images => {
    const promises = images.map(image =>
        cloudinary.uploader.upload(image.tempFilePath)
    );

    return Promise.all(promises)
        .then(results => {
            console.log("henlloo", results);
            return results;
        })
        .catch(() => {
            return res.status(400).json({
                type: "error",
                msg: "Error on uploading image, Try to upload again",
                param: "img"
            });
        });
};

module.exports = router;
