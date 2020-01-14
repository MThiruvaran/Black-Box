const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


const TotalReviewSchema = mongoose.Schema({
    total:{
        type:Number,
        required:true
    },
    count1:{
        type:Number,
        required:true
    },
    count2:{
        type:Number,
        required:true,
    
    },
    count3:{
        type:Number,
        required:true
    },
    count4:{
        type:Number,
        required:true,
        
    },
    count5:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("TotalReview", TotalReviewSchema);