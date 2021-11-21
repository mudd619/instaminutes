
const express = require("express");
const User = require("../models/userModel");

const router = express.Router();

router.post("/signup",async(req,res)=>{
    try{
        // console.log("heyy")
        const exist = await User.findOne({email : req.body.email}).lean().exec();
        if(exist){
            return res.status(401).send("User already exist")
        }
        const user = await User.create(req.body);

        //sconsole.log(user)
        res.send(user)
    }
    catch(err){
        res.status(200).send(err.message)
    }
})

router.get("/signup",async(req,res)=>{
    try{
        
        const user = await User.find().lean().exec()
        res.send(user);
    }
    catch(err){
        console.log(err.message)
    }
})

router.delete("/signup/:id",async(req,res)=>{
    try{
        const users = await User.findByIdAndDelete(req.params.id);
        res.send(users);
    }
    catch(err){
        console.log(err.message)
    }
})

router.post("/signin",async(req,res)=>{
    try{
        // console.log("aaa")
        const exist = await User.findOne({email : req.body.email}).lean().exec();
        // console.log(exist)
        if(!exist){
            return res.status(401).send("User does not exist")
        }
        return res.send(exist);
    }
    catch(err){
        res.status(400).send(err.message)
    }
})

module.exports = router