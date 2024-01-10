import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";

function CreateIdeaModal({ handleOpenModalIdea, handleSubmitIdea }) {
  const { theme } = useContext(ThemeContext);
  const [allUsers, setAllUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND}/api/users`
      );

      setAllUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="modal-idea-container">
      <div
        className={`create-idea-container ${
          theme === "dark" ? "dark" : "light"
        }`}
      >
        <div
          className="icon-close-container"
          onClick={handleOpenModalIdea}
          role="presentation"
        >
          <img src="images/icon_cross.png" alt="cross" />
        </div>
        <h1>Votre idée</h1>
        <div className="form-entire-container">
          <div className="form-container">
            <form onSubmit={handleSubmitIdea}>
              <div className="form-title-container">
                {/* titre */}
                <label htmlFor="title">Titre</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className={`input-border ${theme === "dark" && "dark"}`}
                />
              </div>
              <div className="form-date-container">
                {/* Date de fin */}
                <label htmlFor="date">Date de fin</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className={`input-border ${theme === "dark" && "dark"}`}
                />
              </div>

              <div className="form-image-container">
                {/* Image */}

                <label htmlFor="idea-image">
                  Télécharger une image de couverture
                </label>

                <div className="image-input-container">
                  <img src="/images/default-image.png" alt="default" />
                  <input
                    className={`button-picture ${theme === "dark" && "dark"}`}
                    type="file"
                    id="ideaimage"
                    name="ideaimage"
                    accept="image/png, image/jpeg"
                  />
                </div>
              </div>
              <label htmlFor="user">Personnes impactées</label>
              <div className="form-impacted-person-container">
                {/* Personne impactées */}
                <table className={`table ${theme === "dark" && "dark"}`}>
                  <thead>
                    <tr>
                      <th aria-label="image-checkbox">&nbsp;</th>
                      <th>Prénom</th>
                      <th>Nom</th>
                      <th>Email</th>
                    </tr>
                  </thead>

                  {allUsers.map((user) => {
                    return (
                      <tbody>
                        <tr key={user.id}>
                          <td
                            aria-label="image-checkbox"
                            className="checkbox-avatar"
                          >
                            <input type="checkbox" id="user" name="user" />
                            {user.image_profil ? (
                              <img
                                className="avatar"
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
                          </td>
                          <td>{user.firstname}</td>
                          <td>{user.lastname}</td>
                          <td>{user.email}</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
              <div className="form-description-container">
                {/* personne Déscription */}
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  className={`input-border ${theme === "dark" && "dark"}`}
                />
              </div>
              <div className="buttons-container">
                {/* submit buttons */}
                <input
                  className="button-blue"
                  type="submit"
                  value="Brouillon"
                />
                <input
                  className="button-green"
                  type="submit"
                  value="Publier"
                  // onClick={handleClickPublish}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

CreateIdeaModal.propTypes = {
  handleOpenModalIdea: PropTypes.func.isRequired,
  handleSubmitIdea: PropTypes.func.isRequired,
};

export default CreateIdeaModal;
