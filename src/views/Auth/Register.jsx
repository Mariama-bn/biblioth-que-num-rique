import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import AuthLayout from "../../layouts/Auth";
import logoUIDT from "../../assets/img/brand/logo-uidt2.jpeg";

function generateSecurePassword() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=<>?";
  let pwd = "";
  for (let i = 0; i < 12; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pwd;
}

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "etudiant",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestedPwd, setSuggestedPwd] = useState(generateSecurePassword());

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
    if (e.target.name === "password") {
      if (e.target.value.length === 0) {
        setShowSuggestion(false);
      } else if (e.target.value.length < 4) {
        setShowSuggestion(true);
        setSuggestedPwd(generateSecurePassword());
      } else {
        setShowSuggestion(false);
      }
    }
  };

  const useSuggestedPassword = () => {
    setForm({ ...form, password: suggestedPwd, confirmPassword: suggestedPwd });
    setShowSuggestion(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!form.prenom || !form.nom || !form.email || !form.password || !form.confirmPassword) {
      setError("Veuillez remplir tous les champs.");
      setIsLoading(false);
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      setIsLoading(false);
      return;
    }
    // Simule l'inscription
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    navigate("/visitor/index");
  };

  return (
    <AuthLayout>
      <div
        style={{
          width: "100%",
          maxWidth: "440px",
          background: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(12px)",
          padding: "40px 36px 32px 36px",
          boxShadow: "0 12px 32px rgba(30,58,138,0.10), 0 0 0 1px #e0e7ef",
          borderRadius: "18px",
          animation: "slideUp 0.7s cubic-bezier(.39,.575,.565,1)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div style={{ width: "72px", height: "72px", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", boxShadow: "0 8px 24px rgba(30,58,138,0.18)", borderRadius: "50%", border: "2px solid #1e3a8a" }}>
            <img src={logoUIDT} alt="Logo UIDT" style={{ width: 54, height: 54, borderRadius: "50%", objectFit: "cover" }} />
          </div>
          <h2 style={{ color: "#1e293b", fontSize: "26px", fontWeight: "700", marginBottom: "6px" }}>Créer un compte</h2>
          <p style={{ color: "#64748b", fontWeight: "500", fontSize: "15px" }}>Inscription à votre espace académique</p>
        </div>
        {error && (
          <div style={{ color: "#dc2626", fontWeight: 600, fontSize: 15, marginBottom: 18, textAlign: "center" }}>{error}</div>
        )}
        <Form onSubmit={handleSubmit} autoComplete="off">
          <FormGroup style={{ marginBottom: "18px" }}>
            <Label for="prenom" style={{ fontWeight: 600, color: "#1e3a8a" }}><User size={16} style={{ marginRight: "6px" }} /> Prénom</Label>
            <Input type="text" name="prenom" id="prenom" placeholder="Votre prénom" value={form.prenom} onChange={handleChange} style={{ borderRadius: 10, height: 44, fontSize: 16, border: "1px solid #cbd5e1" }} />
          </FormGroup>
          <FormGroup style={{ marginBottom: "18px" }}>
            <Label for="nom" style={{ fontWeight: 600, color: "#1e3a8a" }}><User size={16} style={{ marginRight: "6px" }} /> Nom</Label>
            <Input type="text" name="nom" id="nom" placeholder="Votre nom" value={form.nom} onChange={handleChange} style={{ borderRadius: 10, height: 44, fontSize: 16, border: "1px solid #cbd5e1" }} />
          </FormGroup>
          <FormGroup style={{ marginBottom: "18px" }}>
            <Label for="email" style={{ fontWeight: 600, color: "#1e3a8a" }}><Mail size={16} style={{ marginRight: "6px" }} /> Email universitaire</Label>
            <Input type="email" name="email" id="email" placeholder="prenom.nom@uidt.edu.sn" value={form.email} onChange={handleChange} style={{ borderRadius: 10, height: 44, fontSize: 16, border: "1px solid #cbd5e1" }} />
          </FormGroup>
          <FormGroup style={{ marginBottom: "18px", position: "relative" }}>
            <Label for="password" style={{ fontWeight: 600, color: "#1e3a8a" }}><Lock size={16} style={{ marginRight: "6px" }} /> Mot de passe</Label>
            <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
              <Input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="••••••••" value={form.password} onChange={handleChange} style={{ borderRadius: 10, height: 44, fontSize: 16, border: "1px solid #cbd5e1", paddingRight: 38 }} autoComplete="new-password" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", border: "none", background: "none", cursor: "pointer", padding: 0, margin: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {showSuggestion && (
              <div style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 70,
                background: "#fff",
                border: "1px solid #1e3a8a33",
                borderRadius: 8,
                boxShadow: "0 2px 8px #1e3a8a22",
                padding: "12px 16px",
                zIndex: 10,
                color: "#1e3a8a",
                fontSize: 15,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: 2,
              }}>
                <span style={{ fontWeight: 600, marginBottom: 6 }}>Suggestion de mot de passe sécurisé :</span>
                <span style={{ fontFamily: "monospace", fontSize: 16, marginBottom: 8 }}>{suggestedPwd}</span>
                <div style={{ display: 'flex', gap: 10 }}>
                  <Button color="primary" size="sm" style={{ borderRadius: 6, fontWeight: 600, background: "#1e3a8a", border: "none" }} onClick={useSuggestedPassword}>
                    Utiliser ce mot de passe
                  </Button>
                  <Button color="secondary" size="sm" style={{ borderRadius: 6, fontWeight: 600, background: "#64748b", border: "none", color: '#fff' }} onClick={() => setShowSuggestion(false)}>
                    Créer mon propre mot de passe
                  </Button>
                </div>
              </div>
            )}
          </FormGroup>
          <FormGroup style={{ marginBottom: "18px" }}>
            <Label for="confirmPassword" style={{ fontWeight: 600, color: "#1e3a8a" }}><Lock size={16} style={{ marginRight: "6px" }} /> Confirmer le mot de passe</Label>
            <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
              <Input type={showConfirm ? "text" : "password"} name="confirmPassword" id="confirmPassword" placeholder="••••••••" value={form.confirmPassword} onChange={handleChange} style={{ borderRadius: 10, height: 44, fontSize: 16, border: "1px solid #cbd5e1", paddingRight: 38 }} autoComplete="new-password" />
              <button type="button" onClick={() => setShowConfirm(!showConfirm)} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", border: "none", background: "none", cursor: "pointer", padding: 0, margin: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </FormGroup>
          <FormGroup style={{ marginBottom: "18px" }}>
            <Label for="role" style={{ fontWeight: 600, color: "#1e3a8a" }}>🎓 Rôle</Label>
            <Input type="select" name="role" id="role" value={form.role} onChange={handleChange} style={{ borderRadius: 10, height: 44, fontSize: 16, border: "1px solid #cbd5e1" }}>
              <option value="etudiant">Étudiant</option>
              <option value="enseignant">Enseignant</option>
            </Input>
          </FormGroup>
          <Button type="submit" color="primary" block disabled={isLoading} style={{ height: "48px", fontWeight: "600", background: "linear-gradient(135deg, #1e3a8a 0%, #2B8E41 100%)", border: "none", borderRadius: 10, fontSize: 17, marginTop: 8, boxShadow: "0 2px 8px #1e3a8a22", transition: "all 0.2s", letterSpacing: 1 }}>
            {isLoading ? "Inscription..." : "S’inscrire"}
          </Button>
        </Form>
        <p style={{ textAlign: "center", marginTop: "22px", fontSize: "15px", color: "#64748b" }}>
          Vous avez déjà un compte ? {" "}
          <span onClick={() => navigate("/auth/login")} style={{ color: "#1e3a8a", fontWeight: "600", cursor: "pointer" }}>Se connecter</span>
        </p>
      </div>
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        div[style*='maxWidth: 440px'] {
          transition: box-shadow 0.3s, transform 0.3s;
        }
        div[style*='maxWidth: 440px']:hover {
          box-shadow: 0 16px 40px #1e3a8a33, 0 0 0 1px #2B8E41;
          transform: translateY(-2px) scale(1.01);
        }
      `}</style>
    </AuthLayout>
  );
};

export default Register;
