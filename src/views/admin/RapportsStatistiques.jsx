// 📈 Page : Statistiques – Admin UIDT
// Affiche des résumés + graphiques dynamiques avec recharts

import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts';

const RapportsStatistiques = () => {
  // 📊 Données simulées
  const resume = {
    utilisateurs: 354,
    documents: 212,
    emprunts: 67,
    reservations: 31,
    consultations: 1200,
  };

  const topDocuments = [
    { titre: 'JavaScript moderne', emprunts: 22 },
    { titre: 'Méthodologie Recherche', emprunts: 17 },
    { titre: 'Droit Constitutionnel', emprunts: 15 },
  ];

  const empruntsParMois = [
    { mois: 'Jan', emprunts: 10, reservations: 4 },
    { mois: 'Fév', emprunts: 18, reservations: 6 },
    { mois: 'Mars', emprunts: 12, reservations: 5 },
    { mois: 'Avr', emprunts: 16, reservations: 9 },
    { mois: 'Mai', emprunts: 11, reservations: 7 },
  ];

  const repartitionTypesDocs = [
    { name: 'Livre', value: 120 },
    { name: 'Mémoire', value: 40 },
    { name: 'Thèse', value: 30 },
    { name: 'Rapport', value: 22 },
  ];

  const repartitionRoles = [
    { name: 'Étudiants', value: 220 },
    { name: 'Enseignants', value: 110 },
    { name: 'Admins', value: 1 },
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">📊 Statistiques & Rapports</h1>

      {/* Résumés */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="bg-white shadow rounded p-4 text-center">
          <h2 className="text-2xl font-bold text-blue-600">{resume.utilisateurs}</h2>
          <p className="text-sm text-gray-600">Utilisateurs</p>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <h2 className="text-2xl font-bold text-green-600">{resume.documents}</h2>
          <p className="text-sm text-gray-600">Documents</p>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <h2 className="text-2xl font-bold text-yellow-600">{resume.emprunts}</h2>
          <p className="text-sm text-gray-600">Emprunts</p>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <h2 className="text-2xl font-bold text-purple-600">{resume.reservations}</h2>
          <p className="text-sm text-gray-600">Réservations</p>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <h2 className="text-2xl font-bold text-red-600">{resume.consultations}</h2>
          <p className="text-sm text-gray-600">Consultations</p>
        </div>
      </div>

      {/* Graphique barres : emprunts vs réservations */}
      <div className="bg-white shadow rounded p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">📦 Emprunts & Réservations par mois</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={empruntsParMois}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mois" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="emprunts" fill="#3B82F6" name="Emprunts" />
            <Bar dataKey="reservations" fill="#10B981" name="Réservations" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Graphiques camembert */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">📘 Types de documents</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={repartitionTypesDocs}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {repartitionTypesDocs.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">👥 Répartition des rôles</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={repartitionRoles}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {repartitionRoles.map((entry, index) => (
                  <Cell key={`role-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top 3 documents */}
      <div className="bg-white shadow rounded p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">⭐ Top 3 des documents les plus empruntés</h3>
        <ul className="space-y-2">
          {topDocuments.map((doc, index) => (
            <li key={index} className="text-sm text-gray-800">
              {index + 1}. <strong>{doc.titre}</strong> – {doc.emprunts} emprunts
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RapportsStatistiques;
