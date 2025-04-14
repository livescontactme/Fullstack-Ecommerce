const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        default: 0
    },
    offerPrice: {
        type: Number,
        default: 0
    },
    
    images: [
        {
            type: String,
            required: true,
        }
    ],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    CountInStock: {
        type: Number,
        required: true,

    },
    rating: {
        type: Number,
        default: 0,
    },
   
    isFeatured: {
        type: Boolean,
        default: false,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },

})

module.exports = mongoose.model('product', productSchema);
exports.productSchema = productSchema;
