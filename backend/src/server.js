const express = require("express");
var cors = require('cors')

const messageController = require("./controllers/message.controllers");
const userController = require("./controllers/UserController");
const courierController = require("./controllers/courierControler")
const connect = require("./configs/db");

const app = express();

app.use(express.json());
app.use(cors())

app.use("/message",messageController);
app.use("/user",userController);
app.use("/home",courierController)

app.listen(2334,async()=>{
    await connect()
    console.log("Listening to port 2334")
})