import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import axios from "axios";
import { BASE_URL } from "../base";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const login = useCallback(() => {
    return async (email, password) => {
      await axios(`${BASE_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ email, password }),
      })
        .then((response) => {
          console.log(response.data);
          if (response.status !== 200) {
            throw new Error(response.data.message);
          }
          localStorage.setItem("userToken", response.data.token);
          setUser(response.data.data);
          setUserToken(response.data.token);
          setIsAuthenticated(true);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("userToken");
    setUser(null);
    setUserToken(null);
    setIsAuthenticated(false);
    setIsLoading(false);
    setError("");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        userToken,
        login,
        logout,
        isLoading,
        error,
      }}
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
