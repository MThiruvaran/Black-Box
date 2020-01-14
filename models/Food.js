const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


const FoodSchema = mongoose.Schema({
    flightNumber:{
        type:Number,
        required:true,
        
    },
    name:{
        type:String,
        required:true
    },
    food:{
        type:String,
        required:true,
        
    },
    quantity:{
        type:Number,
        required:true
    },
    seatNumber:{
        type:Number,
        required:true,
        
    },
    address:{
        type:String,
        required:true,
        unique:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Food", FoodSchema);