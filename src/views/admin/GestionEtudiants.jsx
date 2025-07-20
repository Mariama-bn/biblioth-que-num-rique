import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Pencil, ToggleLeft, ToggleRight } from 'lucide-react';

const filieres = [
  "Management informatisé des organisations",
  "Management du tourisme et de l'hotellerie",
  "Banque finance et assurance",
  "Mathématiques et applications",
  "Réseaux et télécoms",
  "Génie logiciel",
  "Médecine",
  "Pharmacie",
  "Biologie médicale",
  "Ingénieur de conception en génie civil",
  "Ingénieur de conception en géotechnique",
  "Ingénieur de conception géomètre topographe",
];

const initialUsers = [
  { id: 1, prenom: 'Ali', nom: 'Fall', email: 'ali.fall@uadb.edu.sn', filiere: 'Génie logiciel', actif: true },
  { id: 2, prenom: 'Fatou', nom: 'Diop', email: 'fatou.diop@uadb.edu.sn', filiere: 'Médecine', actif: true },
  { id: 3, prenom: 'Moussa', nom: 'Ba', email: 'moussa.ba@uadb.edu.sn', filiere: 'Banque finance et assurance', actif: false },
  { id: 4, prenom: 'Sokhna', nom: 'Sy', email: 'sokhna.sy@uadb.edu.sn', filiere: 'Mathématiques et applications', actif: true },
  { id: 5, prenom: 'Oumar', nom: 'Ndiaye', email: 'oumar.ndiaye@uadb.edu.sn', filiere: 'Réseaux et télécoms', actif: true },
  { id: 6, prenom: 'Awa', nom: 'Sarr', email: 'awa.sarr@uadb.edu.sn', filiere: 'Pharmacie', actif: true },
];

const GestionEtudiants = () => {
  const [users, setUsers] = useState(initialUsers);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    filiere: '',
  });
  const [editingUser, setEditingUser] = useState(null);
  const [search, setSearch] = useState('');
  const [selectedFiliere, setSelectedFiliere] = useState('');

  const openForm = (user = null) => {
    if (user) {
      setFormData({ ...user });
      setEditingUser(user);
    } else {
      setFormData({ prenom: '', nom: '', email: '', filiere: '' });
      setEditingUser(null);
    }
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      const updatedUsers = users.map((u) =>
        u.id === editingUser.id ? { ...formData, id: editingUser.id, actif: editingUser.actif } : u
      );
      setUsers(updatedUsers);
    } else {
      const newUser = {
        ...formData,
        id: users.length + 1,
        actif: true,
      };
      setUsers([...users, newUser]);
    }
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleActif = (id) => {
    const updated = users.map((u) =>
      u.id === id ? { ...u, actif: !u.actif } : u
    );
    setUsers(updated);
  };

  const filteredUsers = users.filter((u) => {
    const matchSearch =
      u.prenom.toLowerCase().includes(search.toLowerCase()) ||
      u.nom.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());

    const matchFiliere = selectedFiliere ? u.filiere === selectedFiliere : true;

    return matchSearch && matchFiliere;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">👥 Gestion des Étudiants</h1>
        <button
          onClick={() => openForm()}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          <Plus size={18} />
          Ajouter un étudiant
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="🔍 Rechercher par prénom, nom ou email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded shadow-sm"
        />
        <select
          value={selectedFiliere}
          onChange={(e) => setSelectedFiliere(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded shadow-sm"
        >
          <option value="">Toutes les filières</option>
          {filieres.map((filiere, index) => (
            <option key={index} value={filiere}>{filiere}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white shadow rounded">
          <thead className="bg-gray-100">
            <tr className="text-left text-sm text-gray-600">
              <th className="p-3">Prénom</th>
              <th className="p-3">Nom</th>
              <th className="p-3">Email</th>
              <th className="p-3">Filière</th>
              <th className="p-3">Statut</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-t text-sm">
                <td className="p-3">{user.prenom}</td>
                <td className="p-3">{user.nom}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.filiere}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${user.actif ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {user.actif ? 'Actif' : 'Inactif'}
                  </span>
                </td>
                <td className="p-3 flex items-center justify-center gap-3">
                  <button onClick={() => openForm(user)} className="text-yellow-500 hover:text-yellow-600">
                    <Pencil size={16} />
                  </button>
                  <button onClick={() => toggleActif(user.id)} className="text-gray-700 hover:text-gray-900">
                    {user.actif ? <ToggleRight size={18} /> : <ToggleLeft size={18} />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
            <motion.div
              className="bg-gradient-to-br from-green-100 via-blue-100 to-white p-8 rounded-lg shadow-lg w-full max-w-md relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                onClick={() => setShowModal(false)}
              >
                <X size={20} />
              </button>

              <h2 className="text-xl font-bold mb-4 text-gray-800">
                {editingUser ? 'Modifier' : 'Ajouter'} un étudiant
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Prénom</label>
                  <input
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Nom</label>
                  <input
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Filière</label>
                  <select
                    name="filiere"
                    value={formData.filiere}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                  >
                    <option value="">-- Sélectionner une filière --</option>
                    {filieres.map((filiere, index) => (
                      <option key={index} value={filiere}>{filiere}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  {editingUser ? 'Modifier' : 'Ajouter'}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GestionEtudiants;
