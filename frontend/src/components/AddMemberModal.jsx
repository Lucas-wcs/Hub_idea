import axios from "axios";
import PropTypes from "prop-types";
import { useRevalidator } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function AddMemberModal({ handleOpenModalAddMember }) {
  const revalidator = useRevalidator();
  const { theme } = useContext(ThemeContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstname = e.target.firstname.value;
    const lastname = e.target.lastname.value;
    const email = e.target.email.value;
    const administrator = e.target.administrator.checked;
    const moderator = e.target.moderator.checked;

    try {
      // eslint-disable-next-line no-unused-vars
      const res = await axios.post(
        "http://localhost:3310/api/users",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        },
        {
          firstname,
          lastname,
          email,
          is_administrator: administrator,
          is_moderator: moderator,
        }
      );
      revalidator.revalidate();
      e.target.firstname.value = "";
      e.target.lastname.value = "";
      e.target.email.value = "";
      e.target.administrator.checked = false;
      e.target.moderator.checked = false;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="modal-global-container-member">
      <div className={`addMemberModal ${theme === "dark" && "dark"}`}>
        <div className="modal-cross-container">
          <div
            className="cross-img-container"
            onClick={handleOpenModalAddMember}
            role="presentation"
          >
            <img src="/images/icon_cross.png" alt="cross_logo" />
          </div>
        </div>
        <div className="modal-main-container">
          <h4>Ajouter un membre</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-top">
              <div className="inputs">
                <label htmlFor="firstname">Nom :</label>
                <input
                  type="text"
                  name="firstname"
                  className={`input-top ${theme === "dark" && "dark"} `}
                />
              </div>
              <div className="inputs">
                <label htmlFor="lastname">Prénom :</label>
                <input
                  type="text"
                  name="lastname"
                  className={`input-top ${theme === "dark" && "dark"}`}
                />
              </div>
              <div className="inputs">
                <label htmlFor="email">Email :</label>
                <input
                  type="text"
                  name="email"
                  className={`input-top ${theme === "dark" && "dark"}`}
                />
              </div>
            </div>
            <div className="form-bottom">
              <div>
                <input type="checkbox" name="administrator" />
                <label htmlFor="administrator">Administrateur</label>
              </div>
              <div>
                <input type="checkbox" name="moderator" />
                <label htmlFor="modérator">Modérateur</label>
              </div>
            </div>
            <div className="button-container">
              <button type="submit">Confirmer les informations</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

AddMemberModal.propTypes = {
  handleOpenModalAddMember: PropTypes.func.isRequired,
};

export default AddMemberModal;
