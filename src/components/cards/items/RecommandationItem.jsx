import React from "react";
import Badge from "../../Badge";
import Button from "../../Button";
import { Building2, Calendar, User } from "lucide-react";

const RecommandationItem = () => {
  return (
    <div className="border border-gray p-3 rounded-xl">
      <div className="flex justify-between">
        <div className="[&>p]:text-sm  [&>p]:leading-6 [&>p]:text-gray-500 [&>p]:font-inter [&>p]:capitalize [&>p]:flex [&>p]:items-center [&>p]:text-center [&>p]:gap-1">
          <h1 className="text-sm font-bold leading-5 font-inter text-title">
            Software Engineering Intern
          </h1>
          <p>
            <User size={15} /> user Name
          </p>
          <p>
            <Building2 size={15} /> Field
          </p>
          <p>
            <Calendar size={15} /> 2024-01-20
          </p>
        </div>

        <Badge>Pending</Badge>
      </div>
    </div>
  );
};

export default RecommandationItem;
