import React, { useState } from "react";
import Title from "../components/Title";
import CardsContainer from "../components/cards/CardsContainer";
import ApplicantItem from "../components/cards/items/ApplicantItem";

const Applicant = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <Title
        title={"Recommendations"}
        children="Track all student recommendations and their status"
      />
      <CardsContainer
        bigTitle={"All Recommendations"}
        cards={ApplicantItem}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default Applicant;
