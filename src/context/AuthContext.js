import { createContext, useState, useEffect } from "react";

/**
 * Create an authentication context with default property values.
 * The context can be used to share and access the authentication state across components.
 *
 * @type {object}
 * @property {any} currentUser - The current user object or null if not authenticated.
 * @property {Function} setCurrentUser - A function to set the current user.
 * @property {any} isAuth - The authentication status or null if not determined.
 * @property {Function} setIsAuth - A function to set the authentication status.
 * @property {any} isLoading - The loading status or null if not determined.
 */
export const AuthContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  isAuth: null,
  setIsAuth: null,
  isLoading: null,
});

/**

Authentication provider component that manages the authentication state.
It initializes the authentication context and provides the necessary values to its children.
@component
@param {Object} props - The component props.
@param {ReactNode} props.children - The child components that will have access to the authentication context.
@returns {ReactElement} The rendered component.
*/

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setCurrentUser(storedToken);
      setIsAuth(true);
    }
    setIsLoading(false);
  }, [setCurrentUser]);

  const value = { currentUser, setCurrentUser, isLoading, isAuth, setIsAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
