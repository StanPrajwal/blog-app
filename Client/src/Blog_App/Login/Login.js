
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import Axios from "axios"
import "./Register.css"


function Login(){
    const [error,setError] = useState("")
    const [flag,setFlag] = useState(false)
    const navigate = useNavigate()

    const registerSchema = yup.object().shape({
        Password:yup.string().required(),
        Email:yup.string().required().email()

    })
   const {register,formState:{errors},handleSubmit} = useForm({
    resolver:yupResolver(registerSchema)
   })
   const onSubmit = (data)=>{
        
  
        console.log(data)

        setFlag(!flag)
        Axios.post("http://localhost:4000/api/user/login",{data})
            .then(()=>{
                navigate('/home')
                console.log("next")
                setFlag(!flag)
               
            })
            .catch((err)=>{
                console.log(err)
                setError(err.response.data.error)
            })
        // setPasswordError(false)
    
    
        // setPasswordError(true)
        // console.log(passwordError)
  
    }
   
    return (
        <div className="form-container">
            <h1>Log In</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                {error?<p className="error">{error}</p>:""}  
                <div className="box">
                    <label>Email</label>
                    <input
                        
                       {...register("Email")} 
                       
                    />
                    <p className="error">{errors.Email?.message}</p>
                    
                </div>
                <div className="box">
                    <label>Password</label>
                    <input 
                        type="password"
                        {...register("Password")} 
                    />
                    <p className="error">{errors.Password?.message}</p>  
                </div>
                
                <button>Sign In</button>
                <span className="forget-password">Forget Password?</span>

                <p className="singup-page">Need an account? 
                    <span 
                    className="singUp"
                    onClick={()=>navigate('/register')}
                    >SIGN UP</span>
                </p>
                    
            </form>
        </div>
        
    );
}
export default Login