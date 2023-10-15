import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/Firebase';
import {  useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((store) =>store.user)
  const navigate= useNavigate();
  const handleSignout=()=>{
    signOut(auth).then(() => {
     navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
    
  }
  return (
    <div className='absolute flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black'>
    <img className='w-48 '
    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
  {user&& <div className='flex p-5 text-white'>
   <img className='h-10 w-13' alt="icon "
    src={user.photoURL}/>
    <button onClick={handleSignout} className='font-bold text-justify'>(sign out)</button>
   </div>}

</div>

   
  )
}

export default Header