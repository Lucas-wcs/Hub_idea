import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
// administrator link
function Navbar() {
  const { theme } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);
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
        {location.pathname !== "/" ? (
          <NavLink to="/home">
            <img src="/images/logo.png" alt="logo" />
          </NavLink>
        ) : (
          <img src="/images/logo.png" alt="logo" />
        )}
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
        {user && user.is_administrator ? (
          <NavLink to="/administrator/">
            <div className="image-container">
              <img
                title="Profil-administrator"
                src={
                  theme === "dark"
                    ? "/images/icons/administrateur-dark.png"
                    : "/images/icons/administrateur.png"
                }
                alt="administrateur"
              />
            </div>
          </NavLink>
        ) : null}
        {user &&
          location.pathname !== "/profile" &&
          location.pathname !== "/rules" &&
          location.pathname !== "/" && (
            <NavLink to={`/profile/${user.id}`}>
              <div className="image-container">
                {user.image_profil ? (
                  <img
                    title="Profil"
                    src={`${import.meta.env.VITE_BACKEND}/uploads/${
                      user.image_profil
                    }`}
                    alt="profile"
                  />
                ) : (
                  <img
                    title="Profil"
                    src={
                      theme === "dark"
                        ? "/images/icons/avatar_icon_dark.png"
                        : "/images/icons/avatar_icon.png"
                    }
                    alt="default profile"
                  />
                )}
              </div>
            </NavLink>
          )}
        {location.pathname !== "/rules" && location.pathname !== "/" && (
          <button
            type="button"
            onClick={handleLogout}
            className="button-logout"
          >
            <img
              className="logout"
              src={
                theme === "dark"
                  ? "/images/icons/logout_dark.png"
                  : "/images/icons/logout.png"
              }
              alt="profile"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
