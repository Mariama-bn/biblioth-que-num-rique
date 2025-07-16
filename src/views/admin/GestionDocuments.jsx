import React, { useState } from "react";
import { FaFileUpload, FaImage, FaBook } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const domaines = [
  "Développement & Administration d'applications",
  "Ingénierie Juridique",
  "Santé Communautaire",
  "Développement Durable",
  "Systèmes Réseaux & Télécoms",
];

const GestionDocuments = () => {
  const [documents, setDocuments] = useState([
    {
      titre: "JavaScript avancé",
      categorie: "Développement & Administration d'applications",
      acces: "Public",
      auteur: "Ali Fall",
      isbn: "978-3-16-148410-0",
      description: "Un guide approfondi sur JavaScript et ses concepts avancés.",
      motsCles: "JavaScript, Programmation, Web",
      fichierNom: "javascript-avance.pdf",
      imageNom: "js-cover.jpg",
    },
    {
      titre: "Droit constitutionnel sénégalais",
      categorie: "Ingénierie Juridique",
      acces: "Privé",
      auteur: "Fatou Diop",
      isbn: "",
      description: "Les principes fondamentaux de la constitution au Sénégal.",
      motsCles: "Droit, Constitution, Sénégal",
      fichierNom: "droit-constitutionnel.pdf",
      imageNom: "droit.jpg",
    },
  ]);

  const [search, setSearch] = useState("");
  const [selectedDomaine, setSelectedDomaine] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formDataModern, setFormDataModern] = useState({
    titre: "",
    categorie: "",
    acces: "Public",
    auteur: "",
    isbn: "",
    description: "",
    motsCles: "",
    fichier: null,
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataModern({ ...formDataModern, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormDataModern({ ...formDataModern, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDoc = {
      titre: formDataModern.titre,
      categorie: formDataModern.categorie,
      acces: formDataModern.acces,
      auteur: formDataModern.auteur,
      isbn: formDataModern.isbn,
      description: formDataModern.description,
      motsCles: formDataModern.motsCles,
      fichierNom: formDataModern.fichier ? formDataModern.fichier.name : "",
      imageNom: formDataModern.image ? formDataModern.image.name : "",
    };

    setDocuments([...documents, newDoc]);
    setIsModalOpen(false);

    setFormDataModern({
      titre: "",
      categorie: "",
      acces: "Public",
      auteur: "",
      isbn: "",
      description: "",
      motsCles: "",
      fichier: null,
      image: null,
    });
  };

  const filteredDocuments = documents.filter((doc) => {
    const searchLower = search.toLowerCase();
    const matchSearch =
      doc.titre.toLowerCase().includes(searchLower) ||
      doc.categorie.toLowerCase().includes(searchLower) ||
      doc.auteur.toLowerCase().includes(searchLower) ||
      doc.description.toLowerCase().includes(searchLower);
    const matchDomaine = selectedDomaine ? doc.categorie === selectedDomaine : true;
    return matchSearch && matchDomaine;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto relative">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Gestion des documents</h2>
          <p className="text-gray-600">Ajoutez, modifiez ou consultez les documents de la bibliothèque.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
        >
          + Ajouter un document
        </button>
      </div>

      {/* === MODAL FORMULAIRE === */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-start pt-10 overflow-auto">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 relative mx-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-600"
            >
              <IoMdClose size={24} />
            </button>

            {/* === Ton formulaire copié-collé ici sans modification === */}
            <form onSubmit={handleSubmit}>
              <h3 className="text-xl font-semibold text-green-600 mb-6 flex items-center gap-2">
                <FaBook /> Ajouter une ressource
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="titre" className="block text-sm font-medium text-gray-700">
                      Titre <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="titre"
                      name="titre"
                      value={formDataModern.titre}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-green-500 focus:border-green-500"
                      placeholder="Titre de la ressource"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Catégorie</label>
                      <select
                        name="categorie"
                        value={formDataModern.categorie}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="">Sélectionner</option>
                        {domaines.map((dom, i) => (
                          <option key={i} value={dom}>
                            {dom}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Accès</label>
                      <select
                        name="acces"
                        value={formDataModern.acces}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="Public">🌐 Public</option>
                        <option value="Privé">🔒 Privé</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Auteur</label>
                      <input
                        name="auteur"
                        value={formDataModern.auteur}
                        onChange={handleInputChange}
                        placeholder="Nom de l'auteur"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">ISBN</label>
                      <input
                        name="isbn"
                        value={formDataModern.isbn}
                        onChange={handleInputChange}
                        placeholder="ISBN (optionnel)"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="description"
                      value={formDataModern.description}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Décrivez la ressource..."
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Mots-clés <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="motsCles"
                      value={formDataModern.motsCles}
                      onChange={handleInputChange}
                      required
                      placeholder="Mots-clés séparés par des virgules"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-4 border border-dashed rounded-md text-center">
                    <h4 className="text-green-700 mb-2 flex items-center justify-center gap-2">
                      <FaFileUpload /> Fichier principal <span className="text-red-500">*</span>
                    </h4>
                    <input
                      type="file"
                      name="fichier"
                      accept=".pdf,.doc,.docx,.txt"
                      onChange={handleFileChange}
                      required
                      className="mx-auto"
                    />
                    <small className="block mt-2 text-gray-500">PDF, DOCX, DOC, TXT (max. 50MB)</small>
                  </div>
                  <div className="p-4 border border-dashed rounded-md text-center">
                    <h5 className="text-yellow-600 mb-2 flex items-center justify-center gap-2">
                      <FaImage /> Image (optionnel)
                    </h5>
                    <input
                      type="file"
                      name="image"
                      accept=".jpg,.jpeg,.png,.webp"
                      onChange={handleFileChange}
                      className="mx-auto"
                    />
                    <small className="block mt-2 text-gray-500">JPEG, PNG, WebP (max. 10MB)</small>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="reset"
                  onClick={() =>
                    setFormDataModern({
                      titre: "",
                      categorie: "",
                      acces: "Public",
                      auteur: "",
                      isbn: "",
                      description: "",
                      motsCles: "",
                      fichier: null,
                      image: null,
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

      {/* Barre de recherche et filtre */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-start gap-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher un document par titre, catégorie, auteur..."
          className="flex-grow md:flex-grow-0 md:w-1/2 px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
        <select
          value={selectedDomaine}
          onChange={(e) => setSelectedDomaine(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        >
          <option value="">-- Filtrer par domaine --</option>
          {domaines.map((dom, i) => (
            <option key={i} value={dom}>
              {dom}
            </option>
          ))}
        </select>
      </div>

      {/* Tableau */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-left text-gray-700">
          <thead className="bg-green-100 border-b border-green-300">
            <tr>
              <th className="px-4 py-3 border-b border-green-200">Titre</th>
              <th className="px-4 py-3 border-b border-green-200">Catégorie</th>
              <th className="px-4 py-3 border-b border-green-200">Accès</th>
              <th className="px-4 py-3 border-b border-green-200">Auteur</th>
              <th className="px-4 py-3 border-b border-green-200">ISBN</th>
              <th className="px-4 py-3 border-b border-green-200 max-w-xs">Description</th>
              <th className="px-4 py-3 border-b border-green-200">Mots-clés</th>
              <th className="px-4 py-3 border-b border-green-200">Fichier</th>
              <th className="px-4 py-3 border-b border-green-200">Image</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocuments.length === 0 ? (
              <tr>
                <td colSpan="9" className="text-center p-4 text-gray-500">
                  Aucun document trouvé.
                </td>
              </tr>
            ) : (
              filteredDocuments.map((doc, i) => (
                <tr key={i} className="border-b last:border-0 hover:bg-green-50 transition">
                  <td className="px-4 py-3">{doc.titre}</td>
                  <td className="px-4 py-3">{doc.categorie}</td>
                  <td className="px-4 py-3">{doc.acces}</td>
                  <td className="px-4 py-3">{doc.auteur}</td>
                  <td className="px-4 py-3">{doc.isbn}</td>
                  <td className="px-4 py-3 max-w-xs truncate" title={doc.description}>
                    {doc.description}
                  </td>
                  <td className="px-4 py-3">{doc.motsCles}</td>
                  <td className="px-4 py-3">{doc.fichierNom}</td>
                  <td className="px-4 py-3">{doc.imageNom}</td>
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
