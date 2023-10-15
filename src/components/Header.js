import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/Firebase';
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { netflixlogo } from '../utils/constant';

const Header = () => {
 
  const user = useSelector((store) =>store.user)
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const handleSignout=()=>{
    signOut(auth).then(() => {  
    }).catch((error) => {
    });
    
  }
  useEffect(()=>{
   const unsubscribe=  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const {uid,email , displayName , photoURL} = user;
        dispatch(addUser({uid:uid ,email:email, displayName:displayName,photoURL:photoURL}));
        navigate("/browse")
        // ...
      } else {
        // User is sign
        dispatch(removeUser())
        navigate("/")
        
        // ...
      }
     
    });
    return ()=>unsubscribe();
  },[])
  return (
    <div className='absolute flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black'>
    <img className='w-48 '
    src={netflixlogo}
    alt="logo" />
  {user&& <div className='flex p-5 text-white'>
   <img className='h-10 w-13' alt="icon "
    src={user.photoURL}/>
    <button onClick={handleSignout} className='font-bold text-justify'>(sign out)</button>
   </div>}

</div>

   
  )
}

export default Header