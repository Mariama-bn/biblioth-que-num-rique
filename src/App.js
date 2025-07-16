import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ✅ Ajout de AuthProvider
import { AuthProvider } from "./contexts/AuthContext";

// Layouts
import AdminLayout from "./layouts/Admin";
import AuthWrapper from "./layouts/AuthWrapper.jsx";
import EtudiantLayout from "./layouts/Etudiant";
import EnseignantLayout from "./layouts/Enseignant.jsx";
import MainLayout from "./layouts/Main.jsx";

// Auth Pages
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";

// Admin Pages
import Dashboard from "./views/admin/Dashboard";
import GestionUtilisateurs from "./views/admin/GestionUtilisateurs";
import GestionDocuments from "./views/admin/GestionDocuments";
import Emprunts from "./views/admin/Emprunts";
import DemandesAcquisition from "./views/admin/DemandesAcquisition";
import RapportsStatistiques from "./views/admin/RapportsStatistiques";
import Parametres from "./views/admin/Parametres";

// Étudiant Pages
import DashboardEtudiant from './views/etudiants/DashboardEtudiant';
import MesEmprunts from './views/etudiants/MesEmprunts';
import ConsultationEtudiant from './views/etudiants/ConsultationEtudiant';
import NotificationsEtudiant from './views/etudiants/NotificationsEtudiant';
import ProfilEtudiant from './views/etudiants/ProfilEtudiant';
import FavorisEtudiants from './views/etudiants/FavorisEtudiants';

// Enseignant Pages
import DashboardEnseignant from './views/enseignants/DashboardEnseignant';
import ConsultationEnseignant from './views/enseignants/ConsultationEnseignant';
import DepotDocument from './views/enseignants/DepotDocument';
import DemandeAcquisition from './views/enseignants/DemandeAcquisition';
import LectureDocumentEnseignant from './views/enseignants/LectureDocumentEnseignant';
import ListesPedagogiques from './views/enseignants/ListesPedagogiques';
import MesEmpruntsEnseignant from './views/enseignants/MesEmpruntsEnseignant';
import ProfilEnseignant from './views/enseignants/ProfilEnseignant';
import FavorisEnseignants from './views/enseignants/FavorisEnseignants';

// Main Pages
import Explorer from './views/Main/Explorer';
import TousLesDocuments from './views/Main/TousLesDocuments';
import RedirectionUfr from "./views/Main/RedirectionUfr";
import ApercuDocument from './views/Main/ApercuDocument';
import LireDocument from './views/Main/LireDocument';

// Aide Pages
import Faq from './pages/Aide/Faq';
import Contact from './pages/Aide/Contact';
import Regles from './pages/Aide/Regles';
import Probleme from './pages/Aide/Probleme';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          {/* Admin Layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="utilisateurs" element={<GestionUtilisateurs />} />
            <Route path="documents" element={<GestionDocuments />} />
            <Route path="emprunts" element={<Emprunts />} />
            <Route path="demandesacquisitions" element={<DemandesAcquisition />} />
            <Route path="statistiques" element={<RapportsStatistiques />} />
            <Route path="parametres" element={<Parametres />} />
          </Route>

          {/* Auth */}
          <Route path="/auth/*" element={<AuthWrapper />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* Étudiant Layout */}
          <Route path="/etudiant" element={<EtudiantLayout />}>
            <Route path="dashboard" element={<DashboardEtudiant />} />
            <Route path="mes-emprunts" element={<MesEmprunts />} />
            <Route path="consultations" element={<ConsultationEtudiant />} />
            <Route path="notifications" element={<NotificationsEtudiant />} />
            <Route path="profil" element={<ProfilEtudiant />} />
            <Route path="favoris-etudiants" element={<FavorisEtudiants />} />
          </Route>

          {/* Enseignant Layout */}
          <Route path="/enseignant" element={<EnseignantLayout />}>
            <Route path="dashboard" element={<DashboardEnseignant />} />
            <Route path="consultations" element={<ConsultationEnseignant />} />
            <Route path="depot" element={<DepotDocument />} />
            <Route path="demande" element={<DemandeAcquisition />} />
            <Route path="lecture" element={<LectureDocumentEnseignant />} />
            <Route path="listes" element={<ListesPedagogiques />} />
            <Route path="mes-emprunts" element={<MesEmpruntsEnseignant />} />
            <Route path="profil" element={<ProfilEnseignant />} />
            <Route path="favoris-enseignants" element={<FavorisEnseignants />} />
          </Route>

          {/* Pages principales */}
          <Route path="/main/*" element={<MainLayout />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/documents" element={<TousLesDocuments />} />
          <Route path="/ufr/:ufrId" element={<RedirectionUfr />} />
          <Route path="/document/:id" element={<ApercuDocument />} />
          <Route path="/lecture/:id" element={<LireDocument />} />

          {/* Aide */}
          <Route path="/aide/faq" element={<Faq />} />
          <Route path="/aide/contact" element={<Contact />} />
          <Route path="/aide/regles" element={<Regles />} />
          <Route path="/aide/probleme" element={<Probleme />} />

          {/* Redirection par défaut */}
          <Route path="*" element={<Navigate to="/main/accueil" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
