import React, { useEffect } from 'react'
import Login from './Login'
import Header from './Header'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { auth } from '../utils/Firebase'

const Body = () => {
  const dispatch = useDispatch();
     const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path: '/browse',
            element: <Browse />
        }
     ])
    
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const {uid,email} = user;
        dispatch(addUser({uid:uid ,email:email}));
        // ...
      } else {
        // User is sign
        dispatch(removeUser())
        
        // ...
      }
    });
  },[])
  return (
    <>
    <RouterProvider router ={appRouter}/>
  
  
    
    </>
   
  )
}

export default Body