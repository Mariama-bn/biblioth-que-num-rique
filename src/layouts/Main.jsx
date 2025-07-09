// src/layouts/Main.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MainSidebar from "../components/Sidebar/MainSidebar";
import MainHeader from "../components/Headers/MainHeader"; // ✅
import MainFooter from "../components/Footers/MainFooter"; // ✅
import logoUIDT from "../assets/img/brand/logo-uidt2.jpeg";

const Main = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="tw-flex tw-min-h-screen tw-bg-gray-100 tw-relative">
      {/* Sidebar */}
      <MainSidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Contenu principal */}
      <div
        className={`tw-flex tw-flex-col tw-flex-1 tw-transition-all tw-duration-300 ${
          sidebarOpen ? "tw-ml-64" : "tw-ml-0 md:tw-ml-64"
        }`}
      >
        {/* ✅ HEADER */}
        <MainHeader toggleSidebar={toggleSidebar} isLoggedIn={false} />


        {/* ✅ PAGE */}
        <main className="tw-p-4 tw-sm:p-6 tw-overflow-y-auto tw-flex-1 slide-up">
          <Outlet />
        </main>

        {/* ✅ FOOTER */}
        <MainFooter />
      </div>
    </div>
  );
};

export default Main;
