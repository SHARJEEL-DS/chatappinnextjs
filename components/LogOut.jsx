import React from "react";
import { auth } from "../firebase";

const LogOut = () => {
  const signOut = () => {
    signOut(auth);
  };

  return (
    <button
      onClick={() => auth.signOut()}
      className="bg-gray-300 px-4 py-2 hover:bg-gray-100"
    >
      Log Out
    </button>
  );
};

export default LogOut;
