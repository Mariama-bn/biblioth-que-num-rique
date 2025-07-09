import Dashboard from "../views/etudiants/DashboardEtudiant";
import MesEmprunts from "../views/etudiants/MesEmprunts";
import ConsulterDocuments from "../views/etudiants/ConsultationEtudiant";

const etudiantRoutes = [
  {
    path: "/index",
    name: "Dashboard",
    component: Dashboard,
    layout: "/etudiant",
  },
  {
    path: "/mes-emprunts",
    name: "Mes Emprunts",
    component: MesEmprunts,
    layout: "/etudiant",
  },
  {
    path: "/documents",
    name: "Consulter Documents",
    component: ConsulterDocuments,
    layout: "/etudiant",
  },
];

export default etudiantRoutes;
