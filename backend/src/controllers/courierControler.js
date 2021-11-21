

const express = require("express");
const Courier = require("../models/courierModel");
const User = require("../models/userModel");

const router = express.Router();

router.post("/filter",async(req,res)=>{
    try{
        // console.log(req.body)
        const sorted = await Courier.find({departurePlace : req.body.from , arrivalPlace : req.body.to}).lean().exec();

        res.send(sorted)
    }
    catch(err){
        res.status(400).send(err.message)
    }
})

router.post("/:id",async(req,res)=>{
    try{
        //console.log("a")
        //console.log(res.body)
    
        const courier = await Courier.create(req.body);
        //console.log("b")
        const user = await User.findById(req.params.id).lean().exec();
        //console.log("a")
        user.courier.push(courier._id.toString());
        //console.log("c")
        const updateUser = await User.findByIdAndUpdate(req.params.id,user).lean().exec();
        //console.log("b")
        res.send({"addedCourier and updatedUser":user})
    }
    catch(err){
        console.log(err.message)
        res.status(400).send(err.message)
    }
})

router.get("/",async(req,res)=>{
    try{
        const couriers = await Courier.find().lean().exec();
        res.send(couriers)
    }
    catch(err){
        res.status.send(err.message)
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const couriers = await Courier.findById(req.params.id).lean().exec();
        res.send(couriers)
    }
    catch(err){
        res.status.send(err.message)
    }
})

router.get("/profile/:id",async(req,res)=>{
    try{
        const couriers = await User.findById(req.params.id).populate("courier").lean().exec();
        res.send(couriers)
    }
    catch(err){
        res.status(400).send(err.message)
    }
})

router.delete("/:Cid/:Uid",async(req,res)=>{
    try{
        const couriers = await Courier.findByIdAndDelete(req.params.Cid);
        const user = await User.findById(req.params.Uid).lean().exec();
        
        const upd = user.courier.filter((el)=>{
            return el.toString() !== req.params.Cid.toString()
        })
       
        user.courier = upd;
        const update = await User.findByIdAndUpdate(req.params.Uid,user);
        
        res.send("upadted")
    }
    catch(err){
        res.status(200).send(err.message)
    }
})

module.exports = router