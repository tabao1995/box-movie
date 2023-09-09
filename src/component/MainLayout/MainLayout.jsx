import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet className="content-container" />
    </div>
  );
};

export default MainLayout;
