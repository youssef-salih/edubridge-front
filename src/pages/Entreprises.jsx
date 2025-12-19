import Title from "../components/Title";
import SearchFilter from "../components/SearchFilter";
import EntreprisesCard from "../components/cards/EntreprisesCard";

const Entreprises = () => {
  return (
    <div>
      <Title title={"Entreprises"} children="Manage and check entreprises" />
      <SearchFilter />
     <EntreprisesCard/>
    </div>
  );
};

export default Entreprises;
