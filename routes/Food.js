const express = require('express');
const Food = require('../models/Food');
const foodRouter = express.Router();

foodRouter.post("/OrderFood", async (req,res) => {
    var flightNumber = req.body.flightNumber;
    var name = req.body.name;
    var food = req.body.food;
    var quantity = req.body.quantity;
    var seatNumber = req.body.seatNumber;
    var address = req.body.address;
    var date = req.body.date;
    var time = req.body.time;
    try {
        const foodBooking = new Food({
            address:address,
            name:name,
            food:food,
            quantity:quantity,
            seatNumber:seatNumber,
            flightNumber:flightNumber,
            date:date,
            time:time
        })  
        await foodBooking.save();
        res.status(200).send("order placed")
    } catch (err) {
        res.status(400).send("error occured");
    }
})



foodRouter.post("/deleteFood", async (req,res) => {
    var address = req.body.address;
    try {
        await Food.findOneAndDelete({address:address});
        res.status(200).send("data deleted successfully");
    } catch (error) {
        res.status(400).send("error occured");
    }
})



foodRouter.post("/GetFoodData", async (req,res) => {
    var id = req.body.id;
    try {
        const foods = await Food.findOne({_id:id});
        if(food){res.status.json({
            message:"success",
            data:foods
        })} else {
            res.status(400).send("data not found");
        }
    } catch (error) {
        res.status(400).send("error occured")
    }
})


module.exports = foodRouter;