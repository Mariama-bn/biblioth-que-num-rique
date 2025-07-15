import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext'; // ✅ Corrigé le chemin
import { Navigate, useNavigate } from 'react-router-dom';
import { BookOpen, Lock, User, Eye, EyeOff } from 'lucide-react';
import logoUIDT from '../../assets/img/brand/logo-uidt2.jpeg'; // ✅ Ton logo

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    motDePasse: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, login } = useAuth();
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/main/accueil" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await login(formData);

    if (result.success) {
      localStorage.setItem("utilisateurConnecte", JSON.stringify(result.user)); // ✅ Enregistrer l'utilisateur
      navigate('/main/accueil'); // ✅ Redirection vers l’accueil
    } else {
      setError(result.error || "Erreur de connexion.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md transform transition-all duration-300 hover:scale-105">
        <div className="text-center mb-8">
          <div className="mx-auto w-24 h-24 bg-white border-4 border-blue-900 rounded-full flex items-center justify-center mb-4 shadow-md">
            <img src={logoUIDT} alt="UIDT" className="w-16 h-16 rounded-full object-cover" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Connexion</h1>
          <p className="text-gray-600">Accédez à votre espace UIDT</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Adresse email
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="prenom.nom@uidt.edu.sn"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.motDePasse}
                onChange={(e) => setFormData({ ...formData, motDePasse: e.target.value })}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-900 to-green-600 text-white py-3 px-4 rounded-lg font-medium hover:scale-105 transition-all duration-200"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Nouveau sur la plateforme ?
            <span
              onClick={() => navigate("/auth/register")}
              className="text-blue-700 font-semibold cursor-pointer ml-1"
            >
              Créer un compte
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
