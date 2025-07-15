import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, GraduationCap, User2 } from "lucide-react";
import logoUIDT from "../../assets/img/brand/logo-uidt2.jpeg";

function generateSecurePassword() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=<>?";
  let pwd = "";
  for (let i = 0; i < 12; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pwd;
}

const normalize = (str) => str.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim();

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("etudiant");
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    password: "",
    confirmPassword: "",
    matricule: "",
    ufr: "",
    filiere: "",
    telephone: "",
    adresse: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestedPwd, setSuggestedPwd] = useState(generateSecurePassword());
  const [showSuggestion, setShowSuggestion] = useState(false);

  const UFR_LIST = [
    "Sciences Economiques et Sociales",
    "Sciences et Technologie",
    "Science de la Santé",
    "Science de l'ingénieurie",
  ];

  const FILIERE_MAP = {
    "Sciences Economiques et Sociales": [
      "Management informatisé des organisations",
      "Sciences economiques et gestion",
      "Banque finance et assurance",
    ],
    "Sciences et Technologie": [
      "Mathematiques et application",
      "Reseaux et telecoms",
      "Genie logiciel",
    ],
    "Science de la Santé": [
      "Medecine",
      "Pharmacie",
      "Biologie medicale",
    ],
    "Science de l'ingénieurie": [
      "ingenieur de conception en genie civil",
      "ingenieur de conception en geometre topographe",
      "ingenieur de conception en geotechnique",
    ],
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "password" && e.target.value.length < 6) {
      setShowSuggestion(true);
      setSuggestedPwd(generateSecurePassword());
    } else {
      setShowSuggestion(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.prenom || !form.nom || !form.email || !form.password || !form.confirmPassword ||
      !form.matricule || !form.ufr || !form.telephone || (role === "etudiant" && (!form.filiere || !form.adresse))
    ) {
      setError("Veuillez remplir tous les champs requis.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    if (!form.email.endsWith("@uidt.edu.sn")) {
      setError("Seul un email universitaire se terminant par @uidt.edu.sn est accepté.");
      return;
    }

    if (role === "enseignant" && !form.matricule.startsWith("ENS")) {
      setError("Matricule enseignant non valide.");
      return;
    }

    const ufrValid = UFR_LIST.find((ufr) => normalize(ufr) === normalize(form.ufr));
    if (!ufrValid) {
      setError("Cette UFR n'est pas reconnue.");
      return;
    }

    if (role === "etudiant") {
      const filieres = FILIERE_MAP[ufrValid] || [];
      const filiereValid = filieres.find((f) => normalize(f) === normalize(form.filiere));
      if (!filiereValid) {
        setError("Cette filière n'est pas reconnue pour l'UFR choisi.");
        return;
      }
    }

    // ✅ Vérification unicité dans localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(
      (u) =>
        u.email.toLowerCase() === form.email.toLowerCase() ||
        u.matricule.toLowerCase() === form.matricule.toLowerCase() ||
        u.telephone === form.telephone
    );

    if (exists) {
      setError("Un compte avec cet email, matricule ou numéro existe déjà.");
      return;
    }

    const newUser = {
      role,
      prenom: form.prenom,
      nom: form.nom,
      email: form.email,
      password: form.password,
      matricule: form.matricule,
      telephone: form.telephone,
      ufr: form.ufr,
      filiere: form.filiere || "",
      adresse: form.adresse || "",
    };

    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("utilisateur", JSON.stringify(newUser)); // pour garder la session

    navigate("/interface-principale");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-3xl bg-white p-12 rounded-3xl shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 bg-white border-4 border-blue-900 rounded-full flex items-center justify-center shadow-md">
            <img src={logoUIDT} alt="UIDT" className="w-16 h-16 rounded-full object-cover" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800">Créer un compte</h2>
          <p className="text-slate-500 text-sm">Inscription à votre espace académique</p>
        </div>

        <div className="flex gap-6 justify-center mb-8">
          <button
            onClick={() => setRole("etudiant")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-base font-semibold border transition-all duration-200 ${
              role === "etudiant" ? "bg-blue-700 text-white" : "bg-white text-blue-700 border-blue-700"
            }`}
          >
            <GraduationCap size={20} /> Étudiant
          </button>
          <button
            onClick={() => setRole("enseignant")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-base font-semibold border transition-all duration-200 ${
              role === "enseignant" ? "bg-green-600 text-white" : "bg-white text-green-600 border-green-600"
            }`}
          >
            <User2 size={20} /> Enseignant
          </button>
        </div>

        {error && <p className="text-red-600 text-center font-medium mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex gap-3">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-slate-700">Prénom</label>
              <input type="text" name="prenom" value={form.prenom} onChange={handleChange} className="mt-1 w-full rounded-md border px-4 py-2.5" />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-slate-700">Nom</label>
              <input type="text" name="nom" value={form.nom} onChange={handleChange} className="mt-1 w-full rounded-md border px-4 py-2.5" />
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-slate-700">Email universitaire</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="prenom.nom@uidt.edu.sn" className="mt-1 w-full rounded-md border px-4 py-2.5" />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-slate-700">Matricule</label>
              <input type="text" name="matricule" value={form.matricule} onChange={handleChange} className="mt-1 w-full rounded-md border px-4 py-2.5" />
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-slate-700">Téléphone</label>
              <input type="text" name="telephone" value={form.telephone} onChange={handleChange} className="mt-1 w-full rounded-md border px-4 py-2.5" />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-slate-700">UFR</label>
              <input type="text" name="ufr" list="ufr-list" value={form.ufr} onChange={handleChange} className="mt-1 w-full rounded-md border px-4 py-2.5" />
              <datalist id="ufr-list">
                {UFR_LIST.map((ufr, idx) => <option key={idx} value={ufr} />)}
              </datalist>
            </div>
          </div>

          {role === "etudiant" && (
            <div className="flex gap-3">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-slate-700">Filière</label>
                <input type="text" name="filiere" list="filiere-list" value={form.filiere} onChange={handleChange} className="mt-1 w-full rounded-md border px-4 py-2.5" />
                <datalist id="filiere-list">
                  {(FILIERE_MAP[form.ufr] || []).map((filiere, idx) => <option key={idx} value={filiere} />)}
                </datalist>
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-slate-700">Adresse</label>
                <input type="text" name="adresse" value={form.adresse} onChange={handleChange} className="mt-1 w-full rounded-md border px-4 py-2.5" />
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-slate-700">Mot de passe</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} name="password" value={form.password} onChange={handleChange} className="mt-1 w-full rounded-md border px-4 py-2.5 pr-10" />
                <button type="button" className="absolute top-1/2 right-3 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {showSuggestion && (
                <div className="bg-blue-50 border mt-2 p-3 rounded-md text-sm text-blue-800">
                  Suggestion de mot de passe : <span className="font-mono">{suggestedPwd}</span>
                  <button
                    type="button"
                    className="ml-3 text-blue-700 underline"
                    onClick={() => {
                      setForm({ ...form, password: suggestedPwd, confirmPassword: suggestedPwd });
                      setShowSuggestion(false);
                    }}
                  >
                    Utiliser
                  </button>
                </div>
              )}
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-slate-700">Confirmer le mot de passe</label>
              <div className="relative">
                <input type={showConfirm ? "text" : "password"} name="confirmPassword" value={form.confirmPassword} onChange={handleChange} className="mt-1 w-full rounded-md border px-4 py-2.5 pr-10" />
                <button type="button" className="absolute top-1/2 right-3 -translate-y-1/2" onClick={() => setShowConfirm(!showConfirm)}>
                  {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button type="submit" disabled={isLoading} className="bg-gradient-to-r from-blue-900 to-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:scale-[1.01] transition-transform">
              <span className="text-sm">{isLoading ? "Inscription..." : "S’inscrire"}</span>
            </button>
          </div>

          <p className="text-sm text-center text-slate-500 mt-4">
            Vous avez déjà un compte ?
            <span onClick={() => navigate("/auth/login")} className="text-blue-700 font-semibold cursor-pointer ml-1">Se connecter</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
