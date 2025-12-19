import React from "react";
import EntreprisesItem from "./items/EntreprisesItem";
import MiniTitle from "./MiniTitle";
import Pagination from "../Pagination";

const EntreprisesCard = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md ">
      <div className="grid grid-cols-12 gap-5  ">
        {[...Array(4)].map((arr) => (
          <EntreprisesItem />
        ))}
      </div>{" "}
      <Pagination currentPage={1} totalPages={10} />
    </div>
  );
};

export default EntreprisesCard;
