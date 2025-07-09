// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Importation des interfaces
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import AuthWrapper from "layouts/AuthWrapper.jsx";
import EtudiantLayout from "layouts/Etudiant.jsx";
import EnseignantLayout from "layouts/Enseignant.jsx";
import MainLayout from "layouts/Main.jsx";

// Importation des vues
import Login from "views/Auth/Login.jsx";
import Register from "views/Auth/Register.jsx";

// Importation des animation
import "./assets/css/animations.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/auth/*" element={<AuthWrapper />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/etudiant/*" element={<EtudiantLayout />} />
        <Route path="/enseignant/*" element={<EnseignantLayout />} />
        <Route path="/main/*" element={<MainLayout />} />

        {/* Redirection par défaut vers l'interface principal */}
        <Route path="*" element={<Navigate to="/main/accueil" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
