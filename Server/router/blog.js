const routes = require("express").Router()

const Blog = require("../model/blog")

routes.post("/create",async(req,res)=>{
    try {
        const {title,description,imageUrl,author} = req.body.blog
        
        console.log(req.body.date,"yes")
        const blog = await Blog.create({
            title,
            description,
            imageUrl,
            author,
            date:req.body.date
        })
       
        res.json({
            message:"Blog created"
        })
    } catch (error) {
        console.log(error)
    }
})

routes.get("/fetch",async(req,res)=>{
    try {
        const blogs = await Blog.find()
        res.json({
            blogs
        })
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
})

module.exports = routes