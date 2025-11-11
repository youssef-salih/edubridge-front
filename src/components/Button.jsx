import React from "react";

const Button = ({ name, classes }) => {
  return <button className={`bg-black text-white ${classes} `}>{name}</button>;
};

export default Button;
