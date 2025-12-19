import React from "react";

const MiniTitle = ({ bigTitle, title }) => {
  return (
    <>
      <h1 className="text-lg font-bold leading-5 font-inter text-title">
        {bigTitle}
      </h1>
      {title && (
        <p className="text-sm leading-6 text-gray-500 font-inter">{title}</p>
      )}
    </>
  );
};

export default MiniTitle;
