import React from 'react';
import { Download, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const empruntsSimules = [
  {
    id: 'doc1',
    titre: 'Introduction à la Physiologie',
    auteur: 'Dr. Sow',
    dateEmprunt: '2025-07-01',
    dateRetour: '2025-07-15',
    statut: 'En cours',
    telechargeable: true,
  },
  {
    id: 'doc2',
    titre: 'Chimie Organique',
    auteur: 'Prof. Ndiaye',
    dateEmprunt: '2025-06-15',
    dateRetour: '2025-06-29',
    statut: 'Rendu',
    telechargeable: false,
  },
  {
    id: 'doc3',
    titre: 'Marketing Digital',
    auteur: 'Mme Diouf',
    dateEmprunt: '2025-06-25',
    dateRetour: '2025-07-09',
    statut: 'En retard',
    telechargeable: true,
  },
];

const MesEmprunts = () => {
  const navigate = useNavigate();

  const handleLecture = (id) => {
    navigate(`/lecture/${id}`);
  };

  const handleTelechargement = (doc) => {
    if (doc.telechargeable) {
      // Exemple : lien fictif vers un fichier
      const lien = `/fichiers/${doc.id}.pdf`;
      const lienTemp = document.createElement('a');
      lienTemp.href = lien;
      lienTemp.download = doc.titre;
      document.body.appendChild(lienTemp);
      lienTemp.click();
      document.body.removeChild(lienTemp);
    } else {
      alert("❌ Ce document n'est pas disponible au téléchargement.");
    }
  };

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
              <th className="px-4 py-3 text-center">Actions</th>
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
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      doc.statut === 'En cours'
                        ? 'bg-blue-100 text-blue-700'
                        : doc.statut === 'Rendu'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {doc.statut}
                  </span>
                </td>
                <td className="px-4 py-3 flex justify-center space-x-2">
                  <button
                    onClick={() => handleLecture(doc.id)}
                    className="text-blue-600 hover:text-blue-800"
                    title="Lire"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => handleTelechargement(doc)}
                    className="text-green-600 hover:text-green-800"
                    title="Télécharger"
                  >
                    <Download size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default MesEmprunts;
