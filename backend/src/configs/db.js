const mongoose = require("mongoose")

const connect = ()=>{
    return mongoose.connect("mongodb+srv://hackathon:apbrbkmm@cluster0.baqbk.mongodb.net/hackathon?retryWrites=true&w=majority")
}

module.exports = connect