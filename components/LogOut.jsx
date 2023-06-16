import React from "react";
import { auth } from "../firebase";
import {useRouter}  from 'next/router'

const LogOut = () => {
  
  const router = useRouter();
  const signOut = () => {
    signOut(auth);
  };

  const logout = () => {
    sessionStorage.removeItem('username');
    router.push('/auth/login')
  }
  return (
    <button
        className='bg-blue-400 text-white py-2 px-7 rounded-md'
        onClick={ logout }
      >Signout</button>
  );
};

export default LogOut;
