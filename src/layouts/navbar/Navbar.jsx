import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "./index.css";
import links from "../links";

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
          hello
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <ul className="md:hidden absolute left-0 top-16 w-full bg-white shadow-lg flex flex-col p-4 space-y-4 text-gray-700 font-semibold">
          {links.map((link) => (
            <li className="hover:text-primary cursor-pointer">{link.title}</li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
