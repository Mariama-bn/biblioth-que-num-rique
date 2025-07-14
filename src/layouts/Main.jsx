// src/layouts/Main.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainHeader from "../components/Headers/MainHeader";
import Accueil from "../views/Main/Accueil"; // ✅ fais bien attention au nom

const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
      </Routes>
    </>
  );
};

export default MainLayout;
