const express = require("express");

const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1300347",
  key: "c42713675bf25f63fe75",
  secret: "9c36956e83563785c3e7",
  cluster: "ap2",
  useTLS: true
});

const router = express.Router();

router.post("/",async(req,res)=>{
    try{
        const mess = await pusher.trigger("message", "send", {
            username : req.body.username,
            message: req.body.message
        });
        res.send({"message": mess})
    }
    catch(err){
        res.status(400).send(err.message)
    }
})

module.exports = router