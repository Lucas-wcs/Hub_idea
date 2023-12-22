// voir pour la navbar
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ThemeContext } from "../components/ThemeContext";

function Profile() {
  // const users = useLoaderData();
  const navigate = useNavigate();
  const { id } = useParams();
  const { theme } = useContext(ThemeContext);

  const [thisUser, setThisUser] = useState(undefined);

  const userLoaderById = async () => {
    try {
      const userById = await axios.get(
        `${import.meta.env.VITE_BACKEND}/api/users/${id}`
      );
      setThisUser(userById.data[0]);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (thisUser !== "") {
      userLoaderById();
    }
  }, [id]);

  const handlePut = async (e) => {
    e.preventDefault();
    const imageProfil = thisUser.image_profil;
    const firstname = e.target.firstname.value;
    const lastname = e.target.lastname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const isAdmin = thisUser.is_administrator;
    const isModerator = thisUser.is_moderator;

    try {
      // eslint-disable-next-line no-unused-vars
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND}/api/users/${id}`,
        {
          imageProfil,
          firstname,
          lastname,
          email,
          password,
          is_administrator: isAdmin,
          is_moderator: isModerator,
        }
      );

      navigate("/home");
    } catch (error) {
      console.error(error);
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
          {thisUser && (
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
                  defaultValue={thisUser.firstname}
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
                  defaultValue={thisUser.lastname}
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
                  defaultValue={thisUser.email}
                />
              </div>

              <div className="profile-form-password">
                <label className="label-profile-pass" htmlFor="password">
                  Changer de mot de passe
                </label>
                <input
                  className="profile-input-pass"
                  type="password"
                  placeholder="Mot de passe actuel"
                  name="password"
                />

                <input
                  className="profile-input-pass"
                  type="password"
                  placeholder="Nouveau mot de passe"
                  name="password"
                />

                <input
                  className="profile-input-pass"
                  type="password"
                  placeholder="Confirmation du nouveau mot de passe"
                  name="check password"
                />
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

export const userLoader = async () => {
  try {
    const users = await axios.get(`${import.meta.env.VITE_BACKEND}/api/users`);

    return users.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default Profile;
