import React from "react";
import { cn } from "../utils/cn";

const Badge = ({
  color = "bg-white",
  children,
  className,
  border = "border-gray-300",
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center px-3 py-0.5 border  rounded-full h-fit",
        color,
        border
      )}
    >
      <p className={cn("text-xs font-semibold", className)}>{children}</p>
    </div>
  );
};

export default Badge;
