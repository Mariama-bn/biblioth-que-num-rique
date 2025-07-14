import React, { useState } from 'react';
import { Eye, Download, Heart, HeartOff } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fakeConsultations = [
  {
    id: 'doc1',
    titre: 'Introduction à la biologie',
    auteur: 'Dr Awa Ba',
    lien: '/docs/biologie.pdf',
  },
  {
    id: 'doc2',
    titre: 'Histoire contemporaine de l’Afrique',
    auteur: 'Pr Mamadou Sarr',
    lien: '/docs/histoire.pdf',
  },
];

const ConsultationEtudiant = () => {
  const [favoris, setFavoris] = useState([]);
  
  const toggleFavori = (docId) => {
    if (favoris.includes(docId)) {
      setFavoris(favoris.filter(id => id !== docId));
      toast.info("❌ Retiré des favoris");
    } else {
      setFavoris([...favoris, docId]);
      toast.success("✅ Ajouté aux favoris !");
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-blue-800 mb-6">📄 Mes Consultations récentes</h1>

      {fakeConsultations.length === 0 ? (
        <p className="text-gray-600">Aucun document consulté récemment.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-4 py-3">Titre</th>
                <th className="px-4 py-3">Auteur</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {fakeConsultations.map((doc) => (
                <tr key={doc.id} className="border-t">
                  <td className="px-4 py-2">{doc.titre}</td>
                  <td className="px-4 py-2">{doc.auteur}</td>
                  <td className="px-4 py-2 space-x-2">
                    {/* Bouton Voir */}
                    <a
                      href={doc.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 inline-flex items-center"
                    >
                      <Eye size={14} className="mr-1" />
                      Voir
                    </a>

                    {/* Bouton Télécharger */}
                    <a
                      href={doc.lien}
                      download
                      className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700 inline-flex items-center"
                    >
                      <Download size={14} className="mr-1" />
                      Télécharger
                    </a>

                    {/* Bouton Favori */}
                    <button
                      onClick={() => toggleFavori(doc.id)}
                      className={`px-3 py-1 text-sm rounded inline-flex items-center ${
                        favoris.includes(doc.id)
                          ? 'bg-red-600 text-white hover:bg-red-700'
                          : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
                      }`}
                    >
                      {favoris.includes(doc.id) ? (
                        <>
                          <HeartOff size={14} className="mr-1" />
                          Retirer
                        </>
                      ) : (
                        <>
                          <Heart size={14} className="mr-1" />
                          Favori
                        </>
                      )}
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

export default ConsultationEtudiant;
