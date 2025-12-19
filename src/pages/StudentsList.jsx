import React, { useState } from "react";
import Wrapper from "../layouts/Wrapper";
import Title from "../components/Title";
import SearchFilter from "../components/SearchFilter";
import { Users } from "lucide-react";
import AllStudentsCard from "../components/cards/AllStudentsCard";
import Pagination from "../components/Pagination";

const StudentsList = () => {
  
  return (
    <Wrapper>
      <Title
        title={"Students"}
        children="Manage and support your students"
        button={"add student"}
        to="/"
        classNameButton={"px-3 py-1.5! "}
        icon={<Users size={15} />}
      />
      <SearchFilter />

      <AllStudentsCard />
      
    </Wrapper>
  );
};

export default StudentsList;
