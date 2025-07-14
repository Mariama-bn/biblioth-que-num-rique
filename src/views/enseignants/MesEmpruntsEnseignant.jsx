// src/views/enseignants/MesEmpruntsEnseignant.jsx
import React from "react";
import { Download } from "lucide-react";

const empruntsSimules = [
  {
    id: "emprunt1",
    titre: "Pharmacologie Avancée",
    auteur: "Dr. Sow",
    dateEmprunt: "2025-06-25",
    dateRetour: "2025-07-10",
    statut: "En cours"
  },
  {
    id: "emprunt2",
    titre: "Histoire du Sénégal",
    auteur: "Pr. Ndiaye",
    dateEmprunt: "2025-06-10",
    dateRetour: "2025-06-30",
    statut: "Retourné"
  }
];

const MesEmpruntsEnseignant = () => {
  const handleDownload = (titre) => {
    const link = document.createElement("a");
    link.href = "/docs/cours-exemple.pdf"; // simulation du fichier
    link.download = `${titre}.pdf`;
    link.click();
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Mes emprunts</h1>
      <p className="text-gray-600 mb-4">
        Liste des documents empruntés par vous.
      </p>

      <table className="w-full border border-gray-200 rounded overflow-hidden text-sm">
        <thead className="bg-blue-100 text-gray-700">
          <tr>
            <th className="px-4 py-2 border text-left">Titre</th>
            <th className="px-4 py-2 border text-left">Auteur</th>
            <th className="px-4 py-2 border text-left">Date d’emprunt</th>
            <th className="px-4 py-2 border text-left">Date de retour</th>
            <th className="px-4 py-2 border text-center">Statut</th>
            <th className="px-4 py-2 border text-center">Téléchargement</th>
          </tr>
        </thead>
        <tbody>
          {empruntsSimules.map((doc) => (
            <tr key={doc.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{doc.titre}</td>
              <td className="px-4 py-2 border">{doc.auteur}</td>
              <td className="px-4 py-2 border">{doc.dateEmprunt}</td>
              <td className="px-4 py-2 border">{doc.dateRetour}</td>
              <td className="px-4 py-2 border text-center">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    doc.statut === "En cours"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {doc.statut}
                </span>
              </td>
              <td className="px-4 py-2 border text-center">
                <button
                  onClick={() => handleDownload(doc.titre)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded flex items-center gap-1 mx-auto"
                >
                  <Download size={14} /> Télécharger
                </button>
              </td>
            </tr>
          ))}
          {empruntsSimules.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center py-6 text-gray-500">
                Aucun emprunt trouvé.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MesEmpruntsEnseignant;
