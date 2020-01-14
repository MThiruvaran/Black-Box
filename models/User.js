const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const UserSchema = mongoose.Schema({
    firstName: {
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
            type:String,
            required:true,
            unique:true
    },
    address:{
        type:String,
        required:true,
        unique:true    
    },
    password:{
        type:String,
        required:true
    }
    
});


module.exports = mongoose.model("Users", UserSchema);

