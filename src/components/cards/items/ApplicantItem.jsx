import React from "react";
import Badge from "../../Badge";
import Button from "../../Button";
import { CheckCheck, OctagonX } from "lucide-react";

const ApplicantItem = () => {
  return (
    <div className="border border-gray p-3 rounded-xl">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-sm font-bold leading-5 font-inter text-title">
              flan fertelan
            </h1>
            <Badge>applied</Badge>{" "}
          </div>
          <p className="text-xs leading-6 text-gray-500 font-inter">
            mail@gmail.com
          </p>

          <p className="text-xs leading-6  font-inter">Field</p>
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
          <div className="flex items-center gap-5 mt-3">
            <Button className={"px-3 flex items-center gap-2"}>
              <CheckCheck size={15} /> Aprove
            </Button>
            <Button
              variant="secondary"
              className={"px-3 flex items-center gap-2"}
            >
              <OctagonX size={15} />
              Decline
            </Button>
            <Button variant="secondary" className={"px-3"}>
              View Profile
            </Button>
          </div>
        </div>

        <Badge color="bg-red-100 border-none" className={"text-red-500"}>
          3 mounths
        </Badge>
      </div>
    </div>
  );
};

export default ApplicantItem;
