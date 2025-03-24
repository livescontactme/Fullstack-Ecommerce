const Category = require('../models/category');
const express = require('express');
const router = express.Router();
// const pLimit = require('p-limit');
// const limit = pLimit(2);
// const cloudinary = require('cloudinary').v2;


// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

router.get(`/`, async (req, res) => {

try{

    const page = parseInt(req.query.page) || 1;
    const perPage = 3;
    const totalPosts = await Category.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);
    
    if(page > totalPages){
        return res.status(404).json({message: "page not found"})
    }

    const categoryList = await Category.find()
    .skip((page - 1) * perPage)
    .limit(perPage)
    .exec();



    if (!categoryList) {
        res.status(500).json({ success: false })
    }
    return res.status(200).json({
        "categoryList":categoryList,
        "totalPages":totalPages,
        "page":page
    })

    res.send(categoryList);
}catch(error){
    res.status(500).json({success: false})
}

    
   
});

router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
        res.status(500).json({ message: 'the category with given id was not found' })
    }
    return res.status(200).send(category);
})

router.delete('/:id', async (req, res) => {
    const deletedUser = await Category.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
        res.status(404).json({
            message: 'category not found',
            success: false
        })
    }
    res.status(200).json({
        success: true,
        message: 'category deleted!'
    })
});

router.post('/create', async (req, res) => {
    

    // const limit = pLimit(2);
    

    // const imagesToUpload = req.body.images.map((image) => {


    //     return limit(async () => {




    //         try {
    //             const result = await cloudinary.uploader.upload(image);
    //             console.log('Upload Success:', result);
    //             return result;
    //         } catch (error) {
    //             console.error('Upload Error:', error);
    //         }

    //     })
    // });

    // const uploadStatus = await Promise.all(imagesToUpload);

    // const imgUrl = uploadStatus.map((item) => {
    //     return item.secure_url
    // })

    // if (!uploadStatus) {
    //     return res.status(500).json({
    //         error: "images cannot upload!",
    //         status: false
    //     })
    // }
    
    let category = new Category({
        name: req.body.name,
        images: req.body.images,
        color: req.body.color
    });

    if (!category) {
        res.status(500).json({
            error: err,
            success: false
        })
    }

    category = await category.save();
    res.status(201).json(category);
});


router.put('/:id', async (req, res) => {

    // const limit = pLimit(2);
    //////

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
        });
    }
    ////////////

    const category = await Category.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name,
            images: req.body.images,
            color: req.body.color
        },

        // { new: true }
    )
    if (!category) {
        return res.status(500).json({
            message: 'category can not updated',
            success: false
        })
    }

    res.send(category);

});

module.exports = router;