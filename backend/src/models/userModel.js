
const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    name : {type : String , required : true},
    contactNo : {type : String , required : true},
    company : {type : String , required : true},
    email : {type : String , required : true},
    password : {type: String , required : true},
    courier : [{type: mongoose.Schema.Types.ObjectId,ref: "courier",required: false}],
    registrationNo : {type : String , required : true}
},{
    versionKey : false,
    timestamps : true
})

const User  = mongoose.model("user",userModel);

module.exports = User