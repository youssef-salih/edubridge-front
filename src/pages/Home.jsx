import Title from "../components/Title";
import CardAnalitycs from "../components/cards/CardAnalitycs";

import CardsContainer from "../components/cards/CardsContainer";
import IntershipsApplyCard from "../components/cards/IntershipsApplyCard";
import RecentApplicant from "../components/cards/RecentApplicant";
import Wrapper from "../layouts/Wrapper";

const Home = () => {
  return (
    <Wrapper>
      <Title
        title={"Student Dashboard"}
        children="Welcome back! Track your applications and find new opportunities."
      />

      <div className="space-y-5">
        <CardAnalitycs />

        <div className="grid grid-cols-12 gap-5 ">
          <CardsContainer
            cards={IntershipsApplyCard}
            bigTitle={"Software Engineering Intern"}
            title={"Tech Solutions Inc."}
            button={"View All Internships"}
            to={"#"}
          />
          <CardsContainer
            cards={RecentApplicant}
            bigTitle={"Recent Applications"}
            title={"Track the status of your applications"}
            button={"View All Internships"}
            to={"#"}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
