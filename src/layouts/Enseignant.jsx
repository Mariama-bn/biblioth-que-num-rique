import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LogOut,
  BookOpen,
  FileText,
  FolderOpen,
  Eye,
  ClipboardList,
  User,
} from "lucide-react";

import EnseignantNavbar from "../components/Navbars/EnseignantNavbar"; // ✅ Import du navbar

const menu = [
  { label: "Tableau de bord", path: "/enseignant/dashboard", icon: <BookOpen size={18} /> },
  { label: "Consultations", path: "/enseignant/consultations", icon: <Eye size={18} /> },
  { label: "Dépôt de documents", path: "/enseignant/depot", icon: <FileText size={18} /> },
  { label: "Demandes d’acquisition", path: "/enseignant/demande", icon: <FolderOpen size={18} /> },
  { label: "Lecture", path: "/enseignant/lecture", icon: <BookOpen size={18} /> },
  { label: "Listes pédagogiques", path: "/enseignant/listes", icon: <ClipboardList size={18} /> },
  { label: "Mes emprunts", path: "/enseignant/mes-emprunts", icon: <BookOpen size={18} /> },
  { label: "Profil", path: "/enseignant/profil", icon: <User size={18} /> },
  { label: "Favoris", path: "/enseignant/favoris-enseignants", icon: <BookOpen size={18} /> },
];

const EnseignantLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/auth/login");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* ✅ Barre de navigation en haut */}
      <EnseignantNavbar logout={handleLogout} />

      <div className="flex flex-1">
        {/* ✅ Sidebar */}
        <aside className="w-64 bg-blue-400 text-white shadow-lg flex flex-col justify-between">
          <div>
            <div className="p-6 border-b border-blue-300">
              <h1 className="text-xl font-bold">UIDT | Enseignant</h1>
              <p className="text-sm text-blue-100">Espace personnel</p>
            </div>
            <nav className="mt-6">
              {menu.map((item, idx) => (
                <NavLink
                  key={idx}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-6 py-3 text-sm font-medium transition-all duration-200 ${
                      isActive ? "bg-blue-500 text-white" : "hover:bg-blue-500 text-white"
                    }`
                  }
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* ✅ Déconnexion dans le sidebar */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm bg-red-600 hover:bg-red-700 text-white px-6 py-3"
          >
            <LogOut size={16} />
            Déconnexion
          </button>
        </aside>

        {/* ✅ Contenu principal */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default EnseignantLayout;
