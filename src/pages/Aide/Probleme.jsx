import React from 'react';
import { Link } from 'react-router-dom';

const Probleme = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded shadow p-6">
        <Link to="/" className="text-green-600 hover:underline block mb-4">← Retour à l’accueil</Link>
        <h1 className="text-3xl font-bold mb-4 text-blue-800">Signaler un problème</h1>
        <p className="mb-6">Veuillez remplir ce formulaire pour nous informer d’un bug ou d’un souci technique :</p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="w-full px-4 py-2 border rounded"
          />
          <textarea
            rows="5"
            placeholder="Décrivez le problème rencontré..."
            className="w-full px-4 py-2 border rounded"
          ></textarea>
          <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">
            Envoyer le signalement
          </button>
        </form>
      </div>
    </div>
  );
};

export default Probleme;
