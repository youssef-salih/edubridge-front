import React from "react";
import Badge from "../Badge";
import MiniTitle from "./MiniTitle";
import Button from "../Button";
import CardTitle from "./CardTitle";

const IntershipsApplyCard = () => {
  return (
    <div className="w-full p-3 border border-gray rounded-xl min-h-24  relative z-10">
      <div className="flex justify-between">
        <CardTitle
          bigTitle={"Software Engineering Intern"}
          title={"Tech Solutions Inc."}
        />

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
      <Button className={" capitalize mt-2"}>apply Now</Button>
    </div>
  );
};

export default IntershipsApplyCard;
