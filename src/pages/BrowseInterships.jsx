import React from "react";
import Wrapper from "../layouts/Wrapper";
import Title from "../components/Title";

import SearchFilter from "../components/SearchFilter";
import IntershipCard from "../components/cards/IntershipCard";
import { Building2 } from "lucide-react";

const BrowseInterships = () => {
  return (
    <Wrapper>
      <Title
        title={"Browse Internships"}
        children="Find the perfect opportunity for your career growth"
      />
      <SearchFilter />

      <div className="grid grid-cols-12 gap-5">
        {[...Array(4)].map((arr) => (
          <IntershipCard Icon={Building2} />
        ))}
      </div>
    </Wrapper>
  );
};

export default BrowseInterships;
