import React from "react";
import "./index.css";
const Navbar = () => {
  return (
    <header className="bg-black h-16 px-5 ">
      <div className="flex items-center justify-between h-full">
        <img src="/logo.png" alt="logo" className="w-44 " />

        <div className="w-36 h-12 bg-amber-300" />
      </div>
    </header>
  );
};

export default Navbar;
