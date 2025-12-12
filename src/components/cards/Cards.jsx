import React from "react";
import { cn } from "../../utils/cn";

const Cards = ({ title, valeur, color, icon: Icon }) => {
  return (
    <div className="col-span-12 dark:bg-primary-dark md:col-span-6 lg:col-span-3 flex-1 bg-white shadow rounded-xl p-5 flex items-center justify-between md:max-w-xs">
      {/* Texte */}
      <div>
        <h3 className="text-sm text-gray-500 dark:text-white">{title}</h3>
        <p className="text-2xl dark:text-white font-semibold">{valeur}</p>
      </div>

      {/* Icône */}
      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-100">
        <Icon className={cn(`text-[${color}]`)} color={color} />
      </div>
    </div>
  );
};

export default Cards;
