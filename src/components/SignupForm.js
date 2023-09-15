import React, { useState } from 'react';

import Signup from '../pages/Signup';
import ShowPassword from 'showpassword';
import prevData from 'prevData';
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/a1";



const SignupForm =()=> {

    const [formData, setFormData] = useState({
        firstName:"",
        lastname:"",
        email:"",
        password:"", 
        confirmPassword:"",
    })

    const [showPassword, setShowPassword ]= useState(false);
    function changeHandler(event) {

        setFormData( ( prevData)=(
            {
          ...prevData
          [event.target.name] .event.target.value
        }  
        ))
    }



  return (
    <div>
        {/*student-Instructor tab */}
    <div>
        <button>
            student
        </button>
        <button>
            Instructor

           
        </button>
    </div>

    <form>
        {/*First name and lastname */}
       <div>
            <label>
                <p>First Name <sup>*</sup></p>
                <input 
                required 
                type="text"
                name="firstname"
                onChange={changeHandler}
                placeholder="Enter first"
                value={formData.firstName}
                />
            </label>

            <label>
                <p>Last Name <sup>*</sup></p>
                <input 
                required 
                type="text"
                name="lastname"
                onChange={changeHandler}
                placeholder="Enter first"
                value={formData.lastName}
                />
            </label>
            </div>
{/* Email Add*/}
            <label>
                <p>Email Address<sup>*</sup></p>
                <input 
                required 
                type="email"
                name="email"
                onChange={changeHandler}
                placeholder="Enter email address name"
                value={formData.firstName}
                />
            </label>

            {/*craetePassword and Confire Pssword */}
            <div>

            <label>
                <p>Create Password <sup>*</sup></p>
                <input 
                required 
                type={ShowPassword ?("text") : ("password") }
                name="password"
                onChange={changeHandler}
                placeholder="Enter create password"
                value={formData.password}
                />
                <span onClick={() => setShowPassword((prev)=> !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                </span>
            </label>
            <label>
                <p>Confirm Pssword <sup>*</sup></p>
                <input 
                required 
                type="text"
                name="confirmPassword"
                onChange={changeHandler}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                />

<span onClick={() => setShowPassword((prev)=> !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                </span>
            </label>

            </div>

            <button>
                Create Account
            </button>


    </form>
    </div>
  )
}

export default SignupForm