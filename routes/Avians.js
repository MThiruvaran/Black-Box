const express = require('express');
const Avians = require('../models/Avians');
const avianRouter = express.Router();
const bcrypt = require('bcrypt')
const saltRounds = 5;


//Create Avains
avianRouter.post("/Create", async (req,res) => {
    var address = req.body.address;
    var name = req.body.name;
    var code = req.body.code;
    var type = req.body.type;
    var email = req.body.email;
    var password = bcrypt.hashSync(req.body.password,saltRounds)
    try{
        const userByEmail = await User.findOne({email:email});
        if(userByEmail){res.status(200).send("user already exist")}
        else{
            const userByAdd =  await User.findOne({address:address});
            if(userByAdd){res.status(200).send("user already exist")}
            else{
                const avian = new Avians({
                    address: address,
                    name: name,
                    code:code,
                    type: type,
                    email: email,
                    password: password   
                })
                await avian.save();
                res.status(200).send("user created successfully")
            }
        }
    } catch (err){
        res.status(400).send("error occured")
    }
})

//Authenticate Avians
avianRouter.post("/Authenticate", async (req,res) => {
    var email = req.body.email;
    var password = req.body.password;
    try{
        const user = await Avians.findOne({email:email});
        if(user){
            if(bcrypt.compareSync(password,user.password)){res.status(200).send("login success")}
            else{res.status(400).send("invalid credentials")}
        } else{
            res.status(400).send("user not found")
        } 
    } catch (err) {
        res.status(500).json({message:err})
    }
})


module.exports = avianRouter;