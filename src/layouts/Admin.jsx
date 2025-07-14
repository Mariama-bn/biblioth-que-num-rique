import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  FileText,
  BookOpen,
  CalendarCheck,
  FilePlus,
  BarChart,
  Settings,
  LogOut,
} from 'lucide-react';
import { motion } from 'framer-motion';

const adminLinks = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
  { to: '/admin/utilisateurs', label: 'Utilisateurs', icon: <Users size={18} /> },
  { to: '/admin/documents', label: 'Documents', icon: <FileText size={18} /> },
  { to: '/admin/emprunts', label: 'Emprunts', icon: <BookOpen size={18} /> },
  { to: '/admin/reservations', label: 'Réservations', icon: <CalendarCheck size={18} /> },
  { to: '/admin/demandesacquisitions', label: 'Demandes acquisitions', icon: <FilePlus size={18} /> },
  { to: '/admin/statistiques', label: 'Statistiques', icon: <BarChart size={18} /> },
  { to: '/admin/parametres', label: 'Paramètres', icon: <Settings size={18} /> },
];

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/auth/login');
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-blue-800 to-green-600 text-white p-6 flex flex-col justify-between shadow-lg">
        <div>
          <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
          <nav className="space-y-3">
            {adminLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center space-x-2 px-4 py-2 rounded hover:bg-blue-700 transition ${
                  location.pathname === link.to ? 'bg-blue-700 font-semibold' : ''
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

      {/* Contenu principal avec animation */}
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex-1 p-6 bg-gray-50"
      >
        <Outlet />
      </motion.main>
    </div>
  );
};

export default AdminLayout;
