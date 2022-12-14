const mongoose = require('mongoose');


const itemSchema = mongoose.Schema({
    itemName:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    stock:{
        type:Number,
        required:true
    },

    MadeByUser:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true}
)

module.exports=Items=mongoose.model('Items',itemSchema);