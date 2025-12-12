import Title from "../components/Title";
import CardAnalitycs from "../components/cards/CardAnalitycs";

import CardsContainer from "../components/cards/CardsContainer";
import IntershipsApplyCard from "../components/cards/IntershipsApplyCard";
import RecentApplicant from "../components/cards/RecentApplicant";

const Home = () => {
  return (
    <div className="container mx-auto space-y-5">
      <Title
        title={"Student Dashboard"}
        children="Welcome back! Track your applications and find new opportunities."
      />

      <CardAnalitycs />

      <div className="grid grid-cols-12 gap-5">
        <CardsContainer
          cards={IntershipsApplyCard}
          bigTitle={"Software Engineering Intern"}
          title={"Tech Solutions Inc."}
        />
        <CardsContainer
          cards={RecentApplicant}
          bigTitle={"Recent Applications"}
          title={"Track the status of your applications"}
        />
      </div>
    </div>
  );
};

export default Home;
