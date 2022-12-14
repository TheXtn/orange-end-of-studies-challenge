const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
        firstName:{
            type : String,
            required : true
        },

        lastName:{
            type:String,
            required:true
        },

        userName:{
            type:String,
            required:true
        },

        email:{
            type:String,
            required:true
        },

        password:{
            type:String
        },

        birthDate: {
            type: Date,
        },

        img: {
            type: String
        },

        phone:{
            type:Number
        },

        gender:{
            type:String,
            enum:['male','female']
        },

        role:{
            type:String,
            enum:['USER','MANAGER'],
            default:'USER'
        },

        CreatedItems:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'Items'
            }
        ]


    },
    {
        timestamps:true
    })

module.exports = User = mongoose.model('User',userSchema);