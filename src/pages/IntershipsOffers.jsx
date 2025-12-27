import React from "react";
import Title from "../components/Title";
import AllInterShips from "../components/AllInterShips";
import { Plus } from "lucide-react";

const IntershipsOffers = () => {
  return (
    <div>
      <Title
        title={"Internship Offers"}
        children="Manage all your internship postings"
        button={"Add Offer"}
        icon={<Plus size={15} />}
        to="#"
      />
      <AllInterShips />
    </div>
  );
};

export default IntershipsOffers;
