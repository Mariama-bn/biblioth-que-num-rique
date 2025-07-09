import Dashboard from "../views/enseignants/DashboardEnseignant";
import MesEmprunts from "../views/enseignants/MesEmpruntsEnseignant";
import ConsulterDocuments from "../views/enseignants/ConsultationEnseignant";

const enseignantRoutes = [
  {
    path: "/index",
    name: "Dashboard",
    component: Dashboard,
    layout: "/enseignant",
  },
  {
    path: "/mes-emprunts",
    name: "Mes Emprunts",
    component: MesEmprunts,
    layout: "/enseignant",
  },
  {
    path: "/documents",
    name: "Consulter Documents",
    component: ConsulterDocuments,
    layout: "/enseignant",
  },
];

export default enseignantRoutes;
