import React from 'react';
import { LogOut, User } from 'lucide-react';

const EtudiantNavbar = ({ logout }) => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 shadow-sm px-6 flex items-center justify-between">
      <div className="text-xl font-bold text-indigo-800">Bibliothèque UIDT</div>

      <div className="flex items-center space-x-4">
        <User className="text-gray-600" />
        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded flex items-center space-x-2"
        >
          <LogOut size={18} />
          <span>Déconnexion</span>
        </button>
      </div>
    </header>
  );
};

export default EtudiantNavbar;
