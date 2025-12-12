import React from "react";
import Cards from "./Cards";
import { PersonStanding } from "lucide-react";

const CardAnalitycs = () => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <Cards
        color="#9b91c7"
        icon={PersonStanding}
        title="Active Applications"
        valeur="3"
      />{" "}
      <Cards
        color="#9b91c7"
        icon={PersonStanding}
        title="Available Internships"
        valeur="4"
      />
      <Cards
        color="#4f46e5"
        icon={PersonStanding}
        title="Accepted"
        valeur="1"
      />
      <Cards color="#4f46e5" icon={PersonStanding} title="Pending" valeur="2" />
    </div>
  );
};

export default CardAnalitycs;
