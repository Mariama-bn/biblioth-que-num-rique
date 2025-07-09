import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react";
import AuthLayout from "../../layouts/Auth";
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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // Simulation de redirection selon l'email (à sécuriser côté serveur plus tard)
    if (form.email.includes("admin")) navigate("/admin/index");
    else if (form.email.includes("enseignant")) navigate("/enseignant/index");
    else navigate("/etudiant/index");
    setIsLoading(false);
  };

  return (
    <AuthLayout>
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(12px)",
          padding: "38px 32px 30px 32px",
          boxShadow: "0 12px 32px rgba(30,58,138,0.10), 0 0 0 1px #e0e7ef",
          borderRadius: "18px",
          animation: "slideUp 0.7s cubic-bezier(.39,.575,.565,1)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "26px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 18px",
              boxShadow: "0 8px 24px rgba(30,58,138,0.18)",
              borderRadius: "50%",
              border: "2px solid #1e3a8a",
            }}
          >
            <img
              src={logoUIDT}
              alt="Logo UIDT"
              style={{
                width: 54,
                height: 54,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
          <h2
            style={{
              color: "#1e293b",
              fontSize: "25px",
              fontWeight: "700",
              marginBottom: "6px",
            }}
          >
            Connexion
          </h2>
          <p
            style={{
              color: "#64748b",
              fontWeight: "500",
              fontSize: "15px",
            }}
          >
            Accédez à votre espace UIDT
          </p>
        </div>
        {error && (
          <div
            style={{
              color: "#dc2626",
              fontWeight: 600,
              fontSize: 15,
              marginBottom: 18,
              textAlign: "center",
            }}
          >
            {error}
          </div>
        )}
        <Form onSubmit={handleSubmit} autoComplete="off">
          <FormGroup style={{ marginBottom: "18px" }}>
            <Label
              for="email"
              style={{ fontWeight: 600, color: "#1e3a8a" }}
            >
              <Mail
                size={16}
                style={{ marginRight: "6px" }}
              />{" "}
              Email universitaire
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="prenom.nom@uidt.edu.sn"
              value={form.email}
              onChange={handleChange}
              style={{
                borderRadius: 10,
                height: 44,
                fontSize: 16,
                border: "1px solid #cbd5e1",
              }}
            />
          </FormGroup>
          <FormGroup style={{ marginBottom: "18px" }}>
            <Label
              for="password"
              style={{ fontWeight: 600, color: "#1e3a8a" }}
            >
              <Lock
                size={16}
                style={{ marginRight: "6px" }}
              />{" "}
              Mot de passe
            </Label>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                style={{
                  borderRadius: 10,
                  height: 44,
                  fontSize: 16,
                  border: "1px solid #cbd5e1",
                  paddingRight: 38,
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </FormGroup>
          <Button
            color="primary"
            block
            disabled={isLoading}
            type="submit"
            style={{
              height: "48px",
              fontWeight: "600",
              background:
                "linear-gradient(135deg, #1e3a8a 0%, #2B8E41 100%)",
              border: "none",
              borderRadius: 10,
              fontSize: 17,
              marginTop: 8,
              boxShadow: "0 2px 8px #1e3a8a22",
              transition: "all 0.2s",
              letterSpacing: 1,
            }}
          >
            {isLoading ? (
              "Connexion..."
            ) : (
              <>
                <LogIn size={16} /> Se connecter
              </>
            )}
          </Button>
        </Form>
        <p
          style={{
            textAlign: "center",
            marginTop: "22px",
            fontSize: "15px",
            color: "#64748b",
          }}
        >
          Nouveau sur la plateforme ?{" "}
          <span
            onClick={() => navigate("/auth/register")}
            style={{
              color: "#1e3a8a",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Créer un compte
          </span>
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
        div[style*='maxWidth: 420px'] {
          transition: box-shadow 0.3s, transform 0.3s;
        }
        div[style*='maxWidth: 420px']:hover {
          box-shadow: 0 16px 40px #1e3a8a33, 0 0 0 1px #2B8E41;
          transform: translateY(-2px) scale(1.01);
        }
      `}</style>
    </AuthLayout>
  );
};

export default Login;