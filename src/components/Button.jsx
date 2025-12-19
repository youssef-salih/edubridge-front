import React from "react";
import { cn } from "../utils/cn";

const Button = ({ children, variant = "primary", className, ...props }) => {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-light text-black hover:bg-secondary hover:text-white",
    ghost:
      "bg-transparent text-primary border border-primary hover:bg-primary/10",

    destructive: "bg-red-600 text-white hover:bg-red-700",

    green: "bg-green-600 text-white hover:bg-green-700",
  };

  return (
    <button
      className={cn(
        "text-sm w-fit capitalize rounded-lg px-3 py-1.5 cursor-pointer transition-all duration-500",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
