import Button from "../Button";
import IntershipsApplyCard from "./IntershipsApplyCard";
import MiniTitle from "./MiniTitle";

const CardsContainer = ({ bigTitle, title, cards: Cards }) => {
  return (
    <div className="bg-white p-5 col-span-12 md:col-span-6   rounded-xl drop-shadow-md min-h-[450px]">
      <MiniTitle bigTitle={bigTitle} title={title} />
      <div className="flex flex-col gap-2 mt-2">
        {[...Array(3)].map((arr) => (
          <Cards />
        ))}
      </div>
      <div className="mt-2">
        <Button
          classes={
            "bg-light! text-black! hover:bg-secondary! hover:text-white!"
          }
        >
          View All Internships
        </Button>
      </div>
    </div>
  );
};

export default CardsContainer;
