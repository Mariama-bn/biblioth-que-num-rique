// Importer les routes depuis les sous-fichiers
import adminRoutes from "./routes/adminRoutes";
import enseignantRoutes from "./routes/enseignantRoutes";
import etudiantRoutes from "./routes/etudiantRoutes";
import authRoutes from "./routes/authRoutes";
import mainRoutes from "./routes/mainRoutes";

// Rassembler toutes les routes ici
const allRoutes = [
  ...adminRoutes,
  ...enseignantRoutes,
  ...etudiantRoutes,
  ...mainRoutes,
  ...authRoutes,
];

export default allRoutes;

// Exports individuels pour layouts spécifiques
export {
  adminRoutes,
  enseignantRoutes,
  etudiantRoutes,
  mainRoutes,
  authRoutes,
};
