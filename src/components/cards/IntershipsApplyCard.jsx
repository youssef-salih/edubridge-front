import React from "react";
import Badge from "../Badge";
import MiniTitle from "./MiniTitle";
import Button from "../Button";

const IntershipsApplyCard = () => {
  return (
    <div className="w-full p-3 border border-gray-300 rounded-xl min-h-24">
      <div className="flex justify-between">
        <div>
          <h1 className="text-sm font-bold leading-5 font-inter text-title">
            Software Engineering Intern
          </h1>
          <p className="text-xs leading-6 text-gray-500 font-inter">
            Tech Solutions Inc.
          </p>
        </div>

        <Badge>3 mounths</Badge>
      </div>
      {/* description */}
      <div className="space-y-2">
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          cupiditate hic ratione.
        </p>

        <div className="flex gap-2">
          {[...Array(3)].map((a) => (
            <Badge
              border="border-none"
              className="text-white"
              color="bg-green-400"
            >
              React
            </Badge>
          ))}
        </div>
      </div>
      {/* button */}
      <Button classes={" capitalize mt-2"}>apply Now</Button>
    </div>
  );
};

export default IntershipsApplyCard;
