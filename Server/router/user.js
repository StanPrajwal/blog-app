const routes = require("express").Router()
const User = require("../model/user")
const bcrypt = require("bcrypt")
routes.post("/register",async(req,res)=>{
    
    try {
        const {Email,Password} = req.body.data
        // const user = await User.findOne({Email})
        // if(!user){
            
                const hash = await bcrypt.hash(Password,6)
                console.log(hash)
                const user = await User.create({
                    Email,
                    Password:hash
                })
               res.json({
                    message:"Registered Successfully"
               })
    
        
        
    } catch (error) {
        console.log(error.code)
        if(error.code === 11000){
            console.log("error")
           return res.status(401).json({
                error:"User alredy existed!"
            })
        }
        
    }
})
routes.post("/login",async(req,res)=>{
    
    try {
        console.log(req.body)
        const {Email,Password} = req.body.data
        const user = await User.findOne({Email})
        if(user){
            console.log("yes")
            bcrypt.compare(Password,user.Password).then((result)=>{
                if(result){
                    return res.json({
                        sucess:"login"
                    })
                }else{
                    return res.status(403).json({
                        error:"Invalid Credential"
                    })
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    } catch (error) {
        
    }
                
})


module.exports = routes