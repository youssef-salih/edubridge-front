import React, { useState } from "react";
import { Lightbulb, LightbulbOff, Menu, X } from "lucide-react";
import "./index.css";
import links from "../links";
import { useTheme } from "../../hooks/useTheme";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="bg-white dark:bg-primary h-16 px-5 relative shadow-xl">
      <div className="flex items-center justify-between h-full">
        {theme === "light" ? (
          <img src="/logo.png" alt="logo" className="md:w-44 w-24" />
        ) : (
          <img src="/logolight.png" alt="logo" className="md:w-44 w-24" />
        )}
        <div className="flex items-center justify-between ">
          <button
            onClick={toggleTheme}
            className="border-primary dark:border-black dark:bg-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-primary shadow-md hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-8"
          >
            {theme === "light" ? <Lightbulb /> : <LightbulbOff />}
          </button>
          {/* Hamburger (mobile) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden dark:text-white text-gray-400"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
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
