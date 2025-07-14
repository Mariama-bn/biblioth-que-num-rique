import React, { useState } from 'react';
import { Eye, CheckCircle, AlertTriangle } from 'lucide-react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const fakeReservations = [
  {
    id: 'doc1',
    title: 'Pharmacologie clinique',
    auteur: 'Dr Awa Diop',
    disponible: true,
  },
  {
    id: 'doc2',
    title: 'Histoire politique du Sénégal',
    auteur: 'Pr Mamadou Fall',
    disponible: false,
  },
];

const MesReservations = () => {
  const [reservations, setReservations] = useState(fakeReservations);
  const navigate = useNavigate();

  const handleEmprunt = (doc) => {
    if (doc.disponible) {
      toast.success(`✅ Emprunt validé pour "${doc.title}"`, {
        position: "top-right",
        autoClose: 3000,
      });

      setReservations((prev) => prev.filter((d) => d.id !== doc.id));

      console.log(`Notification à l’admin : 
Étudiant(e) Fatou Diouf (UFR Santé - Filière Pharmacie)
vient d’emprunter "${doc.title}" par ${doc.auteur}, ID: ${doc.id}`);
    } else {
      toast.error(`❌ "${doc.title}" n'est plus disponible.`, {
        position: "top-right",
        autoClose: 4000,
      });

      setTimeout(() => {
        if (window.confirm("Souhaitez-vous réserver ce document ?")) {
          toast.info("✅ Réservation confirmée. Vous serez notifié dès disponibilité.");
        } else {
          toast.warn("❌ Demande annulée.");
        }
      }, 800);
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-blue-800 mb-6">📌 Mes Réservations</h1>

      {reservations.length === 0 ? (
        <p className="text-gray-600">Aucune réservation en cours.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-4 py-3">Titre</th>
                <th className="px-4 py-3">Auteur</th>
                <th className="px-4 py-3">Disponibilité</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((doc) => (
                <tr key={doc.id} className="border-t">
                  <td className="px-4 py-2">{doc.title}</td>
                  <td className="px-4 py-2">{doc.auteur}</td>
                  <td className="px-4 py-2">
                    {doc.disponible ? (
                      <span className="text-green-600 font-semibold flex items-center">
                        <CheckCircle size={16} className="mr-1" /> Disponible
                      </span>
                    ) : (
                      <span className="text-red-500 font-semibold flex items-center">
                        <AlertTriangle size={16} className="mr-1" /> Indisponible
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                      onClick={() => navigate(`/document/${doc.id}`)}
                    >
                      <Eye size={14} className="inline mr-1" /> Voir
                    </button>
                    <button
                      className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                      onClick={() => handleEmprunt(doc)}
                    >
                      📦 Emprunter
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MesReservations;
