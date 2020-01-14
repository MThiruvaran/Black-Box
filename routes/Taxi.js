const express = require('express');
const Taxi = require('../models/Taxi');
const taxiRouter = express.Router();


taxiRouter.post("/BookTaxi", async (req,res) => {
    var address = req.body.address;
    var name = req.body.name;
    var source = req.body.source;
    var destination = req.body.destination;
    var taxiName = req.body.taxiName;
    var date = req.body.date;
    var time = req.body.time; 
    try {
        const taxi = new Taxi({
            address:address,
            name:name,
            source:source,
            destination:destination,
            taxiName:taxiName,
            date:date,
            time:time
        })
        await taxi.save();
        res.status(200).send("Taxi Booked");
    } catch (error) {
        res.status(400).send("error occured");
    }
})



taxiRouter.post("/DeleteTaxi", async (req,res) => {
    var address = req.body.address;
    try {
        await Taxi.findOneAndDelete({address:address});
        res.status(200).send("data deleted");
    } catch (error) {
        res.status(400).send("error-occured");
    }
})


module.exports = taxiRouter;