import Cards from "../components/Cards";
import { User, BarChart3, Home } from "lucide-react";

export default {
  title: "Components/Cards",
  component: Cards,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },

    icon: {
      control: "select",
      options: ["User", "BarChart3", "Home"],
      mapping: {
        User,
        BarChart3,
        Home,
      },
    },
  },
};

// Default example
export const Default = {
  args: {
    title: "Total Users",
    valeur: "120",
    color: "#4f46e5",
    icon: User,
  },
};

// Another example
export const Sales = {
  args: {
    title: "Total Sales",
    valeur: "540 DH",
    color: "red",
    icon: BarChart3,
  },
};
