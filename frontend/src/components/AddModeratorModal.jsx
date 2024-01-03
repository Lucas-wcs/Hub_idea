import PropTypes from "prop-types";
import axios from "axios";
import { useRevalidator } from "react-router-dom";

function AddModeratorModal({ handleOpenModalAddModerator, users }) {
  const revalidator = useRevalidator();
  const handleAddModerator = (id) => {
    axios
      .put(`http://localhost:3310/api/users/moderator/${id}`)
      .then(() => {
        revalidator.revalidate();
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="addModeratorModal">
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
  );
}

AddModeratorModal.propTypes = {
  handleOpenModalAddModerator: PropTypes.func.isRequired,
  users: PropTypes.arrayOf.isRequired,
};

export default AddModeratorModal;
