import "./Home.css"
import Navbar from "./Navbar"
import Axios from "axios"
import { useEffect, useState } from "react"
function Home(){
    const [blogs,getBlogs] = useState()
    useEffect(()=>{
        Axios.get('http://localhost:4000/api/blogs/fetch')
            .then((res)=>{
                console.log(res)
                getBlogs(res.data.blogs)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])
    return <>
        <Navbar/>
        <div className="blogs-container">
          {blogs && blogs.map((blog)=><div className="blog" key={blog._id}>
                <h3>{blog.title}</h3>
                <p><span>{blog.author} </span>/<span>{blog.date}</span></p>
                <p>{blog.description}
                    <img src={blog.imageUrl} alt="nature"/>
                </p>
            </div>)}  
            
        </div>
    </>
}
export default Home