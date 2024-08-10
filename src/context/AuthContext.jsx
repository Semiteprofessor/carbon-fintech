import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { BASE_URL } from "../base";

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  userToken: null,
  isLoading: false,
  error: "",
};

const reduce = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        userToken: action.payload.token,
        isLoading: false,
        error: "",
      };
    case "LOGOUT":
      return { ...state, initialState };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  // const [{ user, isAuthenticated, userToken, error, isLoading }, dispatch] =
  //   useReducer(reduce, initialState);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // const login = async (email, password) => {
  //   await axios(`${BASE_URL}/user/login`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: JSON.stringify({ email, password }),
  //   })
  //     .then((response) => {
  //       console.log(response.data);
  //       if (response.status !== 200) {
  //         throw new Error(response.data.message);
  //       }
  //       if (
  //         response.data.data.email !== undefined &&
  //         response.data.data.password !== undefined
  //       ) {
  //         dispatch({
  //           type: "LOGIN",
  //           payload: { user: response.data.data, token: response.data.token },
  //         });
  //       } else {
  //         dispatch({
  //           type: "SET_ERROR",
  //           payload: { error: response.data.message },
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       dispatch({ type: "error", payload: error });
  //     });
  // };

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

  // const logout = useCallback(() => {
  //   return async () => {
  //     dispatch({ type: "LOGOUT" });
  //   };
  // }, []);

  const logout = useCallback(() => {
    return async () => {
      localStorage.removeItem("userToken");
      setUser(null);
      setUserToken(null);
      setIsAuthenticated(false);
      setIsLoading(false);
      setError("");
    };
  }, []);

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
