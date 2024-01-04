import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import ValidateModale from "../components/ValidateModale";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

function Profile() {
  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [isMessage, setIsMessage] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowsConfirmPassword] = useState(false);
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [isEyeOpenNew, setIsEyeOpenNew] = useState(false);
  const [isEyeOpenConfirm, setIsEyeOpenConfirm] = useState(false);
  const [isOpenModificationModal, setIsOpenModificationModal] = useState(false);

  const handlePasswordChange = (event, setPassword) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (newPassword.length > 0 && confirmPassword.length > 0) {
      if (newPassword === confirmPassword) {
        setMessage("Les mots de passe correspondent");
        setIsMessage(true);
      } else if (newPassword !== confirmPassword) {
        setMessage("Les mots de passe ne correspondent pas");
        setIsMessage(false);
      } else {
        setMessage("");
      }
    }
  }, [newPassword, confirmPassword]);

  const handlePut = async (e) => {
    e.preventDefault();
    const handleConfirmationModification = () => {
      e.preventDefault();
      setIsOpenModificationModal(true);
    };

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
      handleConfirmationModification();
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

  const handleReturnToHome = (e) => {
    e.preventDefault();
    navigate("/home");
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
          {/* div for modal */}
          <div
            className={`${
              isOpenModificationModal ? "" : "hide-modification-modal"
            }`}
          >
            <ValidateModale
              type="modale6"
              setTypeModal={() => console.info("")}
              handleReturnToHome={handleReturnToHome}
            />
          </div>
          {/* div modal ends here */}
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
                <div className="container-profile-input">
                  <input
                    className="profile-input-pass"
                    type={showPassword ? "text" : "password"}
                    placeholder="Mot de passe actuel"
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
                    minLength={6}
                    value={newPassword}
                    onInput={(event) =>
                      handlePasswordChange(event, setNewPassword)
                    }
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
                    name="password"
                    minLength={6}
                    value={confirmPassword}
                    onInput={(event) =>
                      handlePasswordChange(event, setConfirmPassword)
                    }
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
                <div className={isMessage ? "correct" : "incorrect"}>
                  <p className="message">{message}</p>
                </div>
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
