import React, { useRef, useState } from 'react'
import Header from './Header'
import { ValidData } from '../utils/Validation'
import { auth } from '../utils/Firebase'
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {

  const dispatch = useDispatch();
    const [ IsSignedIn, setIsSignedIn] = useState(true)
    const [errorMessage,seterrorMessage] = useState(null)
    const toggleSignIn=()=>{ setIsSignedIn(!IsSignedIn)       }
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const handleSubmit = () =>{
      const message = ValidData(email.current.value, password.current.value);
      seterrorMessage(message)
      if(message) return;
      if(!IsSignedIn) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              updateProfile(user, {
                displayName: name.current.value,
                 photoURL: "https://lh3.googleusercontent.com/a/ACg8ocLGK-zor-Vw7uQHY4DwFxvMaICMim88XVAK_ZRldG7tkQ=s576-c-no"
              }).then(() => {
                const {uid,email , displayName , photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid ,email:email, displayName:displayName,photoURL:photoURL}));
               
               
                // ...
              }).catch((error) => {
                seterrorMessage(error.message)
              });
             
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              seterrorMessage(errorCode+errorMessage)
              // ..
            });
      }else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+errorMessage)
  });
        
      }

    }
  return (
    <div>     
        <div className='absolute'>
       <Header/>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/f9a24fdc-ab8b-4e19-b0f5-4923356a72de/CA-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="background"/> 
        </div>
         
   <div>
   <form onSubmit={(e)=>e.preventDefault()} className='absolute left-0 right-0 w-3/12 p-12 mx-auto text-white bg-black rounded-md bg-opacity-80 my-36' >
    <p className='py-3 text-3xl cursor-pointer'>{IsSignedIn?"Sign In" :"Sign Up"}</p>
    {!IsSignedIn &&     <input ref={name}className='w-full p-6 py-4 my-4 bg-gray-800 rounded-md te' type="text" placeholder="Full Name"/>
}
    <input ref={email} className='w-full p-6 py-4 my-4 bg-gray-800 rounded-md ' type="text" placeholder="Email Address"/>
   
    <input  ref={password} className='w-full p-6 py-4 my-4 bg-gray-800' type="password" placeholder="Password"/>
   <p className='text-red-700'>{errorMessage}</p>
    <button onClick={handleSubmit} className='w-full py-4 my-4 bg-red-700'>
    {IsSignedIn?"Sign In" :"Sign Up"}
    </button>
<p onClick={toggleSignIn}  className='cursor-pointer '>{IsSignedIn?"New to Netflix? Sign Up Now":"Already Registered? Sign In" }</p>


</form>
   </div>
    </div>
 
  )
}

export default Login
