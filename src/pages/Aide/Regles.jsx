import React from 'react';
import { Link } from 'react-router-dom';

const Regles = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded shadow p-6">
        <Link to="/" className="text-green-600 hover:underline block mb-4">← Retour à l’accueil</Link>
        <h1 className="text-3xl font-bold mb-4 text-blue-800">Règles d’utilisation</h1>
        <ul className="list-disc pl-5 space-y-2">
          <li>🔒 Ne partagez pas vos identifiants avec d'autres personnes.</li>
          <li>📥 N’utilisez les documents que dans un cadre académique.</li>
          <li>📚 Ne modifiez ou ne republiez aucun contenu sans autorisation.</li>
          <li>❌ Toute tentative de piratage sera sanctionnée.</li>
        </ul>
      </div>
    </div>
  );
};

export default Regles;
