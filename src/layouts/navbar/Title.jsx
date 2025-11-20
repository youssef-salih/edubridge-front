import React from "react";

function Title({ title, children = "", className = "" }) {
  if (!title) {
    throw new Error("Le prop 'title' est obligatoire");
  }


  return (
    <div className={`space-y-2 ${className}`}>
      <h1 className="font-inter font-bold text-title text-4xl">{title}</h1>

      {children && (
        <p className="font-inter text-[var(--text-title-lg)] leading-[var(--leading-title-lg)] text-title">
          {children}
        </p>
      )}
    </div>
  );
}

export default Title;
