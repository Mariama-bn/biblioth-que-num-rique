import React, { useState } from 'react';
import { Bell, CheckCircle, XCircle } from 'lucide-react';

const initialNotifications = [
  {
    id: 1,
    message: 'Votre réservation pour "Microbiologie Médicale" a été confirmée.',
    date: '2025-07-10 10:15',
    read: false,
    type: 'success', // succès, info, warning, erreur
  },
  {
    id: 2,
    message: 'Le retour du document "Chimie Organique" est prévu demain.',
    date: '2025-07-09 14:30',
    read: true,
    type: 'info',
  },
  {
    id: 3,
    message: 'Le document "Marketing Digital" n’est plus disponible.',
    date: '2025-07-08 09:00',
    read: false,
    type: 'error',
  },
];

const typeColors = {
  success: 'text-green-600 bg-green-100',
  info: 'text-blue-600 bg-blue-100',
  warning: 'text-yellow-600 bg-yellow-100',
  error: 'text-red-600 bg-red-100',
};

const NotificationsEtudiant = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })));
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-blue-800">🔔 Mes Notifications</h1>
        <button
          onClick={markAllAsRead}
          className="text-sm text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded shadow"
          disabled={notifications.every((notif) => notif.read)}
          title="Marquer tout comme lu"
        >
          Tout marquer comme lu
        </button>
      </div>

      {notifications.length === 0 ? (
        <p className="text-gray-600">Vous n'avez aucune notification.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map(({ id, message, date, read, type }) => (
            <li
              key={id}
              className={`p-4 rounded shadow flex items-start space-x-4 ${
                read ? 'bg-white' : 'bg-gray-200'
              }`}
            >
              <div
                className={`flex-shrink-0 p-2 rounded-full ${
                  typeColors[type] || 'bg-gray-300'
                }`}
                title={`Type : ${type}`}
              >
                {type === 'success' && <CheckCircle size={24} />}
                {type === 'info' && <Bell size={24} />}
                {type === 'warning' && <Bell size={24} />}
                {type === 'error' && <XCircle size={24} />}
              </div>
              <div className="flex-1">
                <p className={`text-sm ${read ? 'text-gray-600' : 'text-gray-900 font-semibold'}`}>
                  {message}
                </p>
                <p className="text-xs text-gray-500 mt-1">{date}</p>
              </div>
              {!read && (
                <button
                  onClick={() => markAsRead(id)}
                  className="text-sm text-green-600 hover:underline self-center"
                  title="Marquer comme lu"
                >
                  Marquer lu
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationsEtudiant;
