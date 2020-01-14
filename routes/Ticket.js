const express = require('express');
const Ticket = require('../models/Ticket');
const ticketRouter = express.Router();

//ticket booking api.
ticketRouter.post("/BookTicket", async (req,res) => {
    var source = req.body.source;
    var destination = req.body.destination;
    var name = req.body.name;
    var dob = req.body.dob;
    var email = req.body.email;
    var gender = req.body.gender;
    var phoneNumber = req.body.phoneNumber;
    var flightNumber = req.body.flightNumber;
    var seat = req.body.seat;
    var adhar = req.body.adhar;
    var passport = req.body.passport;
    var address = req.body.address;
    var date = req.body.date;
    var time = req.body.time;
    try{
        const reserved = await Ticket.findOne({seat:seat});
        if(reserved){res.status(500).send("seat already booked")}
        else{
            const reservation = new Ticket({
                address:address,
                name:name,
                source:source,
                destination:destination,
                dob:dob,
                email:email,
                gender:gender,
                phoneNumber:phoneNumber,
                flightNumber:flightNumber,
                seat:seat,
                adhar:adhar,
                passport:passport,
                date:date,
                time:time
            })
            await reservation.save()
            res.status(200).send("ticket booked successfully")
        }

    } catch (err) {
        res.status(400).send("error-occured")
    }
})


//delete the data
ticketRouter.post("/deleteTicket", async (req,res) => {
    var address = req.body.address;
    try {
        await Ticket.findOneAndDelete({address:address});
        res.status(200).send("data deleted successfully");

    } catch (err) {
        res.status(400).send("error occured");
    }
})


ticketRouter.post("/GetTicket", async (req,res) => {
    var id = req.body.id;
    try {
        const ticket = await Ticket.findOne({_id:id});
        res.status(200).json({
            message:success,
            data:ticket
        })
    } catch (error) {
        res.status(400).send("error occured");
    }
})

module.exports = ticketRouter;