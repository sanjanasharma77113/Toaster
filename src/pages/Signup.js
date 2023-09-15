import React from 'react'
import Template from '../components/Template'
import SignupImg from "../assets/signup.png"


const Signup=({setIsLoggedIn})=> {
  return (
   <Template
   title="Welcome Back"
   desc1="Build skills for today,tomorrow, and beyond."
   desc2="Education to future-proof your carrer."
   image={SignupImg}
   formType="signup"
   setIsLoggedIn={setIsLoggedIn}
   />
  )
}

export default Signup