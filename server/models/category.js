
const mongoose = require('mongoose');
const categorySchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    images:[{
        type:String,
        require:true
    }],

    color:{
        type:String,
        require:true
    }
})

categorySchema.virtual('id').get(function(){
    return this._id.toHexString();
});

categorySchema.set('toJSON', {
    virtuals: true,
});



module.exports = mongoose.model('category', categorySchema);
exports.categorySchema = categorySchema;

//exports.category = mongoose.model('category', categorySchema);

