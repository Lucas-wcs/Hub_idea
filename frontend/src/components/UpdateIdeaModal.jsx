/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

function UpdateIdeaModal({
  handleUpdateIdea,
  handleOpenModalIdeaDraft,
  usersAssociated,
  setUsersAssociated,
  draftIdea,
  handleClickUpdateCancelButton,
  setUpdateImage,
}) {
  const { theme } = useContext(ThemeContext);
  const [allUsers, setAllUsers] = useState([]);
  const { user } = useContext(UserContext);
  const [file, setFile] = useState(draftIdea.draftImage);

  const handleUploadImage = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const getUsers = async (e) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND}/api/users`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setAllUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChoseUser = async (e) => {
    const array = [...usersAssociated];
    const index = array.indexOf(e.target.value);
    if (index >= 0) {
      array.splice(index, 1);
    } else {
      array.push(String(e.target.value));
    }

    setUsersAssociated(array);
    // localStorage.setItem("usersAssociated", JSON.parse(array));
  };

  const getUserSAssocieted = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND}/api/impacted-users/ideas/${
          draftIdea.ideaId
        }`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const usersAssociatedIds = res.data.map((userAssociated) => {
        return String(userAssociated.userId);
      });

      // Set helps to delete items that are duplicated. After we go back to array typic with Array.from
      const uniqueIds = new Set([...usersAssociated, ...usersAssociatedIds]);
      setUsersAssociated(Array.from(uniqueIds));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getUserSAssocieted();
  }, [draftIdea.ideaId]);

  return (
    <div className="modal-idea-container">
      <div
        className={`create-idea-container ${
          theme === "dark" ? "dark" : "light"
        }`}
      >
        <div
          className="icon-close-container"
          onClick={handleClickUpdateCancelButton}
          role="presentation"
        >
          <img src="images/icon_cross.png" alt="cross" />
        </div>
        <h1>Votre idée</h1>
        <div className="form-entire-container">
          <div className="form-container">
            <form onSubmit={handleUpdateIdea}>
              <div className="form-title-container">
                {/* titre */}
                <label htmlFor="title">Titre</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={draftIdea.title}
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
                  defaultValue={
                    draftIdea.dateLimit && draftIdea.dateLimit.slice(0, 10)
                  }
                  className={`input-border ${theme === "dark" && "dark"}`}
                />
              </div>

              <div className="form-image-container">
                {/* Image */}

                <label htmlFor="idea-image">
                  Télécharger une image de couverture
                </label>

                <div className="image-input-container">
                  <img
                    src={file === null ? "/images/default-image.png" : file}
                    alt="default"
                  />
                  <input
                    className={`button-picture ${theme === "dark" && "dark"}`}
                    type="file"
                    id="ideaimage"
                    name="ideaimage"
                    accept="image/png, image/jpeg"
                    onChange={handleUploadImage}
                    onInput={(e) => {
                      setUpdateImage(e.target.files[0]);
                    }}
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

                  {allUsers.map((person) => {
                    return (
                      <tbody key={person.id}>
                        <tr>
                          <td
                            aria-label="image-checkbox"
                            className="checkbox-avatar"
                          >
                            <input
                              type="checkbox"
                              id="user"
                              name="user"
                              value={person.id}
                              checked={usersAssociated.includes(
                                String(person.id)
                              )}
                              onChange={(event) => handleChoseUser(event)}
                            />
                            {person.image_profil ? (
                              <img
                                className="avatar"
                                title="Profil"
                                src={`${import.meta.env.VITE_BACKEND}/uploads/${
                                  person.image_profil
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
                          <td>{person.firstname}</td>
                          <td>{person.lastname}</td>
                          <td>{person.email}</td>
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
                  defaultValue={draftIdea.description}
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

UpdateIdeaModal.propTypes = {
  handleUpdateIdea: PropTypes.func.isRequired,
  handleOpenModalIdeaDraft: PropTypes.func.isRequired,
  usersAssociated: PropTypes.arrayOf(PropTypes.string).isRequired,
  setUsersAssociated: PropTypes.func.isRequired,
  draftIdea: PropTypes.shape({
    title: PropTypes.string.isRequired,
    ideaId: PropTypes.string.isRequired,
    draftImage: PropTypes.string.isRequired,
    dateLimit: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  handleClickUpdateCancelButton: PropTypes.func.isRequired,
  setUpdateImage: PropTypes.func.isRequired,
};

export default UpdateIdeaModal;
