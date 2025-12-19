import React from "react";
import Title from "../components/Title";
import RecentApplicant from "../components/cards/RecentApplicant";

const MyApplications = () => {
  return (
    <div>
      <Title
        title={"My Applications"}
        children="Track all your internship applications in one place"
      />
      <div className="grid grid-cols-12 gap-5">
        {[...Array(4)].map((arr) => (
          <RecentApplicant />
        ))}
      </div>
    </div>
  );
};

export default MyApplications;
