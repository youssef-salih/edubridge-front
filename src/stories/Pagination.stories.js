import { User, BarChart3, Home } from "lucide-react";
import Cards from "../components/cards/Cards";
import Pagination from "../components/Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};

// Default example
export const Default = {
  args: {
    totalPages: 10,
    currentPage: 1,
  },
};
export const Middle = {
  args: {
    totalPages: 10,
    currentPage: 4,
  },
};
export const End = {
  args: {
    totalPages: 10,
    currentPage: 10,
  },
};
