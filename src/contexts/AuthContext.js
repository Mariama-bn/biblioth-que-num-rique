import React, { createContext, useContext, useEffect, useState } from 'react';

import axios from 'axios';
// Création du contexte
const AuthContext = createContext();

// Composant Provider pour englober toute l’application
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("utilisateurConnecte");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Fonction de connexion
 
  const login = async (credentials) => {
    try {
      const response = await axios.post('http://localhost:2000/api/users/login', credentials);
      
      
      const { data } = response;
      const { user, accessToken } = data;
      
      // Sauvegarder le token et les données utilisateur
      localStorage.setItem('token', accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      
      // Configurer axios pour les futures requêtes
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      
      // Mettre à jour l'état
      setUser(user);
      
      return { success: true, user };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Erreur de connexion' 
      };
    }
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
