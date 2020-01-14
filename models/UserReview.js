const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


const UserReviewSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    review:{
        type:String,
        required:true
    },
    count:{
        type:Number,
        required:true,
        
    }
})

module.exports = mongoose.model("UserReview", UserReviewSchema);