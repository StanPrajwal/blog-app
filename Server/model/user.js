const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    Email:{
        type:String,
        require:true,
        unique:true
    },
    Password:{
        type:String,
        require:true
    }
})

const User = mongoose.model("User",userSchema)

module.exports = User