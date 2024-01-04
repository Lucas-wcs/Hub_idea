import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Creating a new context for theme data
export const ThemeContext = createContext();

// Creating a provider component for the ThemeContext
export function ThemeProvider({ children }) {
  // Using useState to manage theme data locally, with initial value from localStorage or default to "light"
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Function to toggle the theme between "light" and "dark"
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Storing the new theme in localStorage
  };

  // Using useMemo to optimize performance by avoiding unnecessary re-renders
  const contextValue = React.useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );

  // Using useEffect to apply the correct body class based on the theme
  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "dark");
  }, [theme]); // This effect runs whenever the theme changes

  // Providing the theme data and toggle function to children components
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
