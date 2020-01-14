const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


const TaxiSchema = mongoose.Schema({
    address:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    source:{
        type:String,
        required:true,
        
    },
    destination:{
        type:String,
        required:true
    },
    taxiName:{
        type:String,
        required:true,
        
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

module.exports = mongoose.model("Taxi", TaxiSchema);