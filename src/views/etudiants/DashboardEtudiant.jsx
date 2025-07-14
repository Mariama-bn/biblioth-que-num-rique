import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Bookmark, Calendar, Bell } from 'lucide-react';

const DashboardEtudiant = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-blue-800 mb-6">Bienvenue sur votre espace étudiant 📚</h1>

      {/* Cartes récapitulatives */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded shadow p-5 flex items-center space-x-4">
          <BookOpen className="text-green-600 w-8 h-8" />
          <div>
            <p className="text-sm text-gray-500">Consultations</p>
            <p className="text-lg font-semibold">12</p>
          </div>
        </div>

        <div className="bg-white rounded shadow p-5 flex items-center space-x-4">
          <Bookmark className="text-blue-600 w-8 h-8" />
          <div>
            <p className="text-sm text-gray-500">Emprunts en cours</p>
            <p className="text-lg font-semibold">3</p>
          </div>
        </div>

        <div className="bg-white rounded shadow p-5 flex items-center space-x-4">
          <Calendar className="text-yellow-500 w-8 h-8" />
          <div>
            <p className="text-sm text-gray-500">Réservations</p>
            <p className="text-lg font-semibold">2</p>
          </div>
        </div>

        <div className="bg-white rounded shadow p-5 flex items-center space-x-4">
          <Bell className="text-red-500 w-8 h-8" />
          <div>
            <p className="text-sm text-gray-500">Notifications</p>
            <p className="text-lg font-semibold">4</p>
          </div>
        </div>
      </div>

      {/* Actions rapides */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded shadow p-6">
          <h2 className="text-lg font-bold mb-4 text-blue-700">📖 Documents récemment consultés</h2>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>📘 Introduction à la Physiologie</li>
            <li>📗 Algorithmes et structures de données</li>
            <li>📙 Histoire du Sénégal</li>
          </ul>
          <Link
            to="/documents"
            className="inline-block mt-4 text-green-600 hover:underline text-sm"
          >
            Voir tous les documents →
          </Link>
        </div>

        <div className="bg-white rounded shadow p-6">
          <h2 className="text-lg font-bold mb-4 text-blue-700">🔔 Dernières notifications</h2>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>✅ Votre réservation pour "Microbiologie Médicale" a été confirmée.</li>
            <li>📅 Le retour du document "Chimie Organique" est prévu demain.</li>
            <li>❗ Le document "Marketing Digital" n’est plus disponible.</li>
          </ul>
          <Link
            to="/etudiant/notifications"
            className="inline-block mt-4 text-green-600 hover:underline text-sm"
          >
            Voir toutes les notifications →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardEtudiant;
