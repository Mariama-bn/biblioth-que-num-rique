import Dashboard from "../views/admin/Dashboard";
import GestionUtilisateurs from "../views/admin/GestionUtilisateurs";
import GestionDocuments from "../views/admin/GestionDocuments";
import Emprunts from "../views/admin/Emprunts";

const adminRoutes = [
  {
    path: "/index",
    name: "Dashboard",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/utilisateurs",
    name: "Utilisateurs",
    component: GestionUtilisateurs,
    layout: "/admin",
  },
  {
    path: "/documents",
    name: "Documents",
    component: GestionDocuments,
    layout: "/admin",
  },
  {
    path: "/emprunts",
    name: "Emprunts",
    component: Emprunts,
    layout: "/admin",
  },
];

export default adminRoutes;
