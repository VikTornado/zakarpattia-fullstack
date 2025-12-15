import React, { createContext, useState, useEffect } from "react";
import { API_BASE } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken") || null);

  useEffect(() => {
    if (accessToken) {
      // Basic check, in a real app you might decode JWT or fetch user profile
      setUser({ username: "Admin" }); 
    }
  }, [accessToken]);

  const login = async (username, password) => {
    try {
      const response = await fetch(`${API_BASE}/api/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.access;
        localStorage.setItem("accessToken", token);
        setAccessToken(token);
        setUser({ username });
        return true;
      } else {
        alert("Login failed! Check credentials.");
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong!");
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAccessToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
