import { useState } from "react";
import { UserPlus, Search, Eye, Edit2, Ban, PlusCircle } from 'lucide-react';

export default function Utilisateurs() {
  const [showModal, setShowModal] = useState(false);

  const utilisateurs = [
    {
      id: 1,
      nom: "Fatou Ndiaye",
      email: "fatou@uadb.sn",
      role: "Étudiant",
      statut: "Actif",
      inscrit: "2024-04-01",
    },
    {
      id: 2,
      nom: "Cheikh Sarr",
      email: "cheikh@uadb.sn",
      role: "Admin",
      statut: "Actif",
      inscrit: "2024-01-12",
    },
    {
      id: 3,
      nom: "Awa Diop",
      email: "awa@uadb.sn",
      role: "Bibliothécaire",
      statut: "Bloqué",
      inscrit: "2023-11-20",
    },
  ];

  return (
    <div className="px-4 py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Gestion des utilisateurs</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <UserPlus className="w-5 h-5" />
          <span>Ajouter un utilisateur</span>
        </button>
      </div>

      {/* Barre de recherche */}
      <div className="relative max-w-md">
        <Search className="absolute top-3 left-3 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Rechercher par nom ou email"
          className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Tableau */}
      <div className="overflow-x-auto bg-white rounded-xl shadow border">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3">Nom</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Rôle</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3">Inscrit le</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {utilisateurs.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{user.nom}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      user.statut === "Actif"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.statut}
                  </span>
                </td>
                <td className="px-4 py-2">{user.inscrit}</td>
                <td className="px-4 py-2 text-center space-x-2">
                  <button className="p-1 rounded hover:bg-gray-100">
                    <Eye className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-1 rounded hover:bg-gray-100">
                    <Edit2 className="w-4 h-4 text-blue-600" />
                  </button>
                  <button className="p-1 rounded hover:bg-gray-100">
                    <Ban className="w-4 h-4 text-red-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal - Ajouter un utilisateur */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-4">Ajouter un utilisateur</h2>
            <form className="space-y-4">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">Nom</label>
                  <input type="text" className="w-full border px-3 py-2 rounded" />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">Prénom</label>
                  <input type="text" className="w-full border px-3 py-2 rounded" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
                <input type="password" className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Rôle</label>
                <select className="w-full border px-3 py-2 rounded">
                  <option>Étudiant</option>
                  <option>Bibliothécaire</option>
                  <option>Admin</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
