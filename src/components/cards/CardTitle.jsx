import React from "react";
import { cn } from "../../utils/cn";

const CardTitle = ({ bigTitle, title, className }) => {
  return (
    <div className={cn(className)}>
      <h1 className="text-sm font-bold leading-5 font-inter text-title">
        {bigTitle}
      </h1>
      <p className="text-xs leading-6 text-gray-500 font-inter">{title}</p>
    </div>
  );
};

export default CardTitle;
