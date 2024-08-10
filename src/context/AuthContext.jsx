import { createContext, useContext, useState } from "react";
import { BASE_URL } from "../base";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      setUser(data);
      console.log(data);
      alert(data.message);
      setIsAuthenticated(!isAuthenticated);
      localStorage.setItem("user", JSON.stringify(user));
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, isLoading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
