import React, { useState } from "react";
import { FaFileUpload, FaImage, FaFileAlt, FaListAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const typesDocuments = [
  "Livre",
  "Mémoire",
  "Thèse",
  "Cours",
  "Rapport",
  "Article scientifique",
  "Travaux dirigés",
  "Magazine",
  "Document administratif",
  "Autre",
];

const GestionDocuments = () => {
  const [documents, setDocuments] = useState([
    {
      titre: "JavaScript avancé",
      auteur: "Ali Fall",
      resume: "Un guide approfondi sur JavaScript et ses concepts avancés.",
      fichier: "javascript-avance.pdf",
      isbn: "978-3-16-148410-0",
      pageCouverture: "js-cover.jpg",
      typeDocument: "Livre",
      formatFichier: "PDF",
      nombreVues: 123,
      utilisateurId: 1,
      categorieId: 2,
    },
    {
      titre: "Droit constitutionnel sénégalais",
      auteur: "Fatou Diop",
      resume: "Les principes fondamentaux de la constitution au Sénégal.",
      fichier: "droit-constitutionnel.pdf",
      isbn: "",
      pageCouverture: "droit.jpg",
      typeDocument: "Article scientifique",
      formatFichier: "PDF",
      nombreVues: 56,
      utilisateurId: 2,
      categorieId: 4,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    titre: "",
    auteur: "",
    resume: "",
    fichier: null,
    isbn: "",
    pageCouverture: null,
    typeDocument: "",
    formatFichier: "",
    nombreVues: 0,
    utilisateurId: "",
    categorieId: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDoc = {
      titre: formData.titre,
      auteur: formData.auteur,
      resume: formData.resume,
      fichier: formData.fichier ? formData.fichier.name : "",
      isbn: formData.isbn,
      pageCouverture: formData.pageCouverture ? formData.pageCouverture.name : "",
      typeDocument: formData.typeDocument,
      formatFichier: formData.formatFichier,
      nombreVues: Number(formData.nombreVues),
      utilisateurId: Number(formData.utilisateurId),
      categorieId: Number(formData.categorieId),
    };

    setDocuments([...documents, newDoc]);

    setFormData({
      titre: "",
      auteur: "",
      resume: "",
      fichier: null,
      isbn: "",
      pageCouverture: null,
      typeDocument: "",
      formatFichier: "",
      nombreVues: 0,
      utilisateurId: "",
      categorieId: "",
    });

    setIsModalOpen(false);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto relative">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Gestion des documents</h2>
          <p className="text-gray-600">
            Ajoutez, modifiez ou consultez les documents de la bibliothèque.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
        >
          + Ajouter un document
        </button>
      </div>

      {/* MODAL FORMULAIRE */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-start pt-10 overflow-auto">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 relative mx-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-600"
              aria-label="Fermer"
            >
              <IoMdClose size={24} />
            </button>

            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-semibold text-green-600 mb-6 flex items-center gap-2">
                <FaListAlt /> Ajouter une ressource
              </h3>

              {/* Titre */}
              <div>
                <label htmlFor="titre" className="block text-sm font-medium text-gray-700">
                  Titre <span className="text-red-500">*</span>
                </label>
                <input
                  id="titre"
                  name="titre"
                  type="text"
                  value={formData.titre}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2
                    focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Titre du document"
                />
              </div>

              {/* Auteur */}
              <div>
                <label htmlFor="auteur" className="block text-sm font-medium text-gray-700">
                  Auteur <span className="text-red-500">*</span>
                </label>
                <input
                  id="auteur"
                  name="auteur"
                  type="text"
                  value={formData.auteur}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2
                    focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Nom de l'auteur"
                />
              </div>

              {/* Résumé */}
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                  Résumé
                </label>
                <textarea
                  id="resume"
                  name="resume"
                  rows={3}
                  value={formData.resume}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2
                    focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Résumé du document (optionnel)"
                />
              </div>

              {/* Fichier principal */}
              <div>
                <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                  <FaFileUpload /> Fichier principal <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  name="fichier"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2
                    cursor-pointer focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
                <small className="text-gray-500">PDF, DOC, DOCX, TXT (max. 50MB)</small>
              </div>

              {/* Image de couverture */}
              <div>
                <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                  <FaImage /> Image de couverture (optionnel)
                </label>
                <input
                  type="file"
                  name="pageCouverture"
                  accept=".jpg,.jpeg,.png,.webp"
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2
                    cursor-pointer focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
                <small className="text-gray-500">JPEG, PNG, WebP (max. 10MB)</small>
              </div>

              {/* Type de document */}
              <div>
                <label htmlFor="typeDocument" className="block text-sm font-medium text-gray-700">
                  Type de document <span className="text-red-500">*</span>
                </label>
                <select
                  id="typeDocument"
                  name="typeDocument"
                  value={formData.typeDocument}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2
                    focus:outline-none focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">-- Choisir --</option>
                  {typesDocuments.map((type, idx) => (
                    <option key={idx} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Format du fichier */}
              <div>
                <label htmlFor="formatFichier" className="block text-sm font-medium text-gray-700">
                  Format du fichier <span className="text-red-500">*</span>
                </label>
                <input
                  id="formatFichier"
                  name="formatFichier"
                  type="text"
                  value={formData.formatFichier}
                  onChange={handleChange}
                  required
                  placeholder="Ex: PDF, DOCX..."
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2
                    focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>

              {/* Nombre de vues */}
              <div>
                <label htmlFor="nombreVues" className="block text-sm font-medium text-gray-700">
                  Nombre de vues
                </label>
                <input
                  id="nombreVues"
                  name="nombreVues"
                  type="number"
                  min="0"
                  value={formData.nombreVues}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2
                    focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>

              {/* utilisateurId */}
              <div>
                <label htmlFor="utilisateurId" className="block text-sm font-medium text-gray-700">
                  ID Utilisateur <span className="text-red-500">*</span>
                </label>
                <input
                  id="utilisateurId"
                  name="utilisateurId"
                  type="number"
                  min="1"
                  value={formData.utilisateurId}
                  onChange={handleChange}
                  required
                  placeholder="Ex: 1"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2
                    focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>

              {/* categorieId */}
              <div>
                <label htmlFor="categorieId" className="block text-sm font-medium text-gray-700">
                  ID Catégorie <span className="text-red-500">*</span>
                </label>
                <input
                  id="categorieId"
                  name="categorieId"
                  type="number"
                  min="1"
                  value={formData.categorieId}
                  onChange={handleChange}
                  required
                  placeholder="Ex: 2"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2
                    focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>

              {/* Boutons */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="reset"
                  onClick={() =>
                    setFormData({
                      titre: "",
                      auteur: "",
                      resume: "",
                      fichier: null,
                      isbn: "",
                      pageCouverture: null,
                      typeDocument: "",
                      formatFichier: "",
                      nombreVues: 0,
                      utilisateurId: "",
                      categorieId: "",
                    })
                  }
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Barre de recherche */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-start gap-4">
        <input
          type="text"
          value={""}
          readOnly
          placeholder="Recherche non implémentée"
          className="flex-grow md:flex-grow-0 md:w-1/2 px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-100 cursor-not-allowed"
        />
      </div>

      {/* Tableau */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-left text-gray-700">
          <thead className="bg-green-100 border-b border-green-300">
            <tr>
              <th className="px-4 py-3 border-b border-green-200">Titre</th>
              <th className="px-4 py-3 border-b border-green-200">Auteur</th>
              <th className="px-4 py-3 border-b border-green-200 max-w-xs">Résumé</th>
              <th className="px-4 py-3 border-b border-green-200">Fichier</th>
              <th className="px-4 py-3 border-b border-green-200">ISBN</th>
              <th className="px-4 py-3 border-b border-green-200">Image couverture</th>
              <th className="px-4 py-3 border-b border-green-200">Type de document</th>
              <th className="px-4 py-3 border-b border-green-200">Format fichier</th>
              <th className="px-4 py-3 border-b border-green-200">Nombre de vues</th>
              <th className="px-4 py-3 border-b border-green-200">ID Utilisateur</th>
              <th className="px-4 py-3 border-b border-green-200">ID Catégorie</th>
            </tr>
          </thead>
          <tbody>
            {documents.length === 0 ? (
              <tr>
                <td colSpan="11" className="text-center p-4 text-gray-500">
                  Aucun document trouvé.
                </td>
              </tr>
            ) : (
              documents.map((doc, i) => (
                <tr key={i} className="border-b last:border-0 hover:bg-green-50 transition">
                  <td className="px-4 py-3">{doc.titre}</td>
                  <td className="px-4 py-3">{doc.auteur}</td>
                  <td
                    className="px-4 py-3 max-w-xs truncate"
                    title={doc.resume}
                  >
                    {doc.resume}
                  </td>
                  <td className="px-4 py-3">{doc.fichier}</td>
                  <td className="px-4 py-3">{doc.isbn || "-"}</td>
                  <td className="px-4 py-3">{doc.pageCouverture || "-"}</td>
                  <td className="px-4 py-3">{doc.typeDocument}</td>
                  <td className="px-4 py-3">{doc.formatFichier}</td>
                  <td className="px-4 py-3">{doc.nombreVues}</td>
                  <td className="px-4 py-3">{doc.utilisateurId}</td>
                  <td className="px-4 py-3">{doc.categorieId}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GestionDocuments;
