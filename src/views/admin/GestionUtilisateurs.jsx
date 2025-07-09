import React, { useState, useMemo } from 'react';
import { Search, Plus, Eye, Edit, Ban, Check, Filter } from 'lucide-react';

const GestionUtilisateurs = () => {
  const [users, setUsers] = useState([
    { id: 1, nom: 'Dupont', prenom: 'Jean', email: 'jean.dupont@univ.fr', role: 'Étudiant', statut: 'Actif', dateInscription: '2024-01-15' },
    { id: 2, nom: 'Martin', prenom: 'Marie', email: 'marie.martin@univ.fr', role: 'Enseignant', statut: 'Actif', dateInscription: '2023-09-20' },
    { id: 3, nom: 'Diallo', prenom: 'Amadou', email: 'amadou.diallo@univ.fr', role: 'Étudiant', statut: 'Actif', dateInscription: '2024-02-10' },
    { id: 4, nom: 'Leroy', prenom: 'Sophie', email: 'sophie.leroy@univ.fr', role: 'Admin', statut: 'Actif', dateInscription: '2023-08-05' },
    { id: 5, nom: 'Seck', prenom: 'Fatou', email: 'fatou.seck@univ.fr', role: 'Étudiant', statut: 'Actif', dateInscription: '2024-03-12' },
    { id: 6, nom: 'Ndiaye', prenom: 'Moussa', email: 'moussa.ndiaye@univ.fr', role: 'Enseignant', statut: 'Actif', dateInscription: '2023-11-30' },
    { id: 7, nom: 'Fall', prenom: 'Awa', email: 'awa.fall@univ.fr', role: 'Étudiant', statut: 'Actif', dateInscription: '2024-01-08' },
    { id: 8, nom: 'Gueye', prenom: 'Ibrahima', email: 'ibrahima.gueye@univ.fr', role: 'Étudiant', statut: 'Actif', dateInscription: '2024-02-25' }
  ]);

  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({ nom: '', prenom: '', email: '', role: 'Étudiant', statut: 'Actif' });
  const [errors, setErrors] = useState({});

  const handleView = (user) => {
    alert(`Nom: ${user.prenom} ${user.nom}\nEmail: ${user.email}\nRôle: ${user.role}\nStatut: ${user.statut}`);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setFormData({ ...user });
    setShowEditModal(true);
  };

  const handleAdd = () => {
    setFormData({ nom: '', prenom: '', email: '', role: 'Étudiant', statut: 'Actif' });
    setShowAddModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.nom) errs.nom = 'Nom requis';
    if (!formData.prenom) errs.prenom = 'Prénom requis';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Email invalide';
    return errs;
  };

  const handleSubmit = () => {
    const validation = validateForm();
    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }
    if (showAddModal) {
      const newUser = { ...formData, id: users.length + 1, dateInscription: new Date().toISOString().split('T')[0] };
      setUsers(prev => [...prev, newUser]);
      setShowAddModal(false);
    } else if (showEditModal) {
      setUsers(prev => prev.map(u => u.id === selectedUser.id ? { ...formData } : u));
      setShowEditModal(false);
    }
    setFormData({ nom: '', prenom: '', email: '', role: 'Étudiant', statut: 'Actif' });
    setErrors({});
  };

  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      const matchSearch = user.nom.toLowerCase().includes(search.toLowerCase()) || user.prenom.toLowerCase().includes(search.toLowerCase());
      const matchRole = roleFilter === '' || user.role === roleFilter;
      return matchSearch && matchRole;
    });
  }, [users, search, roleFilter]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Gestion des utilisateurs</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Rechercher par nom ou prénom"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary" type="button">
          <Search size={16} className="me-1" /> Rechercher
        </button>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <select className="form-select" value={roleFilter} onChange={e => setRoleFilter(e.target.value)}>
            <option value="">Tous les rôles</option>
            <option value="Étudiant">Étudiant</option>
            <option value="Enseignant">Enseignant</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <button className="btn btn-success" onClick={handleAdd}>
          <Plus size={16} className="me-1" /> Ajouter un utilisateur
        </button>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Rôle</th>
            <th>Statut</th>
            <th>Date d'inscription</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.nom}</td>
              <td>{user.prenom}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.statut}</td>
              <td>{user.dateInscription}</td>
              <td>
                <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleView(user)}>
                  <Eye size={16} />
                </button>
                <button className="btn btn-sm btn-outline-success" onClick={() => handleEdit(user)}>
                  <Edit size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {(showAddModal || showEditModal) && (
        <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{showAddModal ? 'Ajouter' : 'Modifier'} un utilisateur</h5>
                <button type="button" className="btn-close" onClick={() => { setShowAddModal(false); setShowEditModal(false); }}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Nom</label>
                  <input type="text" name="nom" className={`form-control ${errors.nom ? 'is-invalid' : ''}`} value={formData.nom} onChange={handleChange} />
                  {errors.nom && <div className="invalid-feedback">{errors.nom}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Prénom</label>
                  <input type="text" name="prenom" className={`form-control ${errors.prenom ? 'is-invalid' : ''}`} value={formData.prenom} onChange={handleChange} />
                  {errors.prenom && <div className="invalid-feedback">{errors.prenom}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} value={formData.email} onChange={handleChange} />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">Rôle</label>
                  <select name="role" className="form-select" value={formData.role} onChange={handleChange}>
                    <option value="Étudiant">Étudiant</option>
                    <option value="Enseignant">Enseignant</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Statut</label>
                  <select name="statut" className="form-select" value={formData.statut} onChange={handleChange}>
                    <option value="Actif">Actif</option>
                    <option value="Bloqué">Bloqué</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => { setShowAddModal(false); setShowEditModal(false); }}>Annuler</button>
                <button className="btn btn-primary" onClick={handleSubmit}>Valider</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GestionUtilisateurs;
