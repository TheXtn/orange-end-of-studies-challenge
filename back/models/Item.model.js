const mongoose=require('mongoose');
var shema= new mongoose.Schema({
    nom:String,
    stock:Number,
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    is_deleted:Boolean,
    createdAt: {
        type: Date,
        default: Date.now
    },
})
module.exports=mongoose.model('Item',shema);