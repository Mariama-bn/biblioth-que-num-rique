import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, Bell, User, Home, LogOut } from 'lucide-react';
import { motion } from 'framer-motion'; // 👈 animation importée ici

const navLinks = [
  { to: '/etudiant/dashboard', label: 'Dashboard', icon: <Home size={18} /> },
  { to: '/etudiant/mes-emprunts', label: 'Mes emprunts', icon: <BookOpen size={18} /> },
  { to: '/etudiant/mes-reservations', label: 'Mes réservations', icon: <BookOpen size={18} /> },
  { to: '/etudiant/consultations', label: 'Mes consultations', icon: <BookOpen size={18} /> },
  { to: '/etudiant/notifications', label: 'Notifications', icon: <Bell size={18} /> },
  { to: '/etudiant/profil', label: 'Mon profil', icon: <User size={18} /> },
];

const EtudiantLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Nettoyage (simulé)
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Redirection vers la page de login
    navigate('/auth/login');
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-green-600 text-white p-6 flex flex-col justify-between shadow-lg">
        <div>
          <h2 className="text-2xl font-bold mb-8">Espace Étudiant</h2>
          <nav className="space-y-3">
            {navLinks.map((link) => (
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
            ))}
          </nav>
        </div>

        {/* Bouton déconnexion */}
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 px-4 py-2 rounded bg-red-600 hover:bg-red-700 transition text-white mt-8"
        >
          <LogOut size={18} />
          <span>Déconnexion</span>
        </button>
      </aside>

      {/* Contenu avec animation */}
      <motion.main
        key={location.pathname} // Pour relancer l’animation à chaque changement
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-1 p-6 bg-gray-50"
      >
        <Outlet />
      </motion.main>
    </div>
  );
};

export default EtudiantLayout;
