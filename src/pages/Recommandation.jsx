import React, { useState } from "react";
import Title from "../components/Title";
import CardsContainer from "../components/cards/CardsContainer";
import RecommandationItem from "../components/cards/items/RecommandationItem";

const Recommandation = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <Title
        title={"Recommendations"}
        children="Track all student recommendations and their status"
      />

      <CardsContainer
        bigTitle={"All Recommendations"}
        cards={RecommandationItem}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default Recommandation;
