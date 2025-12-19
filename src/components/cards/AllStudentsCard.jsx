import React, { useState } from "react";
import CardsContainer from "./CardsContainer";
import StudentRecommedationItem from "./items/StudentRecommedationItem";
import Pagination from "../Pagination";

const AllStudentsCard = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <CardsContainer
        bigTitle={"All Students"}
        cards={StudentRecommedationItem}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default AllStudentsCard;
