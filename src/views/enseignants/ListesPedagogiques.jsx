// src/views/enseignants/ListesPedagogiques.jsx
import React from "react";
import { allDocuments } from "../../data/documents";
import { Download } from "lucide-react";

const ListesPedagogiques = () => {
  const documents = Object.values(allDocuments);

  const handleDownload = (title) => {
    const link = document.createElement("a");
    link.href = "/docs/cours-exemple.pdf"; // Chemin vers ton fichier factice
    link.download = `${title}.pdf`;
    link.click();
  };

  return (
    <div className="bg-white shadow rounded p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Listes pédagogiques</h1>
      <p className="mb-4 text-gray-600">
        Voici la liste des documents pédagogiques validés.
      </p>

      <table className="w-full border border-gray-200 rounded overflow-hidden">
        <thead className="bg-blue-100">
          <tr>
            <th className="text-left px-4 py-2 border">Titre</th>
            <th className="text-left px-4 py-2 border">Auteur</th>
            <th className="text-left px-4 py-2 border">Filière</th>
            <th className="text-left px-4 py-2 border">UFR</th>
            <th className="text-center px-4 py-2 border">Téléchargement</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{doc.title}</td>
              <td className="px-4 py-2 border">{doc.author}</td>
              <td className="px-4 py-2 border">{doc.filiere}</td>
              <td className="px-4 py-2 border">{doc.ufr}</td>
              <td className="px-4 py-2 border text-center">
                <button
                  onClick={() => handleDownload(doc.title)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 mx-auto"
                >
                  <Download size={16} /> Télécharger
                </button>
              </td>
            </tr>
          ))}
          {documents.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center py-6 text-gray-500">
                Aucun document pédagogique disponible.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListesPedagogiques;
