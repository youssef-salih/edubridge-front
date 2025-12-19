import React from "react";
import Button from "./Button";

function Title({
  title,
  children = "",
  button,
  to = "/",
  className = "",
  classNameButton = "",
  icon,
}) {
  if (!title) {
    throw new Error("Le prop 'title' est obligatoire");
  }

  return (
    <div className="flex items-center justify-between">
      <div className={`space-y-2 my-3 ${className}`}>
        <h1 className="text-3xl font-bold leading-5 font-inter text-title">
          {title}
        </h1>

        {children && (
          <p className="text-xs leading-6 text-gray-500 font-inter">
            {children}
          </p>
        )}
      </div>

      {button && to && (
        <Button className={`w-fit! flex items-center gap-2 ${classNameButton}`}>
          {icon} {button}
        </Button>
      )}
    </div>
  );
}

export default Title;
