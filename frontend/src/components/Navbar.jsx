import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { UserContext } from "./UserContext";

function Navbar() {
  const { theme } = useContext(ThemeContext);
  const { setUser } = useContext(UserContext);
  const { toggleTheme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const location = useLocation();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className="nav-right">
        <div className="image-container">
          <input
            title="Thème clair/sombre"
            onClick={toggleTheme}
            type="checkbox"
            className="theme-checkbox"
          />
        </div>
        {location.pathname !== "/profile" &&
          location.pathname !== "/rules" &&
          location.pathname !== "/" && (
            <NavLink to="/profile">
              <div className="image-container">
                <img
                  title="Profil"
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
        {location.pathname !== "/rules" && location.pathname !== "/" && (
          <div className="image-container">
            <img
              title="Notifications"
              src={
                theme === "dark"
                  ? "/images/icons/notification_icon_light.png"
                  : "/images/icons/notification_icon.png"
              }
              alt="notification"
            />
          </div>
        )}
        {location.pathname !== "/rules" && location.pathname !== "/" && (
          <button
            type="button"
            onClick={handleLogout}
            className="button-logout"
          >
            <div className="image-container">
              <img
                title="Déconnexion"
                className="logout"
                src={
                  theme === "dark"
                    ? "/images/icons/logout_dark.png"
                    : "/images/icons/logout.png"
                }
                alt="profile"
              />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
