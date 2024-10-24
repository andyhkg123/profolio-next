import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  //   const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const login = async (inputs) => {
    try {
      const res = await axios.post(`/api/auth/login`, inputs, {
        withCredentials: true, // Include cookies in the request (if needed)
      });
      setCurrentUser(res.data);
      console.log("Login successful:", res.data); // Log success message
    } catch (error) {
      console.error(
        "Login error:",
        error.response ? error.response.data : error.message
      );
      // You can also set an error state here to display it in the UI if necessary
    }
  };

  const logout = async () => {
    await axios.post(`/api/auth/logout`);
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
