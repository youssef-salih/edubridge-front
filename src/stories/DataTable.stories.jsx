import { columns } from "../components/tables/columns/intershipsAll";
import DataTable from "../components/tables/DataTable";
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
const meta = {
  component: DataTable,
  title: "table/DataTable",
  tags:["autodocs"]
};

export default meta;

export const Default = {
  args: {
    columns,
    data: defaultData,
  },
};
