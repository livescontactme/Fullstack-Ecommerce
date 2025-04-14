const nodemon = require('nodemon');
const Category = require('../models/category.js');
const Product = require('../models/product.js');
const express = require('express');
const pLimit = require('p-limit');
const cloudinary = require('cloudinary').v2;
const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


router.get(`/`, async (req, res) => {
    const productList = await Product.find();
    if (!productList) {
        res.status(500).json({ success: false })
    }
    res.send(productList);
})

router.post(`/create`, async (req, res) => {

    const limit = pLimit(2);


    const imagesToUpload = req.body.images.map((image) => {
        


        return limit(async () => {

            try {
                const result = await cloudinary.uploader.upload(image);
                console.log('Upload Success:', result);
                return result;
            } catch (error) {
                console.error('Upload Error:', error);
            }

        })
    });

    const uploadStatus = await Promise.all(imagesToUpload);

    const imgUrl = uploadStatus.map((item) => {
        return item.secure_url
    })

    if (!uploadStatus) {
        return res.status(500).json({
            error: "images cannot upload!",
            status: false
        })
    }

    const category = await Category.findById(req.body.category);
    if (!category) {
        return res.status(404).send("Invalid Category!");
    }
console.log("req.body", req.body);
    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        brand: req.body.brand,
        oldPrice: req.body.oldPrice,
        price: req.body.price,
        images: imgUrl,
        category: req.body.category,
        CountInStock: req.body.CountInStock,
        rating: req.body.rating,
       isFeatured: req.body.isFeatured,
    });

    product = await product.save();
    if (!product) {
        return res.status(500).json({
            error: err,
            success: false,
        })
    }
    return res.status(201).json(product)
})

router.get(`/:id`, async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(500).json({
            message: "product is not found!"
        })
    }
    return res.status(200).send(product);
})

router.delete(`/:id`, async (req, res) => {
    const deletProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletProduct) {
        return res.status(404).json({
            message: "product not found!",
            status: false
        })
    }
    return res.status(200).send({
        message: "product is deleted!",
        status: true
    })
})

router.put(`/:id`, async (req, res) => {
    console.log(req.body,"req.body");
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
        name:req.body.name,
        description:req.body.description,
        brand:req.body.brand,
        price:req.body.price,
        category:req.body.category,
        CountInStock:req.body.CountInStock,
        rating:req.body.rating,
        numReviews:req.body.numReviews,
        isFeatured:req.body.isFeatured
        }
    );

    if (!product) {
        return res.status(404).json({
            message: "the product can not be updated",
            status: false
        })
    }
    return res.status(200).json({
        message: "the product is updagted",
        status: true
    })
})

module.exports = router;