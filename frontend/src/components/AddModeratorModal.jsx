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
      <div className="modal-main-container">
        <h4>Ajouter des modérateurs</h4>
        <div className="table-container">
          <table>
            <tr>
              <th scope="col" aria-label="col">
                {" "}
              </th>
              <th scope="col">Nom</th>
              <th scope="col">Prénom</th>
            </tr>
            {users
              .filter((nonMonderator) => {
                if (nonMonderator.is_moderator === 0) {
                  return true;
                }
                return false;
              })
              .map((nonMonderator) => {
                return (
                  <tr key={nonMonderator.id}>
                    <td className="td-one">
                      <button
                        type="button"
                        onClick={() => handleAddModerator(nonMonderator.id)}
                      >
                        Add
                      </button>
                      <div className="img-container">
                        <img src="/images/hugo.png" alt="pic" />
                      </div>
                    </td>
                    <td>{nonMonderator.firstname}</td>
                    <td>{nonMonderator.lastname}</td>
                  </tr>
                );
              })}
          </table>
        </div>
        <div className="button-container">
          <button type="submit">Valider</button>
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
