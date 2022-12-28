import Axios  from "axios"
import { useState } from "react"
import "./Create.css"
import Navbar from "./Navbar"
function CreateBlog(){
   
    const [blog,setBlog] = useState({
        title:"",
        description:"",
        imageUrl:"",
        author:""
    })
    const blogHandler = (e) =>{
        const {name,value} = e.target
        setBlog(blog=>{
            return {...blog,[name]:value}
        })
        console.log(blog)
    }
    const submitData = ()=>{
        console.log(blog)
        console.log(new Date().toDateString())
        const date = new Date().toDateString()
        Axios.post("http://localhost:4000/api/blogs/create",{blog,date})
            .then((res)=>{
                console.log(res.data.message)
                alert(res.data.message)

            })
            .catch((err)=>{
                console.log(err)
            })
    }
    return <>
    <Navbar/>
    <div className="blog-container">
        
        <div className="create-blog">
            <div className="title">
                <input
                    value={blog.title}
                    name="title"
                    type="text"
                    placeholder="Blog title"
                    onChange={(e)=>blogHandler(e)}
                />
            </div>
            
            <div className="image">
                <input
                    value={blog.imageUrl}
                    name="imageUrl"
                    type="file"
                    placeholder="Pick Image"
                    onChange={(e)=>blogHandler(e)}
                />
            </div>
            <div className="decription">
                <textarea
                    value={blog.description}
                    name="description"
                    placeholder="write acontent here.... "
                    onChange={(e)=>blogHandler(e)}
                ></textarea>
            </div>
            
            <div className="author">
                <input
                    value={blog.author}
                    name="author"
                    onChange={(e)=>blogHandler(e)}
                    placeholder="author"
                />
            </div>
            <button className="save-post" onClick={submitData}>Save Post</button>
        </div>
    </div>
    </>
}
export default CreateBlog