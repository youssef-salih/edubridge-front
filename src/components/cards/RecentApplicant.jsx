import Badge from "../Badge";
import Button from "../Button";

const RecentApplicant = () => {
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

      <p className="text-xs text-gray-400">Applied: 2024-01-15</p>
    </div>
  );
};

export default RecentApplicant;
