import React, { useState } from 'react';
import { toast } from 'react-toastify';

const DepotDocument = () => {
  const [formData, setFormData] = useState({
    titre: '',
    auteur: '',
    description: '',
    ufr: '',
    filiere: '',
    fichier: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'fichier') {
      setFormData({ ...formData, fichier: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fichier) {
      toast.error("Veuillez importer un fichier PDF.");
      return;
    }

    // Simuler l’envoi
    toast.success(`✅ Document "${formData.titre}" envoyé à l’admin avec succès !`);

    // Réinitialiser le formulaire
    setFormData({
      titre: '',
      auteur: '',
      description: '',
      ufr: '',
      filiere: '',
      fichier: null,
    });

    // Reset du champ file manuellement
    document.getElementById("fileInput").value = "";
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">📤 Dépôt de document</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">Titre du document</label>
          <input
            type="text"
            name="titre"
            value={formData.titre}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Auteur</label>
          <input
            type="text"
            name="auteur"
            value={formData.auteur}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={3}
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400"
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">UFR</label>
            <select
              name="ufr"
              value={formData.ufr}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded bg-white focus:outline-none focus:ring focus:ring-blue-400"
            >
              <option value="">-- Choisir une UFR --</option>
              <option value="sante">UFR Santé</option>
              <option value="sciences">UFR Sciences</option>
              <option value="lettres">UFR Lettres</option>
              <option value="economie">UFR Économie</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Filière</label>
            <input
              type="text"
              name="filiere"
              value={formData.filiere}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Fichier PDF</label>
          <input
            type="file"
            name="fichier"
            id="fileInput"
            accept="application/pdf"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded bg-white text-sm"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
          >
            📩 Envoyer le document
          </button>
        </div>
      </form>
    </div>
  );
};

export default DepotDocument;
