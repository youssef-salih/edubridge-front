import { Building2, Calendar, User } from "lucide-react";
import Badge from "../../Badge";

const EntreprisesItem = () => {
  return (
    <div className="border border-gray p-3 rounded-xl col-span-12 md:col-span-6 lg:col-span-4 ">
      <div className="flex justify-between">
        <div className="[&>p]:text-sm  [&>p]:leading-6 [&>p]:text-gray-500 [&>p]:font-inter [&>p]:capitalize [&>p]:flex [&>p]:items-center [&>p]:text-center [&>p]:gap-1">
          <h1 className="text-sm font-bold leading-5 font-inter text-title">
            Tech Solutions Inc.
          </h1>
          <p>
            <User size={15} /> Alice Johnson
          </p>

          <p>
            <Calendar size={15} /> 2024-01-20
          </p>
        </div>

        <Badge>3 mounths</Badge>
      </div>
    </div>
  );
};

export default EntreprisesItem;
