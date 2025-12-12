import React from "react";

function Title({ title, children = "", className = "" }) {
  if (!title) {
    throw new Error("Le prop 'title' est obligatoire");
  }

  return (
    <div className={`space-y-2 my-3 ${className}`}>
      <h1 className="font-inter font-bold text-title text-4xl leading-5">{title}</h1>

      {children && (
        <p className="font-inter text-xs leading-6 text-gray-500">
          {children}
        </p>
      )}
    </div>
  );
}

export default Title;
