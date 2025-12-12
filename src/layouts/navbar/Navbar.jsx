import React, { useEffect, useState } from "react";
import { Lightbulb, LightbulbOff, Menu, X } from "lucide-react";
import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_ICON } from "../sideBar/SideBar";
import { menu } from "../navLinks";
import MobileItem from "../../components/MobileItem";
import { useLocation } from "react-router";

const Navbar = ({ theme, toggleTheme, collapsed, isMobile }) => {
  const [open, setOpen] = useState(false);
  const [openParents, setOpenParents] = useState({});
  const location = useLocation();

  useEffect(() => {
    const newOpen = {};
    menu.forEach((item) => {
      if (item.children) {
        const childActive = item.children.some(
          (child) => child.to === location.pathname
        );
        if (childActive) newOpen[item.name] = true;
      }
    });
    setOpenParents(newOpen);
  }, [location.pathname]);
  return (
    <header
      className="fixed top-0 right-0 z-20 flex items-center w-full h-16 px-5 transition-all duration-300 bg-white shadow-lg dark:bg-primary"
      style={{
        width: isMobile
          ? "100%"
          : collapsed
          ? `calc(100% - ${SIDEBAR_WIDTH_ICON})`
          : `calc(100% - ${SIDEBAR_WIDTH})`,
      }}
    >
      <div className="flex items-center justify-end w-full">
        <div className="flex items-center gap-4 ">
          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 ease-in-out rounded-full border-primary dark:border-black dark:bg-white whitespace-nowrap size-8 hover:scale-110 active:scale-95"
          >
            {theme === "light" ? (
              <Lightbulb size={18} />
            ) : (
              <LightbulbOff size={18} />
            )}
          </button>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-400 transition-all duration-300 ease-in-out md:hidden dark:text-white"
          >
            {open ? (
              <X
                size={28}
                className="transition-transform duration-300 rotate-90"
              />
            ) : (
              <Menu
                size={28}
                className="transition-transform duration-300 rotate-0"
              />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <ul
        className={`md:hidden absolute left-0 top-16 w-full bg-white shadow-lg overflow-hidden
                    transition-all duration-300 ease-in-out
                    ${open ? "max-h-fit opacity-100" : "max-h-0 opacity-0"} 
                  `}
      >
        <div className="flex flex-col p-4 space-y-0 font-semibold text-gray-700">
          {menu.map((item, i) => {
            const hasChildren = item.children && item.children.length > 0;

            return (
              <MobileItem
                key={i}
                item={item}
                hasChildren={hasChildren}
                parentOpen={openParents[item.name]}
                activePath={location.pathname}
                setIsOpen={setOpen}
              />
            );
          })}
        </div>
      </ul>
    </header>
  );
};

export default Navbar;
