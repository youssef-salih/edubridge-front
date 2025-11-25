import React from "react";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router";
import Title from "./navbar/Title";
import Cards from "../components/Cards";
import { DollarSign } from "lucide-react";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet></Outlet>
        <div className="mt-10 px-5">
          <Title title="Browse Internships">
            Find the perfect opportunity for your career growth
          </Title>
          <div className="grid grid-cols-12">
            <Cards
              title="Active offers"
              valeur={120}
              color="#009096"
              icon={DollarSign}
            />{" "}
            <Cards
              title="Active offers"
              valeur={120}
              color="#009096"
              icon={DollarSign}
            />{" "}
            <Cards
              title="Active offers"
              valeur={120}
              color="#009096"
              icon={DollarSign}
            />{" "}
            <Cards
              title="Active offers"
              valeur={120}
              color="#009096"
              icon={DollarSign}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
