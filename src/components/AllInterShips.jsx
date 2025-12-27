import { useState } from "react";
import MiniTitle from "./cards/MiniTitle";
import { columns } from "./tables/columns/intershipsAll";
import DataTable from "./tables/DataTable";
import Pagination from "./Pagination";
const defaultData = [
  {
    title: "Software Engineering Intern",
    duration: 3,
    applicants: 24,
    skills: ["react", "spring", "java"],
    actions: "In Relationship",
  },
  {
    title: "Software Engineering Intern",
    duration: 3,
    applicants: 24,
    skills: ["react", "spring", "java"],
    actions: "In Relationship",
  },
  {
    title: "Software Engineering Intern",
    duration: 3,
    applicants: 24,
    skills: ["react", "spring", "java"],
    actions: "In Relationship",
  },
  {
    title: "Software Engineering Intern",
    duration: 3,
    applicants: 24,
    skills: ["react", "spring", "java"],
    actions: "In Relationship",
  },
];

const AllInterShips = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="bg-white p-5 col-span-12 md:col-span-6   flex flex-col rounded-xl shadow-md h-full min-h-fit">
      <div className="space-y-5">
        <MiniTitle bigTitle={"All Offers"} />
        <DataTable columns={columns} data={defaultData} />
      </div>
      <Pagination currentPage={page} onPageChange={setPage} totalPages={10} />
    </div>
  );
};

export default AllInterShips;
