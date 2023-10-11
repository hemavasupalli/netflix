import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [ IsSignedIn, setIsSignedIn] = useState(true)
    const toggleSignIn=()=>{
            setIsSignedIn(!IsSignedIn)
            
    }
  return (
    <div>
       
        <div className='absolute'>
        <Header/>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/f9a24fdc-ab8b-4e19-b0f5-4923356a72de/CA-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="background"/> 
        </div>
         
   <div>
   <form className=' w-3/12 bg-opacity-80 absolute p-12 bg-black text-white my-36 mx-auto right-0 left-0 rounded-md' >
    <p className='text-3xl py-3  cursor-pointer'>{IsSignedIn?"Sign In" :"Sign Up"}</p>
    {!IsSignedIn &&     <input className='py-4 my-4 p-6 bg-gray-800 w-full rounded-md te' type="text" placeholder="Full Name"/>
}
    <input className='py-4 my-4 bg-gray-800 w-full rounded-md  p-6  ' type="text" placeholder="Email Address"/>
    <input className='py-4 my-4 bg-gray-800 w-full p-6' type="password" placeholder="Password"/>
    <button className='py-4 my-4 bg-red-700 w-full'>
    {IsSignedIn?"Sign In" :"Sign Up"}
    </button>
<p onClick={toggleSignIn}  className=' cursor-pointer'>{IsSignedIn?"New to Netflix? Sign Up Now":"Already Registered? Sign In" }</p>


</form>
   </div>
    </div>
 
  )
}

export default Login
