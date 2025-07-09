import React from "react";

function EtudiantLayout() {
  return (
    <div className="main-content p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Gestion des étudiants</h2>
        <button className="btn btn-primary">Ajouter un étudiant</button>
      </div>

      {/* Tableau */}
      <div className="table-responsive">
        <table className="table table-hover align-items-center">
          <thead className="thead-light">
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Statut</th>
              <th>Rôle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aissatou Ndiaye</td>
              <td>aissatou@example.com</td>
              <td><span className="badge bg-success">Actif</span></td>
              <td><span className="badge bg-primary">Étudiant</span></td>
            </tr>
            <tr>
              <td>Cheikh Diop</td>
              <td>cheikh@example.com</td>
              <td><span className="badge bg-danger">Inactif</span></td>
              <td><span className="badge bg-primary">Étudiant</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EtudiantLayout;
