// src/views/enseignants/LectureDocumentEnseignant.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { allDocuments } from '../../data/documents';

const LectureDocumentEnseignant = () => {
  // Convertir l'objet allDocuments en tableau pour map()
  const documentsArray = Object.values(allDocuments);

  return (
    <div className="bg-white shadow rounded p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-600">Liste des documents disponibles</h1>

      {documentsArray.length === 0 ? (
        <p className="text-gray-600">Aucun document disponible.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Titre</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Auteur</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Filière</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">UFR</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-blue-700 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {documentsArray.map((doc) => (
                <tr key={doc.id} className="hover:bg-blue-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">{doc.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{doc.author}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{doc.filiere}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 uppercase">{doc.ufr}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <Link
                      to={`/enseignant/lecture/${doc.id}`}
                      className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition"
                      title={`Lire ${doc.title}`}
                    >
                      Lire
                    </Link>
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

export default LectureDocumentEnseignant;
