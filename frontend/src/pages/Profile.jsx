import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

function Profile() {
  // const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowsConfirmPassword] = useState(false);
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [isEyeOpenNew, setIsEyeOpenNew] = useState(false);
  const [isEyeOpenConfirm, setIsEyeOpenConfirm] = useState(false);

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

  const handlecheckPasswordsMatch = () => {
    if (newPassword.length > 2 && confirmPassword.length > 2) {
      if (newPassword === "" && confirmPassword === "") {
        setMessage("");
      } else if (newPassword === confirmPassword) {
        setMessage("Les mots de passe correspondent");
      } else if (newPassword !== confirmPassword) {
        setMessage("Les mots de passe ne correspondent pas");
      }
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
            <form
              className="profile-form"
              onSubmit={handlePut}
              onChange={handlecheckPasswordsMatch}
            >
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
                <div className="container-profile-input">
                  <input
                    className="profile-input-pass"
                    // type="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Mot de passe actuel"
                    name="password"
                  />
                  <button
                    className="toggle-button"
                    type="button"
                    onClick={() => handleShowPassword("current")}
                  >
                    {isEyeOpen ? (
                      <img
                        className="img-password"
                        src="/images/oeil-ouvert.png"
                        alt="oeil ouvert"
                      />
                    ) : (
                      <img
                        className="img-password"
                        src="/images/oeil-fermé.png"
                        alt="oeil fermé"
                      />
                    )}
                  </button>
                </div>
                <div className="container-profile-input">
                  <input
                    className="profile-input-pass"
                    type={showNewPassword ? "text" : "password"}
                    placeholder="Nouveau mot de passe"
                    // name="new password"
                    minLength={6}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <button
                    className="toggle-button"
                    type="button"
                    onClick={() => handleShowPassword("new")}
                  >
                    {isEyeOpenNew ? (
                      <img
                        className="img-password"
                        src="/images/oeil-ouvert.png"
                        alt="oeil ouvert"
                      />
                    ) : (
                      <img
                        className="img-password"
                        src="/images/oeil-fermé.png"
                        alt="oeil fermé"
                      />
                    )}
                  </button>
                </div>
                <div className="container-profile-input">
                  <input
                    className="profile-input-pass"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirmation du nouveau mot de passe"
                    // name="check password"
                    minLength={6}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    className="toggle-button"
                    type="button"
                    onClick={() => handleShowPassword("confirm")}
                  >
                    {isEyeOpenConfirm ? (
                      <img
                        className="img-password"
                        src="/images/oeil-ouvert.png"
                        alt="oeil ouvert"
                      />
                    ) : (
                      <img
                        className="img-password"
                        src="/images/oeil-fermé.png"
                        alt="oeil fermé"
                      />
                    )}
                  </button>
                </div>
                <div className="message-password">{message}</div>
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
