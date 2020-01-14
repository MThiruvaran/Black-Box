const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRouter = require("./routes/User"); 
const avianRouter = require("./routes/Avians");
const ticketRouter = require("./routes/Ticket");
const foodRouter = require('./routes/Food');
const taxiRouter = require("./routes/Taxi");
require("dotenv/config");

const port = process.env.port || 8080;


app.use(express.urlencoded({extended:true}));
app.use(express.json());
//middleware
app.use("/api/User", userRouter);
app.use("/api/Avian", avianRouter);
app.use("/api/Ticket", ticketRouter);
app.use("/api/Food", foodRouter);
app.use("/api/Taxi", taxiRouter);


//mongodb connection statement
mongoose.connect(process.env.ConnectionString, {useNewUrlParser:true,useUnifiedTopology:true}, () => {
    console.log("Connected to the database")
})


//app listenig to the port
app.listen(port, () => console.log("listening to the server port: "+port));
