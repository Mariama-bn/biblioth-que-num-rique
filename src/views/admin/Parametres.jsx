// ⚙️ Page : Paramètres – Admin UIDT
// Permet à l’administrateur de gérer son profil, la sécurité et les options système.

import React, { useState } from 'react';

const Admin = () => {
  const [profil, setProfil] = useState({
    nom: 'Admin UIDT',
    email: 'admin@uidt.sn'
  });
  const [motDePasse, setMotDePasse] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setProfil({ ...profil, [e.target.name]: e.target.value });
  };

  const handleSauvegarder = () => {
    setMessage('✅ Modifications sauvegardées.');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleExporterBase = () => {
    const blob = new Blob([JSON.stringify(profil)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'base_uidt.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleChangerMotDePasse = () => {
    if (motDePasse.length < 6) {
      setMessage('❌ Le mot de passe doit contenir au moins 6 caractères.');
    } else {
      setMessage('✅ Mot de passe mis à jour.');
      setMotDePasse('');
    }
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800">⚙️ Paramètres administrateur</h1>

      {/* ✅ Section Profil */}
      <section className="bg-white shadow rounded p-6">
        <h2 className="text-xl font-semibold mb-4">👤 Profil</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom complet</label>
            <input
              type="text"
              name="nom"
              value={profil.nom}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Adresse email</label>
            <input
              type="email"
              name="email"
              value={profil.email}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border rounded"
            />
          </div>
          <button
            onClick={handleSauvegarder}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            💾 Sauvegarder
          </button>
        </div>
      </section>

      {/* 🔒 Section Sécurité */}
      <section className="bg-white shadow rounded p-6">
        <h2 className="text-xl font-semibold mb-4">🔒 Sécurité</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nouveau mot de passe</label>
            <input
              type="password"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              className="mt-1 w-full px-3 py-2 border rounded"
              placeholder="Entrez un mot de passe sécurisé"
            />
          </div>
          <button
            onClick={handleChangerMotDePasse}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            🔐 Enregistrer le mot de passe
          </button>
        </div>
      </section>

      {/* 🖥️ Section Système */}
      <section className="bg-white shadow rounded p-6">
        <h2 className="text-xl font-semibold mb-4">🖥️ Système</h2>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={handleExporterBase}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            📁 Exporter la base (JSON)
          </button>
        </div>
      </section>

      {message && <p className="text-center text-sm text-blue-600 font-medium">{message}</p>}
    </div>
  );
};

export default Admin;
