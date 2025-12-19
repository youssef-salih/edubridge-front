import React from "react";
import { cn } from "../../utils/cn";
import CardTitle from "./CardTitle";
import Badge from "../Badge";
import Button from "../Button";

const IntershipCard = ({ Icon, color = "text-primary" }) => {
  return (
    <div className="col-span-12 p-5 bg-white border md:col-span-6 border-gray rounded-xl">
      <div className="flex gap-2">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl">
          <Icon size="20" className={cn(color, "")} />
        </div>
        <div className="flex-1">
          <CardTitle
            bigTitle={"Software Engineering Intern"}
            title={"Tech Solutions Inc."}
          />
          <div className="flex items-center gap-2 mt-2">
            <Badge>3 mounths</Badge>
            <span className="text-xs text-gray-400"> 24 applicant</span>
          </div>
          <div className="mt-2">
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
          </div>
          <div className="mt-2">
            <Button>apply now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntershipCard;
