// ✅ Login.jsx — Authentification UIDT avec vérification locale
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react";
import logoUIDT from "../../assets/img/brand/logo-uidt2.jpeg";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!form.email || !form.password) {
      setError("Veuillez remplir tous les champs.");
      setIsLoading(false);
      return;
    }

    // Vérifie les identifiants avec ceux du localStorage
    const userData = JSON.parse(localStorage.getItem("utilisateur"));
    if (!userData || form.email !== userData.email || form.password !== userData.password) {
      setError("Identifiants incorrects. Veuillez réessayer.");
      setIsLoading(false);
      return;
    }

    // Connexion réussie
    localStorage.setItem("utilisateurConnecte", JSON.stringify(userData));
    navigate("/interface-principale");
    setIsLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-2xl">
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto mb-4 bg-white border-4 border-blue-900 rounded-full flex items-center justify-center shadow-md">
            <img src={logoUIDT} alt="UIDT" className="w-14 h-14 rounded-full object-cover" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Connexion</h2>
          <p className="text-slate-500 text-sm">Accédez à votre espace UIDT</p>
        </div>

        {error && <div className="text-red-600 text-center font-medium mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700">Email universitaire</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded-md border border-slate-300 px-4 py-2.5" placeholder="prenom.nom@uidt.edu.sn" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Mot de passe</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} name="password" value={form.password} onChange={handleChange} className="mt-1 w-full rounded-md border border-slate-300 px-4 py-2.5 pr-10" />
              <button type="button" className="absolute top-1/2 right-3 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-blue-900 to-green-600 text-white font-semibold py-3 rounded-lg shadow-md hover:scale-[1.01] transition-transform">
            {isLoading ? "Connexion..." : <><LogIn size={16} className="inline mr-2" />Se connecter</>}
          </button>

          <p className="text-sm text-center text-slate-500 mt-4">
            Nouveau sur la plateforme ?
            <span onClick={() => navigate("/auth/register")} className="text-blue-700 font-semibold cursor-pointer ml-1">Créer un compte</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
