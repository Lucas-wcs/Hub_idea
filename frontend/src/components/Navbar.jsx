import { useLocation, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Navbar() {
  const { theme } = useContext(ThemeContext);

  const { toggleTheme } = useContext(ThemeContext);

  const location = useLocation();

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src="images/logo.png" alt="logo" />
      </div>
      {location.pathname !== "/" && (
        <div className="nav-right">
          <input
            onClick={toggleTheme}
            type="checkbox"
            className="theme-checkbox"
          />
          {location.pathname !== "/profile" && (
            <NavLink to="/profile">
              <div className="image-container">
                <img
                  src={
                    theme === "dark"
                      ? "/images/icons/avatar_icon_dark.png"
                      : "/images/icons/avatar_icon.png"
                  }
                  alt="profile"
                />
              </div>
            </NavLink>
          )}

          <div className="image-container">
            <img
              src={
                theme === "dark"
                  ? "/images/icons/notification_icon_light.png"
                  : "/images/icons/notification_icon.png"
              }
              alt="notification"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
