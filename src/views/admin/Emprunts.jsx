import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  XCircle,
  Send,
  X,
  Eye,
  Trash2,
  RotateCcw,
} from "lucide-react";

const demandesInit = [
  {
    id: 1,
    utilisateur: {
      id: 101,
      nom: "Ali Fall",
      role: "Étudiant",
      ufr: "Sciences et Technologies",
      filiere: "Informatique",
      email: "ali.fall@uidt.edu.sn",
    },
    document: {
      id: 201,
      titre: "JavaScript moderne",
      auteur: "O. Sy",
      isbn: "978-1234567890",
    },
    dateEmprunt: "2025-07-10",
    dateRetour: "2025-07-17",
    statut: "en attente",
  },
  {
    id: 2,
    utilisateur: {
      id: 102,
      nom: "Fatou Diop",
      role: "Enseignant",
      specialite: "Droit public",
      email: "fatou.diop@uidt.edu.sn",
    },
    document: {
      id: 202,
      titre: "Droit Constitutionnel",
      auteur: "A. Fall",
      isbn: "978-0987654321",
    },
    dateEmprunt: "2025-07-01",
    dateRetour: "2025-07-08",
    statut: "validée",
  },
];

const GestionDemandesEmprunts = () => {
  const [demandes, setDemandes] = useState(demandesInit);
  const [notifMessage, setNotifMessage] = useState("");
  const [notifDestinataire, setNotifDestinataire] = useState(null);
  const [showNotifModal, setShowNotifModal] = useState(false);

  const openNotifModal = (utilisateur) => {
    setNotifDestinataire(utilisateur);
    setNotifMessage("");
    setShowNotifModal(true);
  };

  const envoyerNotification = () => {
    alert(`Message envoyé à ${notifDestinataire.nom} :\n\n${notifMessage}`);
    setShowNotifModal(false);
  };

  const updateStatut = (id, nouveauStatut) => {
    const confirmation = window.confirm(`Confirmez-vous le changement de statut en \"${nouveauStatut}\" ?`);
    if (!confirmation) return;
    setDemandes((prev) =>
      prev.map((d) => (d.id === id ? { ...d, statut: nouveauStatut } : d))
    );
  };

  const supprimerDemande = (id) => {
    const confirmation = window.confirm("Confirmez-vous la suppression de cette demande ?");
    if (!confirmation) return;
    setDemandes((prev) => prev.filter((d) => d.id !== id));
  };

  const getBadgeClass = (statut) => {
    switch (statut) {
      case "en attente":
        return "bg-yellow-100 text-yellow-700";
      case "validée":
        return "bg-green-100 text-green-700";
      case "refusée":
        return "bg-red-100 text-red-700";
      case "retournée":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6 p-4">
      <h1 className="text-3xl font-bold text-gray-800">
        📚 Gestion des demandes d’emprunts - UIDT
      </h1>

      <table className="w-full table-auto bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr className="text-left text-sm text-gray-600">
            <th className="p-3">Utilisateur</th>
            <th className="p-3">Document</th>
            <th className="p-3">Période</th>
            <th className="p-3">Statut</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {demandes.map((d) => (
            <tr key={d.id} className="border-t text-sm">
              <td className="p-3">
                <div className="font-semibold">{d.utilisateur.nom}</div>
                <div className="text-xs">{d.utilisateur.email}</div>
              </td>
              <td className="p-3">
                <div>{d.document.titre}</div>
                <div className="text-xs text-gray-500">ISBN: {d.document.isbn}</div>
              </td>
              <td className="p-3">
                <div>{d.dateEmprunt} → {d.dateRetour}</div>
              </td>
              <td className="p-3">
                <span className={`px-2 py-1 text-xs rounded font-semibold ${getBadgeClass(d.statut)}`}>
                  {d.statut}
                </span>
              </td>
              <td className="p-3 flex items-center justify-center gap-2">
                <button onClick={() => updateStatut(d.id, "validée")} title="Valider" className="text-green-600 hover:text-green-800">
                  <CheckCircle size={18} />
                </button>
                <button onClick={() => updateStatut(d.id, "refusée")} title="Refuser" className="text-red-600 hover:text-red-800">
                  <XCircle size={18} />
                </button>
                <button onClick={() => updateStatut(d.id, "retournée")} title="Marquer retourné" className="text-blue-600 hover:text-blue-800">
                  <Eye size={18} />
                </button>
                <button onClick={() => updateStatut(d.id, "en attente")} title="Réinitialiser" className="text-yellow-600 hover:text-yellow-800">
                  <RotateCcw size={18} />
                </button>
                <button onClick={() => supprimerDemande(d.id)} title="Supprimer" className="text-gray-600 hover:text-gray-800">
                  <Trash2 size={18} />
                </button>
                <button onClick={() => openNotifModal(d.utilisateur)} title="Notifier" className="text-blue-500 hover:text-blue-700">
                  <Send size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AnimatePresence>
        {showNotifModal && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center p-4">
            <motion.div
              className="bg-white rounded shadow-lg p-6 w-full max-w-md relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <button
                onClick={() => setShowNotifModal(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              >
                <X size={20} />
              </button>
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                Envoyer une notification à {notifDestinataire?.nom}
              </h2>
              <textarea
                className="w-full border rounded px-3 py-2 text-sm"
                rows={5}
                placeholder="Écrivez votre message ici..."
                value={notifMessage}
                onChange={(e) => setNotifMessage(e.target.value)}
              />
              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setShowNotifModal(false)}
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                >
                  Annuler
                </button>
                <button
                  onClick={envoyerNotification}
                  disabled={!notifMessage.trim()}
                  className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                  Envoyer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GestionDemandesEmprunts;
