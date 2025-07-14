import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import { Camera, Pencil, Save } from "lucide-react";

const ProfilEtudiant = () => {
  const fileInputRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    nom: "Fatou Diouf",
    email: "etudiant@uidt.edu.sn",
    telephone: "+221 77 123 45 67",
    ufr: "UFR Santé",
    filiere: "Pharmacie",
  });

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
      toast.success("📸 Nouvelle photo chargée !");
    }
  };

  const handleInputChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEnregistrer = () => {
    setIsEditing(false);
    toast.success("✅ Informations mises à jour avec succès !");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-800 mb-6">👤 Mon Profil</h1>

      <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-8 items-start">
        {/* Photo de profil */}
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 mb-3">
            <img
              src={photo || "https://via.placeholder.com/150"}
              alt="Profil"
              className="rounded-full w-full h-full object-cover border-4 border-blue-500"
            />
            <button
              onClick={() => fileInputRef.current.click()}
              className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full text-white shadow hover:bg-blue-700"
              title="Changer la photo"
            >
              <Camera size={18} />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handlePhotoChange}
            />
          </div>
          <p className="text-sm text-gray-600">Clique sur l’icône pour changer</p>
        </div>

        {/* Formulaire de profil */}
        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(userData).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 capitalize">
                  {key}
                </label>
                <input
                  type="text"
                  name={key}
                  value={value}
                  disabled={!isEditing}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full p-2 border rounded ${
                    isEditing
                      ? "border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
                      : "bg-gray-100 border-gray-300 text-gray-600"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Boutons d'action */}
          <div className="flex gap-4 mt-6">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded flex items-center gap-2"
              >
                <Pencil size={16} />
                Modifier
              </button>
            ) : (
              <button
                onClick={handleEnregistrer}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded flex items-center gap-2"
              >
                <Save size={16} />
                Enregistrer
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilEtudiant;
