// src/views/etudiants/MesEmprunts.jsx
import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const empruntsSimules = [
  {
    id: 'doc1',
    titre: 'Introduction à la Physiologie',
    auteur: 'Dr. Sow',
    dateEmprunt: '2025-07-01',
    dateRetour: '2025-07-15',
    statut: 'En cours'
  },
  {
    id: 'doc2',
    titre: 'Chimie Organique',
    auteur: 'Prof. Ndiaye',
    dateEmprunt: '2025-06-15',
    dateRetour: '2025-06-29',
    statut: 'Rendu'
  },
  {
    id: 'doc3',
    titre: 'Marketing Digital',
    auteur: 'Mme Diouf',
    dateEmprunt: '2025-06-25',
    dateRetour: '2025-07-09',
    statut: 'Refusé',
    motifRefus: 'Vous avez un emprunt non retourné après avertissement.'
  }
];

const MesEmprunts = () => {
  const [motifVisibleId, setMotifVisibleId] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-100 p-6 min-h-screen"
    >
      <h1 className="text-2xl font-bold text-blue-800 mb-6">📘 Mes emprunts</h1>

      <div className="overflow-x-auto rounded shadow bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-4 py-3">Titre</th>
              <th className="px-4 py-3">Auteur</th>
              <th className="px-4 py-3">Date d'emprunt</th>
              <th className="px-4 py-3">Date de retour</th>
              <th className="px-4 py-3">Statut</th>
            </tr>
          </thead>
          <tbody>
            {empruntsSimules.map((doc) => (
              <tr key={doc.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-4 py-3 font-medium text-gray-800">{doc.titre}</td>
                <td className="px-4 py-3 text-gray-600">{doc.auteur}</td>
                <td className="px-4 py-3 text-gray-600">{doc.dateEmprunt}</td>
                <td className="px-4 py-3 text-gray-600">{doc.dateRetour}</td>
                <td className="px-4 py-3">
                  {doc.statut === 'Refusé' ? (
                    <div className="flex items-center gap-2">
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-semibold">Refusé</span>
                      <button
                        onClick={() => setMotifVisibleId(doc.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Voir le motif du refus"
                      >
                        <Info size={16} />
                      </button>
                    </div>
                  ) : (
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      doc.statut === 'En cours'
                        ? 'bg-blue-100 text-blue-700'
                        : doc.statut === 'Rendu'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {doc.statut}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {motifVisibleId && (
          <motion.div
            key="motif-popup"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50"
          >
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-auto shadow-xl text-center">
              <h3 className="text-lg font-bold text-red-600 mb-4">⛔ Emprunt refusé</h3>
              <p className="text-gray-700 text-sm mb-4">
                {
                  empruntsSimules.find((e) => e.id === motifVisibleId)?.motifRefus ||
                  'Aucun motif précisé.'
                }
              </p>
              <button
                onClick={() => setMotifVisibleId(null)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Fermer
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MesEmprunts;
