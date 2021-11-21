
const mongoose = require("mongoose");

const courierModel = new mongoose.Schema({
    departurePlace : {type : String , required : true},
    arrivalPlace : {type : String , required : true},
    departureDate : {type : String , required : true},
    arrivalDate : {type : String , required : true},
    departureTime : {type : String , required : true},
    arrivalTime : {type : String , required : true},
    userName : {type : String , required : true},
    contactNo : {type : String , required : true},
    vechileNo : {type : String , required : true},
    vechileName : {type : String , required : true},
    Company : {type : String , required : true},
    charges : {type : String , required : true}
},{
    versionKey:false,
    timestamps:true
})

const Courier = mongoose.model("courier",courierModel);

module.exports = Courier