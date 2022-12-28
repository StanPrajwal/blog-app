import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import Axios from "axios"
import { useState } from "react";
import "./Register.css"
import { useNavigate } from "react-router-dom";

function Register(){
    const [passwordError,setPasswordError] = useState()
    const [flag,setFlag] = useState(false)
    const [error,setError] = useState('')
    const navigate = useNavigate()

    const registerSchema = yup.object().shape({
        Password:yup.string().required().min(6).max(10),
        ConfirmPassword:yup.string().required().min(6).max(10),
        Email:yup.string().required().email()

    })
   const {register,formState:{errors},handleSubmit} = useForm({
    resolver:yupResolver(registerSchema)
   })
   const onSubmit = (data)=>{
    if(data.Password === data.ConfirmPassword){
        console.log(data)
        console.log(errors)
        
        setPasswordError(false)
        Axios.post("http://localhost:4000/api/user/register",{data})
            .then((res)=>{
                console.log(res)
                setFlag(!flag)
            })
            .catch((err)=>{
                console.log(err.response.data.error)
                setError(err.response.data.error)
            })
    }
    else{
        setPasswordError(true)
    }
    
   }
   
    return (
        <div className="form-container">
            <h1>Sing In</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                {flag?<span id="register-message">Thank you for registration!</span>:""} 
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
                <div className="box">
    
                    <label>Confirm Password
                       
                    </label>
                    <input 
                        type="password"   
                        {...register("ConfirmPassword")} 
                    />
                    
                    <p className="error">{errors.ConfirmPassword?.message}</p> 
                    <p className="error">{passwordError?"Password doesnot match":""}</p>
                </div>
                <button>Sign In</button>

                <p onClick={()=>navigate('/')}>Go Login page</p>
                    
            </form>
        </div>
        
    );

   
}


export default Register