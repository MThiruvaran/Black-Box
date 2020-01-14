const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


const AvianSchema = mongoose.Schema({
    address:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true,
        unique:true
    },
    type:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Avians", AvianSchema);