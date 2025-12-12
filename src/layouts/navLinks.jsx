import { Home, Info, Settings, User } from "lucide-react";

export const menu = [
  {
    name: "Dashboard",
    icon: <Home size={20} />,
    to: "/",
  },
  {
    name: "Users",
    icon: <User size={20} />,
    children: [
      {
        name: "All Users",
        icon: <Info size={16} />,
        to: "/Users/all",
      },
      {
        name: "Add User",
        icon: <Info size={16} />,
        to: "/Users/add",
      },
      {
        name: "Roles",
        icon: <Info size={16} />,
        to: "/Users/roles",
      },
    ],
  },
  {
    name: "Settings",
    icon: <Settings size={20} />,
    children: [
      {
        name: "General",
        icon: <Info size={16} />,
        to: "/settings/",
      },
    ],
  },
];
