import React from "react";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router";
import Title from "./navbar/Title";

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
        </div>
      </main>
    </>
  );
};

export default Dashboard;
