import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
    }
  }, []);

  const login = async (inputs) => {
    try {
      const res = await axios.post("/api/auth/login", inputs, {
        withCredentials: true,
      });
      setCurrentUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      console.log("Login successful:", res.data);
      return res.data;
    } catch (error) {
      console.error(
        "Login error:",
        error.response ? error.response.data : error.message
      );
      throw new Error(
        error.response ? error.response.data.message : error.message
      ); // Throw error
    }
  };

  const logout = async () => {
    await axios.post("/api/auth/logout");
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
