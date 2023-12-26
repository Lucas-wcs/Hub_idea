import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

function Profile() {
  // const users = useLoaderData();
  // const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);
  const [setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowsConfirmPassword] = useState(false);
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [isEyeOpenNew, setIsEyeOpenNew] = useState(false);
  const [isEyeOpenConfirm, setIsEyeOpenConfirm] = useState(false);
  // const [checkPassword, setCheckPassword] = useState(false);

  const handlePut = async (e) => {
    e.preventDefault();

    const userToUpdate = {
      id: user.id,
      image_profil: user?.image_profil || "par default",
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      is_administrator: user.is_administrator,
      is_moderator: user.is_moderator,
    };

    try {
      // eslint-disable-next-line no-unused-vars
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND}/api/users/${user.id}`,
        userToUpdate
      );
      setUser(userToUpdate);
      // navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowPassword = (passwordType) => {
    if (passwordType === "current") {
      setShowPassword(!showPassword);
      setIsEyeOpen((current) => !current);
    } else if (passwordType === "new") {
      setShowNewPassword(!showNewPassword);
      setIsEyeOpenNew((current) => !current);
    } else if (passwordType === "confirm") {
      setShowsConfirmPassword(!showConfirmPassword);
      setIsEyeOpenConfirm((current) => !current);
    }
  };

  //   const handleCheckPassword = (e) => {
  //     const newPassword = e.target.password.value;
  //     const newPasswordConfirmed = e.target.confirmPassword.value;
  //     if (newPassword === newPasswordConfirmed) {
  //       setCheckPassword(true);
  //     } else {
  //       setCheckPassword(false);
  // console.log("erreur")    }
  //   };

  return (
    <div>
      <div className="profile-page">
        <div className="home-button">
          <Link to="/home">
            <img
              className="clickable-image"
              src={
                theme === "dark"
                  ? "/images/icons/retour_dark.png"
                  : "/images/icons/retour.png"
              }
              alt="logo_retour"
            />
          </Link>
        </div>
        <div className="profile-form-container">
          <div className="thumbnail">
            <img src="/images/hugo.png" alt="my thumbnail" />
            <div>
              <button type="button">Télécharger photo</button>
            </div>
          </div>
          {user && (
            <form className="profile-form" onSubmit={handlePut}>
              <div className="profile-form-item">
                <label className="label-profile" htmlFor="firstname">
                  Prénom
                </label>
                <input
                  className="profile-input"
                  type="text"
                  placeholder="Prénom"
                  name="firstname"
                  defaultValue={user.firstname}
                />
              </div>
              <div className="profile-form-item">
                <label className="label-profile" htmlFor="lastname">
                  Nom
                </label>
                <input
                  className="profile-input"
                  type="text"
                  placeholder="Nom"
                  name="lastname"
                  defaultValue={user.lastname}
                />
              </div>
              <div className="profile-form-item">
                <label className="label-profile" htmlFor="email">
                  Adresse mail
                </label>
                <input
                  className="profile-input"
                  type="email"
                  placeholder="Email"
                  name="email"
                  defaultValue={user.email}
                />
              </div>

              <div className="profile-form-password">
                <label className="label-profile-pass" htmlFor="password">
                  Changer de mot de passe
                </label>
                <input
                  className="profile-input-pass"
                  type={showPassword ? "text" : "password"}
                  defaultValue="Mot de passe actuel"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="toggle-button"
                  type="button"
                  onClick={() => handleShowPassword("current")}
                >
                  {isEyeOpen ? (
                    <img src="/images/oeil-ouvert.png" alt="oeil ouvert" />
                  ) : (
                    <img src="/images/oeil-fermé.png" alt="oeil fermé" />
                  )}
                </button>
                <input
                  className="profile-input-pass"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Nouveau mot de passe"
                  name="password"
                  value={newPassword}
                  minLength={6}
                  required
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button
                  className="toggle-button"
                  type="button"
                  onClick={() => handleShowPassword("new")}
                >
                  {isEyeOpenNew ? (
                    <img src="/images/oeil-ouvert.png" alt="oeil ouvert" />
                  ) : (
                    <img src="/images/oeil-fermé.png" alt="oeil fermé" />
                  )}
                </button>
                <input
                  className="profile-input-pass"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  placeholder="Confirmation du nouveau mot de passe"
                  name="confirmPassword"
                  minLength={6}
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  // onChange={handleCheckPassword}
                />
                <button
                  className="toggle-button"
                  type="button"
                  onClick={() => handleShowPassword("confirm")}
                >
                  {isEyeOpenConfirm ? (
                    <img src="/images/oeil-ouvert.png" alt="oeil ouvert" />
                  ) : (
                    <img src="/images/oeil-fermé.png" alt="oeil fermé" />
                  )}
                </button>
              </div>
              <div className="submit-button">
                <button type="submit">Sauvegarder</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
