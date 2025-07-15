import React, { createContext, useContext, useEffect, useState } from 'react';

// Création du contexte
const AuthContext = createContext();

// Composant Provider pour englober toute l’application
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("utilisateurConnecte");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Fonction de connexion
  const login = async ({ email, motDePasse }) => {
    const userLocal = JSON.parse(localStorage.getItem("utilisateur"));

    if (!userLocal) {
      return { success: false, error: "Aucun compte enregistré. Veuillez vous inscrire." };
    }

    // Vérification des identifiants
    if (
      email === userLocal.email &&
      motDePasse === userLocal.password
    ) {
      localStorage.setItem("utilisateurConnecte", JSON.stringify(userLocal));
      setUser(userLocal);
      return { success: true, user: userLocal };
    }

    return { success: false, error: "Email ou mot de passe incorrect." };
  };

  // Fonction de déconnexion
  const logout = () => {
    localStorage.removeItem("utilisateurConnecte");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook pour accéder au contexte facilement
export const useAuth = () => useContext(AuthContext);
