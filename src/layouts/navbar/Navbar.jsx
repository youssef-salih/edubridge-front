import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "./index.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-amber-800 h-16 px-5 relative">
      <div className="flex items-center justify-between h-full">
        {/* Logo */}
        <img src="/logo.png" alt="logo" className="w-44" />

        {/* Hamburger (mobile) */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <ul className="md:hidden absolute left-0 top-16 w-full bg-white shadow-lg flex flex-col p-4 space-y-4 text-gray-700 font-semibold">
          <li className="hover:text-primary cursor-pointer">Home</li>
          <li className="hover:text-primary cursor-pointer">About</li>
          <li className="hover:text-primary cursor-pointer">Contact</li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
