import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import{Link} from 'react-router-dom'

const LoginForm = ()=> {
 
    const [formData,setFormData] = useState({
        email:"", password:""
    })

    const[showPassword, setShowPassword] = useState(false);
    function changeHandler(event) {

        setFormData( ( prevData)=>(
            {
         ...prevData,
          [event.target.name]:event.target.value
        }  
        ))
    }
  return (
    <form>
        <label>
            <p>
                Email Address <sup>*</sup>
            </p>
            <input
            required
            type={showPassword? ("text"):("password")}
            value ={formData.emaiil}
            onChange={changeHandler}
            placeholder="Enter email password"
            />
            </label>

            <label>
            <p>
                Password <sup>*</sup>
            </p>
            <input
            required
            type="text"
            value ={formData.emaiil}
            onChange={changeHandler}
            placeholder="Enter email id"
            name="email"
            />

            <span onClick={() => setShowPassword ((prev)=> !prev)}>
              {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)};  
            </span>
            </label>
    </form>
  )
}

export default LoginForm