import React from "react";

function EnseignantLayout() {
  return (
    <div className="main-content p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Gestion des enseignants</h2>
        <button className="btn btn-primary">Ajouter un enseignant</button>
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
              <td>Mamadou Fall</td>
              <td>mamadou@example.com</td>
              <td><span className="badge bg-success">Actif</span></td>
              <td><span className="badge bg-primary">Enseignant</span></td>
            </tr>
            <tr>
              <td>Awa Gaye</td>
              <td>awa@example.com</td>
              <td><span className="badge bg-danger">Inactif</span></td>
              <td><span className="badge bg-primary">Enseignant</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EnseignantLayout;
