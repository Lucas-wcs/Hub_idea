import React, { useState, createContext, useMemo } from "react";
import PropTypes from "prop-types";

// Creating a new context for user data
export const UserContext = createContext();

// Creating a provider component for the UserContext
export function UserProvider({ children }) {
  // Using useState to manage user data locally
  const [user, setUser] = useState(null);
  // Using useMemo to optimize performance by avoiding unnecessary re-renders
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  // Providing the user data to children components
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext;
