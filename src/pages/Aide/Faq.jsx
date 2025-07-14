import React from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded shadow p-6">
        <Link to="/" className="text-green-600 hover:underline block mb-4">← Retour à l’accueil</Link>
        <h1 className="text-3xl font-bold mb-4 text-blue-800">Foire aux Questions</h1>
        <div className="space-y-4">
          <div>
            <h2 className="font-semibold text-lg">📚 Comment accéder aux documents ?</h2>
            <p>Vous pouvez explorer les documents depuis l’accueil ou utiliser la barre de recherche.</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">💻 Ai-je besoin d’un compte ?</h2>
            <p>Oui, pour consulter ou télécharger certains documents, un compte est requis.</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">🔒 Mes informations sont-elles sécurisées ?</h2>
            <p>Oui, nous protégeons vos données selon les normes en vigueur.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
