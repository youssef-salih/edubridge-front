import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { NavLink, useLocation } from "react-router";
import { cn } from "../../utils/cn";
import { menu } from "../navLinks";

export const SIDEBAR_WIDTH = "13rem";
export const SIDEBAR_WIDTH_MOBILE = "0rem";
export const SIDEBAR_WIDTH_ICON = "3.5rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

const Sidebar = ({ collapsed, setCollapsed, toggleTheme, theme }) => {
  const [openMenus, setOpenMenus] = useState({});
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
    setOpenMenus(newOpen);
  }, [location.pathname]);

  const toggleMenu = (name) => {
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.key.toLowerCase() === SIDEBAR_KEYBOARD_SHORTCUT) {
        setCollapsed((prev) => !prev);
        setOpenMenus({});
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-screen text-white transition-all duration-300 bg-white border-r dark:border-white dark:bg-primary border-primary"
      style={{
        width: collapsed ? SIDEBAR_WIDTH_ICON : SIDEBAR_WIDTH,
      }}
    >
      <div className="relative flex items-center justify-center h-16 py-3">
        <img
          src={theme === "light" ? "/logo.png" : "/logolight.png"}
          alt="logo"
          className={`
      absolute transition-all duration-500 ease-in-out
      ${collapsed ? "opacity-0 scale-95" : "opacity-100 scale-100"}
      w-24 md:w-32
    `}
        />

        <img
          src="/miniLogo.png"
          alt="mini logo"
          className={`
      absolute transition-all duration-500 ease-in-out
      ${collapsed ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      w-8
    `}
        />
      </div>

      <nav className="flex flex-col gap-1 mt-4">
        {menu.map((item, i) => {
          const hasChildren = item.children?.length > 0;
          const open = openMenus[item.name];
          const isActiveParent =
            hasChildren &&
            item.children.some((child) => child.to === location.pathname);

          return (
            <div key={i}>
              <NavLink
                to={item.to || "#"}
                onClick={(e) => {
                  if (hasChildren && !item.to) {
                    e.preventDefault();
                    toggleMenu(item.name);
                  }
                }}
                className={({ isActive }) =>
                  cn(
                    "relative flex font-medium items-center justify-between w-full px-4 py-2 cursor-pointer group dark:text-white dark:hover:bg-white dark:hover:text-primary text-primary hover:bg-primary/50",

                    isActiveParent &&
                      "bg-primary/70 text-white dark:bg-secondary dark:text-white!",

                    item.to &&
                      isActive &&
                      "bg-primary! dark:bg-white! text-white dark:text-primary! "
                  )
                }
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  {item.icon}
                  {!collapsed && (
                    <span className="text-sm capitalize">{item.name}</span>
                  )}

                  {collapsed && (
                    <span className="absolute capitalize px-2 py-1 ml-2 text-sm text-white transition bg-gray-800 rounded opacity-0  left-full group-hover:opacity-100">
                      {item.name}
                    </span>
                  )}
                </div>

                {!collapsed &&
                  hasChildren &&
                  (open ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  ))}
              </NavLink>

              {hasChildren && (
                <div
                  className={`transition-all duration-300 font-medium overflow-hidden ${
                    open ? "max-h-40" : "max-h-0"
                  }`}
                >
                  {item.children.map((child, idx) => (
                    <NavLink
                      key={idx}
                      to={child.to || "/"}
                      className={({ isActive }) =>
                        `group relative flex items-center gap-3 py-2 pr-0 ${
                          !collapsed ? "pl-8" : "pl-4.5"
                        }  hover:bg-primary/40 dark:bg-primary-dark ${
                          isActive
                            ? "bg-primary text-white hover:bg-primary/80 dark:bg-white dark:text-primary dark:hover:bg-white/80"
                            : "text-primary bg-primary/30 dark:text-white dark:hover:bg-secondary"
                        } transition-all duration-200`
                      }
                    >
                      {child.icon}
                      {!collapsed && (
                        <span className="text-sm capitalize">{child.name}</span>
                      )}

                      {collapsed && (
                        <span className="absolute capitalize px-2 py-1 text-sm text-white transition-all duration-200 -translate-y-1/2 bg-gray-800 rounded opacity-0 left-full top-1/2 group-hover:opacity-100 whitespace-nowrap">
                          {child.name}
                        </span>
                      )}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
