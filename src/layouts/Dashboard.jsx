import React, { useEffect, useState } from "react";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router";
import Sidebar from "./sideBar/SideBar";
import { useTheme } from "../hooks/useTheme";
import Loader from "../components/Loader";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    setLoading(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) return <Loader />;
  return (
    <div className="flex">
      {!isMobile && (
        <Sidebar
          collapsed={collapsed}
          theme={theme}
          toggleTheme={toggleTheme}
          setCollapsed={setCollapsed}
        />
      )}

      <div
        className="w-full min-h-screen transition-[width,margin] duration-300"
        style={{
          marginLeft: isMobile ? "0rem" : collapsed ? "3.5rem" : "14rem",
        }}
      >
        <Navbar
          isMobile={isMobile}
          theme={theme}
          toggleTheme={toggleTheme}
          collapsed={collapsed}
        />

        <main className="w-full h-full px-5 pt-20 pb-8 bg-light">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
