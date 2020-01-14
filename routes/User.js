const express = require('express');
const User = require('../models/User');
const userRouter = express.Router();
const bcrypt = require('bcrypt')
const saltRounds = 5;



//Async await


//create Users
userRouter.post("/Create", async (req,res) => {
    var address = req.body.address;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var password = bcrypt.hashSync(req.body.password,saltRounds)
    try{
        const userByEmail = await User.findOne({email:email});
        if(userByEmail){res.status(200).send("user already exist")}
        else{
            const userByAdd =  await User.findOne({address:address});
            if(userByAdd){res.status(200).send("user already exist")}
            else{
                const user = new User({
                    address: address,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password   
                })
                await user.save();
                res.status(200).send("user created successfully")
            }
        }
    } catch (err){
        res.status(400).send("error occured")
    }
})

//view all user
userRouter.get("/Viewall", async (req,res) => {
    try {
        const users = await User.find();
        res.status(200).json({data:users});
    } catch (error) {
        res.send("error")
    }
})


//Authenticate Users
userRouter.post("/Authenticate", async (req,res) => {
    var email = req.body.email;
    var password = req.body.password;
    try{
        const user = await User.findOne({email:email});
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
 



module.exports = userRouter;