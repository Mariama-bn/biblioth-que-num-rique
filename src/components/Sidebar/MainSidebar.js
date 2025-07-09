// src/components/Sidebar/MainSidebar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

const MainSidebar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const links = [
    { to: "index", label: "Tableau de bord" },
    { to: "documents", label: "Documents" },
    { to: "reservations", label: "Réservations" },
    { to: "profil", label: "Profil" },
  ];

  return (
    <div className="tw-fixed tw-top-0 tw-left-0 tw-h-full tw-w-64 tw-bg-green-500 tw-text-black tw-z-40 tw-shadow-lg">
      {/* Logo + Menu Burger */}
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-4 tw-border-b tw-border-green-600">
        <img
          src={require("../../assets/img/brand/logo-uidt2.jpeg")}
          alt="Logo UIDT"
          className="tw-h-20 tw-w-auto tw-rounded-full"
        />
        {/* Menu burger pour afficher/masquer les liens */}
        <button
          onClick={toggleLinks}
          className="tw-mt-3 tw-text-white tw-bg-green-600 tw-p-2 tw-rounded hover:tw-bg-green-700 transition"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Liens avec animation */}
      <nav
        className={`tw-px-4 tw-py-2 tw-space-y-3 tw-transition-all tw-duration-300 ${
          showLinks ? "tw-opacity-100 tw-max-h-screen" : "tw-opacity-0 tw-max-h-0 tw-overflow-hidden"
        }`}
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `tw-block tw-py-3 tw-px-4 tw-rounded tw-text-lg tw-font-medium hover:tw-bg-green-600 ${
                isActive ? "tw-bg-green-700 tw-font-semibold" : ""
              }`
            }
            style={{ textDecoration: "none", color: "#000" }}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default MainSidebar;
