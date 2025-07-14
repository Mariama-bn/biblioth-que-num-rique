import React from "react";
import { FileText, Eye, FolderPlus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardEnseignant = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">
        📘 Tableau de bord enseignant
      </h1>

      {/* Statistiques principales */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-5 border-l-4 border-blue-400">
          <div className="flex items-center space-x-4">
            <FileText className="text-blue-500" size={32} />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Documents déposés</h3>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-5 border-l-4 border-green-400">
          <div className="flex items-center space-x-4">
            <Eye className="text-green-500" size={32} />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Consultations</h3>
              <p className="text-2xl font-bold text-gray-900">45</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-5 border-l-4 border-yellow-400">
          <div className="flex items-center space-x-4">
            <FolderPlus className="text-yellow-500" size={32} />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Demandes d’acquisition</h3>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Accès rapide */}
      <div>
        <h2 className="text-xl font-semibold text-blue-700 mb-4">⚡ Accès rapide</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/enseignant/depot"
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 p-5 rounded-xl shadow flex items-center justify-between transition"
          >
            Déposer un document <ArrowRight size={18} />
          </Link>
          <Link
            to="/enseignant/consultations"
            className="bg-green-100 hover:bg-green-200 text-green-800 p-5 rounded-xl shadow flex items-center justify-between transition"
          >
            Mes consultations <ArrowRight size={18} />
          </Link>
          <Link
            to="/enseignant/demande"
            className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 p-5 rounded-xl shadow flex items-center justify-between transition"
          >
            Nouvelle demande d’acquisition <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardEnseignant;
