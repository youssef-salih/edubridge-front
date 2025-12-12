import React from "react";
import { cn } from "../utils/cn";

const Button = ({ children, classes }) => {
  return (
    <button
      className={cn(
        `bg-primary text-sm w-full capitalize rounded-xl py-1.5 text-white cursor-pointer hover:bg-primary-dark transition-all duration-500`,
        classes
      )}
    >
      {children}
    </button>
  );
};

export default Button;
