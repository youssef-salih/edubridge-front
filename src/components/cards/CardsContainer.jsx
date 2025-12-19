import { Link } from "react-router";
import Button from "../Button";
import IntershipsApplyCard from "./IntershipsApplyCard";
import MiniTitle from "./MiniTitle";
import Pagination from "../Pagination";
import { useState } from "react";

const CardsContainer = ({
  bigTitle,
  title,
  cards: Cards,
  button,
  to,
  page,
  setPage,
}) => {
  return (
    <div className="bg-white p-5 col-span-12 md:col-span-6 flex flex-col justify-between rounded-xl shadow-md h-full min-h-[450px]">
      <div className="flex flex-1 flex-col h-full justify-between">
        <div>
          <MiniTitle bigTitle={bigTitle} title={title} />
          <div className="flex flex-col gap-2 mt-2">
            {[...Array(3)].map((arr) => (
              <Cards />
            ))}
          </div>
        </div>
        {page && (
          <Pagination
            totalPages={10}
            currentPage={page}
            onPageChange={setPage}
          />
        )}
      </div>
      {button && to && (
        <div className="mt-2">
          <Link to={to}>
            <Button variant="secondary" className={"w-full"}>
              {button}
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CardsContainer;
