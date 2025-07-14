import React, { useState } from 'react';
import { toast } from 'react-toastify';

const DemandeAcquisition = () => {
  const [formData, setFormData] = useState({
    titre: '',
    auteur: '',
    type: '',
    justification: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulation d'envoi
    console.log('Demande soumise :', formData);
    toast.success("✅ Demande d'acquisition envoyée à l'admin");

    setFormData({
      titre: '',
      auteur: '',
      type: '',
      justification: '',
    });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">📚 Demande d'acquisition</h2>
      <p className="text-sm text-gray-500 mb-4">Ce formulaire permet de proposer un document à ajouter à la bibliothèque.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">Titre du document</label>
          <input
            type="text"
            name="titre"
            value={formData.titre}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ex: L'économie du développement en Afrique"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Auteur / Maison d'édition</label>
          <input
            type="text"
            name="auteur"
            value={formData.auteur}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Ex: Joseph Stiglitz ou Editions L'Harmattan"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Type de document</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Sélectionner --</option>
            <option value="Livre">Livre</option>
            <option value="Article">Article scientifique</option>
            <option value="Revue">Revue ou périodique</option>
            <option value="Autre">Autre</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Justification de la demande</label>
          <textarea
            name="justification"
            value={formData.justification}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            placeholder="Pourquoi ce document serait utile aux enseignants ou étudiants ?"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          📤 Envoyer la demande
        </button>
      </form>
    </div>
  );
};

export default DemandeAcquisition;
