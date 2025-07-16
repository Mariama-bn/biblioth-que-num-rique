import React, { useState } from "react";
import { FaEye, FaDownload, FaStar, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FavorisEnseignants = () => {
  const navigate = useNavigate();

  const [documents, setDocuments] = useState([
    {
      id: 1,
      titre: "Algorithmique avancée",
      categorie: "Développement & Administration d'applications",
      auteur: "Dr. Ndiaye",
      isFavori: true,
      fichierUrl: "/fichiers/algorithmique.pdf",
    },
    {
      id: 2,
      titre: "Législation sénégalaise",
      categorie: "Ingénierie Juridique",
      auteur: "Pr. Sow",
      isFavori: false,
      fichierUrl: "/fichiers/legislation.pdf",
    },
    {
      id: 3,
      titre: "Méthodes de recherche en santé",
      categorie: "Santé Communautaire",
      auteur: "Dr. Ba",
      isFavori: true,
      fichierUrl: "/fichiers/recherche-sante.pdf",
    },
  ]);

  const toggleFavori = (id) => {
    setDocuments((prev) =>
      prev.map((doc) =>
        doc.id === id ? { ...doc, isFavori: !doc.isFavori } : doc
      )
    );
  };

  const consulterDocument = (id) => {
    navigate(`/enseignant/lecture-document/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">⭐ Documents favoris</h2>

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-left text-gray-700">
          <thead className="bg-green-100 border-b border-green-300">
            <tr>
              <th className="px-4 py-3 border-b border-green-200">Titre</th>
              <th className="px-4 py-3 border-b border-green-200">Catégorie</th>
              <th className="px-4 py-3 border-b border-green-200">Auteur</th>
              <th className="px-4 py-3 border-b border-green-200 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id} className="border-b hover:bg-green-50 transition">
                <td className="px-4 py-3">{doc.titre}</td>
                <td className="px-4 py-3">{doc.categorie}</td>
                <td className="px-4 py-3">{doc.auteur}</td>
                <td className="px-4 py-3 text-center">
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={() => consulterDocument(doc.id)}
                      className="text-green-600 hover:text-green-800"
                      title="Consulter"
                    >
                      <FaEye />
                    </button>

                    <a
                      href={doc.fichierUrl}
                      download
                      className="text-blue-600 hover:text-blue-800"
                      title="Télécharger"
                    >
                      <FaDownload />
                    </a>

                    <button
                      onClick={() => toggleFavori(doc.id)}
                      className={`${
                        doc.isFavori ? "text-yellow-500" : "text-gray-400"
                      } hover:text-yellow-600`}
                      title={
                        doc.isFavori ? "Retirer des favoris" : "Ajouter aux favoris"
                      }
                    >
                      {doc.isFavori ? <FaStar /> : <FaRegStar />}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {documents.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  Aucun document dans vos favoris.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavorisEnseignants;
