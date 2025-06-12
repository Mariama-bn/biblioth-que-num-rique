// Fichier : src/routes.js
import Dashboard from "views/Dashboard";
import Utilisateurs from "views/Utilisateurs";
import AjouterDocument from "views/AjouterDocument";
import Bibliotheque from "views/Bibliotheque";
import Emprunts from "views/Emprunts";
import Universite from "views/Universite";

import Icons from "views/examples/Icons.js";
import Maps from "views/examples/Maps.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";

const routes = [
  {
    path: "/index",
    name: "Tableau de bord",
    icon: "ni ni-tv-2 text-primary",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/utilisateurs",
    name: "Utilisateurs",
    icon: "ni ni-single-02 text-yellow",
    component: <Utilisateurs />,
    layout: "/admin",
  },
  {
    path: "/ajouter-document",
    name: "Ajouter un document",
    icon: "ni ni-fat-add text-green",
    component: <AjouterDocument />,
    layout: "/admin",
  },
  {
    path: "/bibliotheque",
    name: "Catalogue",
    icon: "ni ni-books text-red",
    component: <Bibliotheque />,
    layout: "/admin",
  },
  {
    path: "/emprunts",
    name: "Emprunts",
    icon: "ni ni-delivery-fast text-blue",
    component: <Emprunts />,
    layout: "/admin",
  },
  {
    path: "/universite",
    name: "À propos de l’Université",
    icon: "ni ni-building text-purple",
    component: <Universite />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: <Maps />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },
];

export default routes;
