import React from "react";
import Signin from "./Signin";
import LogOut from "./LogOut";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className="bg-gray-800 h-20 flex justify-between items-center p-4">
      <h1 className="text-white text-3xl">Chat App</h1>
      {/* if logged show logOut, else Signin */}
      {user ? <LogOut /> : <Signin />}
    </div>
  );
};

export default Navbar;
