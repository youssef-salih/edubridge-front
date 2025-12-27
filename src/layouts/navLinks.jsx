import { Building2, ChartBar, Home, Info, Settings, User } from "lucide-react";

export let role = ["Cordinateur", "Student", "Rh"];
export const menu = [];

let selectedRole = role[2];
if (selectedRole === "Student") {
  menu.push(
    {
      name: "Dashboard",
      icon: <Home size={20} />,
      to: "/",
    },
    {
      name: "Interships",
      icon: <User size={20} />,
      children: [
        {
          name: "browse interships",
          icon: <Info size={16} />,
          to: "/browse-interships",
        },
        {
          name: "My Applications",
          icon: <Info size={16} />,
          to: "/my-applications",
        },
      ],
    },
    {
      name: "Settings",
      icon: <Settings size={20} />,
      children: [
        {
          name: "Profile",
          icon: <Info size={16} />,
          to: "/settings",
        },
      ],
    }
  );
}
if (selectedRole === "Cordinateur") {
  menu.push(
    {
      name: "Dashboard",
      icon: <Home size={20} />,
      to: "/",
    },
    {
      name: "Students",
      icon: <User size={20} />,
      children: [
        {
          name: "Students List",
          icon: <Info size={16} />,
          to: "/students-list",
        },
        {
          name: "Recommendations",
          icon: <Info size={16} />,
          to: "/recommendations",
        },
      ],
    },
    {
      name: "Entreprises",
      icon: <Building2 size={20} />,
      to: "/entreprises",
    }
  );
}
if (selectedRole === "Rh") {
  menu.push(
    {
      name: "Dashboard",
      icon: <Home size={20} />,
      to: "/",
    },
    {
      name: "interships",
      icon: <User size={20} />,
      children: [
        {
          name: "Interships List",
          icon: <Info size={16} />,
          to: "/interships-offers",
        },
        {
          name: "Applicant",
          icon: <Info size={16} />,
          to: "/applicant",
        },
      ],
    },
    {
      name: "Statistics",
      icon: <ChartBar size={20} />,
      to: "/statistics",
    }
  );
}
