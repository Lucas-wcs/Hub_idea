import PropTypes from "prop-types";

function AddMemberModal({ handleOpenModalAddMember }) {
  return (
    <div className="addMemberModal">
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
        <form>
          <div className="form-top">
            <div className="inputs">
              <label htmlFor="name">Nom :</label>
              <input type="text" name="nom" className="input-top" />
            </div>
            <div className="inputs">
              <label htmlFor="prenom">Prénom :</label>
              <input type="text" name="prenom" className="input-top" />
            </div>
            <div className="inputs">
              <label htmlFor="email">Email :</label>
              <input type="text" name="email" className="input-top" />
            </div>
          </div>
          <div className="form-bottom">
            <div>
              <input type="checkbox" name="administrateur" />
              <label htmlFor="administrateur">Administrateur</label>
            </div>
            <div>
              <input type="checkbox" name="modérateur" />
              <label htmlFor="modérateur">Modérateur</label>
            </div>
          </div>
        </form>
        <div className="button-container">
          <button type="submit">Envoyer l'invitation</button>
        </div>
      </div>
    </div>
  );
}

AddMemberModal.propTypes = {
  handleOpenModalAddMember: PropTypes.func.isRequired,
};

export default AddMemberModal;
