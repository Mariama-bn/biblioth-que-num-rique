import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, Bell, User, Home, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { to: '/etudiant/dashboard', label: 'Dashboard', icon: <Home size={18} /> },
  { to: '/etudiant/mes-emprunts', label: 'Mes emprunts', icon: <BookOpen size={18} /> },
  { to: '/etudiant/consultations', label: 'Mes consultations', icon: <BookOpen size={18} /> },
  { to: '/etudiant/notifications', label: 'Notifications', icon: <Bell size={18} /> },
  { to: '/etudiant/profil', label: 'Mon profil', icon: <User size={18} /> },
  { to: '/etudiant/favoris-etudiants', label: 'Favoris', icon: <BookOpen size={18} /> },
];

const EtudiantLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/auth/login');
  };

  // Filtrage des liens du menu
  const filteredLinks = navLinks.filter((link) =>
    link.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-green-600 text-white p-6 flex flex-col justify-between shadow-lg">
        <div>
          <h2 className="text-2xl font-bold mb-8">Espace Étudiant</h2>

          {/* Résultat de la recherche */}
          <nav className="space-y-3">
            {filteredLinks.length > 0 ? (
              filteredLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center space-x-2 px-4 py-2 rounded hover:bg-green-700 transition ${
                    location.pathname === link.to ? 'bg-green-700 font-semibold' : ''
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))
            ) : (
              <p className="text-sm text-gray-200">Aucun résultat trouvé</p>
            )}
          </nav>
        </div>
      </aside>

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col">
        {/* Navbar étudiant */}
        <header className="h-16 bg-white border-b border-gray-200 shadow-sm px-6 flex items-center justify-between">
          <h1 className="text-xl font-bold text-green-700">
            Bibliothèque UIDT | Espace Étudiant
          </h1>

          <div className="flex items-center gap-4">
            {/* Barre de recherche */}
            <input
              type="text"
              placeholder="Rechercher dans le menu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <User className="text-gray-600" />
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded flex items-center space-x-2"
            >
              <LogOut size={18} />
              <span>Déconnexion</span>
            </button>
          </div>
        </header>

        {/* Contenu animé */}
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex-1 p-6 bg-gray-50"
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
};

export default EtudiantLayout;
