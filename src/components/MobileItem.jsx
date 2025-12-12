import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router";

const MobileItem = ({
  item,
  hasChildren,
  parentOpen,
  activePath,
  setIsOpen,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (parentOpen) setOpen(true);
  }, [parentOpen]);

  const isActiveParent =
    hasChildren && item.children.some((child) => child.to === activePath);

  return (
    <div className="w-full">
      {/* Parent Button */}
      <button
        onClick={() => hasChildren && setOpen((p) => !p)}
        className={`w-full flex justify-between items-center py-3 px-3 rounded-md 
                    transition 
                    ${
                      isActiveParent
                        ? "bg-primary/70 text-white"
                        : " text-primary"
                    }`}
      >
        <div className="flex items-center gap-3">
          {item.icon}
          <span>{item.name}</span>
        </div>

        {hasChildren && (
          <ChevronDown
            size={18}
            className={`transition-transform ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
      </button>

      {/* Children */}
      {hasChildren && (
        <div
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: open ? item.children.length * 50 + "px" : "0px" }}
        >
          {item.children.map((child, i) => {
            const isActive = child.to === activePath;
            return (
              <NavLink
                key={i}
                to={child.to}
                onClick={() => setIsOpen(false)}
                className={`pl-8 my-1 flex items-center gap-3 py-2 px-3 rounded-md
                            transition text-sm
                            ${
                              isActive
                                ? "bg-primary text-white"
                                : "text-primary bg-primary/30 "
                            }`}
              >
                {child.icon}
                {child.name}
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileItem;
