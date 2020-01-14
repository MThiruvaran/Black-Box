const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


const TicketSchema = mongoose.Schema({
    source:{
        type:String,
        required:true
        
    },
    destination:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
       
    },
    dob:{
        type:Date,
        required:true
    },
    email:{
        type:String,
        required:true,
        
    },
    gender:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
        
    },
    flightNumber:{
        type:Number,
        required:true
    },
    seat:{
        type:Number,
        required:true
    },
    adhar:{
        type:Number
    },
    passport:{
        type:Number
    },
    address:{
        type:String,
        required:true

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

module.exports = mongoose.model("Ticket", TicketSchema);