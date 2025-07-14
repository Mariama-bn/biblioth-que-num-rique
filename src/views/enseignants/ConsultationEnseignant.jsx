// src/views/enseignants/ConsultationEnseignant.jsx
import React from "react";
import { Eye, Download, Star } from "lucide-react";
import { toast } from "react-toastify";

const consultations = [
  {
    id: "doc1",
    title: "Cours de Physique Quantique",
    author: "Pr. Diallo",
    date: "2025-07-10",
  },
  {
    id: "doc2",
    title: "Théories pédagogiques modernes",
    author: "Dr. Sarr",
    date: "2025-07-08",
  },
];

const ConsultationEnseignant = () => {
  const handleVoir = (doc) => {
    toast.info(`Aperçu rapide de "${doc.title}"`, { autoClose: 2000 });
  };

  const handleTelecharger = (doc) => {
    toast.success(`Téléchargement de "${doc.title}" démarré`, { autoClose: 2000 });
  };

  const handleFavori = (doc) => {
    toast.success(`"${doc.title}" ajouté aux favoris`, { autoClose: 2000 });
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-blue-800 mb-6">
        📚 Consultations récentes
      </h1>

      {consultations.length === 0 ? (
        <p className="text-gray-600">Aucune consultation pour le moment.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-3">Titre</th>
                <th className="px-4 py-3">Auteur</th>
                <th className="px-4 py-3">Date de consultation</th>
                <th className="px-4 py-3">Actions</th>
                <th className="px-4 py-3">Favori</th>
              </tr>
            </thead>
            <tbody>
              {consultations.map((doc) => (
                <tr key={doc.id} className="border-t">
                  <td className="px-4 py-2">{doc.title}</td>
                  <td className="px-4 py-2">{doc.author}</td>
                  <td className="px-4 py-2">{doc.date}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                      onClick={() => handleVoir(doc)}
                    >
                      <Eye size={14} className="inline mr-1" /> Voir
                    </button>
                    <button
                      className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                      onClick={() => handleTelecharger(doc)}
                    >
                      <Download size={14} className="inline mr-1" /> Télécharger
                    </button>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      className="px-2 py-1 text-yellow-500 border border-yellow-400 rounded hover:bg-yellow-100"
                      onClick={() => handleFavori(doc)}
                    >
                      <Star size={16} className="inline" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ConsultationEnseignant;
