import PropTypes from "prop-types";
import axios from "axios";
import { useRevalidator } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

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
        <div className="modal-main-container">
          <h4>Ajouter des modérateurs</h4>
          <div className="table-container">
            <table>
              <tr>
                <th scope="col" aria-label="col">
                  {" "}
                </th>
                <th
                  className={`text-name ${theme === "dark" && "dark"}`}
                  scope="col"
                >
                  Nom
                </th>
                <th
                  className={`text-firstname ${theme === "dark" && "dark"}`}
                  scope="col"
                >
                  Prénom
                </th>
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
                        <div
                          className="add-logo-container"
                          onClick={() => handleAddModerator(nonMonderator.id)}
                          role="presentation"
                        >
                          <img src="/images/icons_addm.png" alt="add_logo" />
                        </div>
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
