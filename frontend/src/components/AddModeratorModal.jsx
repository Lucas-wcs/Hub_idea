import PropTypes from "prop-types";
import axios from "axios";
import { useRevalidator } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function AddModeratorModal({ handleOpenModalAddModerator, users }) {
  const revalidator = useRevalidator();
  const handleAddModerator = (id) => {
    axios
      .put(
        `${import.meta.env.VITE_BACKEND}/api/users/moderator/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(() => {
        revalidator.revalidate();
      })
      .catch((e) => console.error(e));
  };
  const { theme } = useContext(ThemeContext);

  return (
    <div className="modal-global-container-moderator">
      <div className={`addModeratorModal ${theme === "dark" && "dark"}`}>
        <div className="modal-cross-container">
          <div
            className="cross-img-container"
            onClick={handleOpenModalAddModerator}
            role="presentation"
          >
            <img src="/images/icon_cross.png" alt="cross_logo" />
          </div>
        </div>
        <h4>Ajouter des modérateurs</h4>
        <div className="content-container">
          {users
            .filter((nonMonderator) => {
              if (nonMonderator.is_moderator === 0) {
                return true;
              }
              return false;
            })
            .map((nonMonderator) => {
              return (
                <div className="line-container">
                  <span>{nonMonderator.firstname}</span>
                  <span>{nonMonderator.lastname}</span>
                  <input
                    className="button-add"
                    key={nonMonderator.id}
                    value="Ajouter"
                    onClick={() => handleAddModerator(nonMonderator.id)}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

AddModeratorModal.propTypes = {
  handleOpenModalAddModerator: PropTypes.func.isRequired,
  users: PropTypes.arrayOf.isRequired,
};

export default AddModeratorModal;
