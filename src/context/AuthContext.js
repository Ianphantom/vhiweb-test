import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  isAuth: null,
  setIsAuth: null,
  isLoading: null,
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setCurrentUser(storedToken);
    }
    setIsLoading(false);
  }, [setCurrentUser]);

  console.log(currentUser);

  const value = { currentUser, setCurrentUser, isLoading, isAuth, setIsAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
