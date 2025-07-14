// ✅ Page complète : Gestion des Demandes d’Acquisition - Admin UIDT
// 📌 Uniquement les demandes des ENSEIGNANTS
// 📤 L’admin peut : valider, refuser, réinitialiser, notifier, supprimer

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, RotateCcw, Send, Trash2, X } from 'lucide-react';

const demandesFictives = [
  {
    id: 1,
    enseignant: {
      nom: 'Dr. Fatou Diop',
      email: 'fatou.diop@uidt.edu.sn',
      specialite: 'Droit public'
    },
    document: {
      titre: 'Droit international public',
      auteur: 'C. Fall',
      type: 'Livre',
      editeur: 'Presses Universitaires'
    },
    motif: 'Besoin pour le cours de Relations Internationales',
    statut: 'en attente'
  },
  {
    id: 2,
    enseignant: {
      nom: 'Pr. Ibrahima Sarr',
      email: 'ibrahima.sarr@uidt.edu.sn',
      specialite: 'Informatique'
    },
    document: {
      titre: 'Machine Learning avec Python',
      auteur: 'A. Ndiaye',
      type: 'Manuel',
      editeur: 'Technoscience'
    },
    motif: 'Indispensable pour le nouveau programme IA',
    statut: 'en attente'
  }
];

const GestionDemandesAcquisition = () => {
  const [demandes, setDemandes] = useState(demandesFictives);
  const [message, setMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const ouvrirModalNotif = (enseignant, validée) => {
    const msg = validée
      ? `Bonjour ${enseignant.nom}, votre demande d'acquisition a été validée. Le document sera bientôt disponible.`
      : `Bonjour ${enseignant.nom}, votre demande d'acquisition a été refusée. Vous pouvez contacter l’administration pour plus d’informations.`;
    setMessage(msg);
    setSelectedUser(enseignant);
    setShowModal(true);
  };

  const envoyerNotification = () => {
    alert(`Notification envoyée à ${selectedUser.nom} :\n\n${message}`);
    setShowModal(false);
  };

  const updateStatut = (id, statut) => {
    const confirm = window.confirm(`Confirmer le changement de statut en "${statut}" ?`);
    if (!confirm) return;
    setDemandes(prev => prev.map(res => res.id === id ? { ...res, statut } : res));
  };

  const supprimerDemande = (id) => {
    const confirm = window.confirm("Supprimer cette demande ?");
    if (!confirm) return;
    setDemandes(prev => prev.filter(res => res.id !== id));
  };

  const getBadge = (statut) => {
    switch (statut) {
      case 'validée': return 'bg-green-100 text-green-700';
      case 'refusée': return 'bg-red-100 text-red-700';
      default: return 'bg-yellow-100 text-yellow-700';
    }
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">📑 Gestion des Demandes d’Acquisition</h1>

      <table className="w-full table-auto bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr className="text-left text-sm text-gray-600">
            <th className="p-3">Enseignant</th>
            <th className="p-3">Document demandé</th>
            <th className="p-3">Motif</th>
            <th className="p-3">Statut</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {demandes.map((dem) => (
            <tr key={dem.id} className="border-t text-sm">
              <td className="p-3">
                <div className="font-semibold">{dem.enseignant.nom}</div>
                <div className="text-xs text-gray-600">{dem.enseignant.email}</div>
              </td>
              <td className="p-3">
                <div>{dem.document.titre}</div>
                <div className="text-xs text-gray-500">{dem.document.type} - {dem.document.auteur}</div>
              </td>
              <td className="p-3 text-xs text-gray-700">{dem.motif}</td>
              <td className="p-3">
                <span className={`px-2 py-1 text-xs rounded font-semibold ${getBadge(dem.statut)}`}>
                  {dem.statut}
                </span>
              </td>
              <td className="p-3 flex items-center justify-center gap-2">
                <button
                  title="Valider"
                  onClick={() => updateStatut(dem.id, 'validée')}
                  className="text-green-600 hover:text-green-700"
                >
                  <CheckCircle size={18} />
                </button>
                <button
                  title="Refuser"
                  onClick={() => updateStatut(dem.id, 'refusée')}
                  className="text-red-600 hover:text-red-700"
                >
                  <XCircle size={18} />
                </button>
                <button
                  title="Réinitialiser"
                  onClick={() => updateStatut(dem.id, 'en attente')}
                  className="text-yellow-600 hover:text-yellow-700"
                >
                  <RotateCcw size={18} />
                </button>
                <button
                  title="Notifier - Acceptée"
                  onClick={() => ouvrirModalNotif(dem.enseignant, true)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Send size={18} />
                </button>
              
                <button
                  title="Supprimer"
                  onClick={() => supprimerDemande(dem.id)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center p-4">
            <motion.div
              className="bg-white rounded shadow-lg p-6 w-full max-w-md relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 text-gray-600 hover:text-gray-900">
                <X size={20} />
              </button>
              <h2 className="text-xl font-bold mb-4 text-gray-800">📨 Message à l’enseignant</h2>
              <textarea
                className="w-full border rounded px-3 py-2 text-sm"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="flex justify-end gap-2 mt-4">
                <button onClick={() => setShowModal(false)} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Annuler</button>
                <button onClick={envoyerNotification} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Envoyer</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GestionDemandesAcquisition;
