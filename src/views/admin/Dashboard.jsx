import React from "react";
import {
  Users,
  FileText,
  BookOpen,
  CalendarCheck,
  FilePlus,
  BarChart3,
  Bell,
  MessageSquare,
  Settings,
} from "lucide-react";

const stats = [
  {
    title: "Utilisateurs",
    value: 145,
    icon: <Users size={26} />,
    color: "bg-blue-100 text-blue-800",
  },
  {
    title: "Documents",
    value: 320,
    icon: <FileText size={26} />,
    color: "bg-green-100 text-green-800",
  },
  {
    title: "Emprunts",
    value: 72,
    icon: <BookOpen size={26} />,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    title: "Réservations",
    value: 58,
    icon: <CalendarCheck size={26} />,
    color: "bg-purple-100 text-purple-800",
  },
];

const quickLinks = [
  {
    title: "Nouvel utilisateur",
    icon: <Users size={20} />,
    link: "/admin/utilisateurs",
  },
  {
    title: "Ajouter un document",
    icon: <FilePlus size={20} />,
    link: "/admin/documents",
  },
  {
    title: "Voir statistiques",
    icon: <BarChart3 size={20} />,
    link: "/admin/statistiques",
  },
  {
    title: "Paramètres",
    icon: <Settings size={20} />,
    link: "/admin/parametres",
  },
];

const recentActivities = [
  {
    time: "Il y a 10 min",
    description: "Un nouvel utilisateur s’est inscrit.",
    icon: <Users size={18} />,
  },
  {
    time: "Il y a 30 min",
    description: "Document ‘Blockchain.pdf’ a été ajouté.",
    icon: <FileText size={18} />,
  },
  {
    time: "Il y a 1h",
    description: "Réservation validée pour l’étudiant Ali.",
    icon: <CalendarCheck size={18} />,
  },
  {
    time: "Il y a 2h",
    description: "Nouveau message reçu via le formulaire de contact.",
    icon: <MessageSquare size={18} />,
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-10">
      {/* Titre */}
      <h1 className="text-3xl font-bold text-gray-800">📊 Tableau de bord - Admin</h1>

      {/* Statistiques */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`flex items-center space-x-4 p-5 rounded-lg shadow ${stat.color}`}
          >
            <div className="bg-white p-2 rounded-full">{stat.icon}</div>
            <div>
              <p className="text-sm">{stat.title}</p>
              <p className="text-2xl font-semibold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Activité récente + accès rapide */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Activités */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Bell size={20} className="text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-800">Activités récentes</h2>
          </div>
          <ul className="space-y-4">
            {recentActivities.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <div className="text-blue-500 mt-1">{item.icon}</div>
                <div>
                  <p className="text-sm text-gray-700">{item.description}</p>
                  <span className="text-xs text-gray-400">{item.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Accès rapide */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Settings size={20} className="text-green-600" />
            <h2 className="text-lg font-semibold text-gray-800">Accès rapide</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.link}
                className="flex items-center p-3 border rounded hover:bg-gray-50 transition"
              >
                <div className="text-gray-700 mr-3">{link.icon}</div>
                <span className="text-sm text-gray-800">{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Section personnalisable */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">
          Remarques importantes
        </h2>
        <p className="text-sm text-gray-600">
          N’oubliez pas de vérifier les demandes en attente et d’exporter les rapports
          hebdomadaires. Vous pouvez configurer des notifications personnalisées depuis
          les paramètres.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
