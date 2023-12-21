import PropTypes from "prop-types";

function AddModeratorModal({ handleOpenModalAddModerator }) {
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
            <tr>
              <td className="td-one">
                <input type="checkbox" />
                <div className="img-container">
                  <img src="/images/hugo.png" alt="pic" />
                </div>
              </td>
              <td>Durand</td>
              <td>Pascal</td>
            </tr>
            <tr>
              <td className="td-one">
                <input type="checkbox" />
                <div className="img-container">
                  <img src="/images/hugo.png" alt="pic" />
                </div>
              </td>
              <td>Durand</td>
              <td>Pascal</td>
            </tr>
            <tr>
              <td className="td-one">
                <input type="checkbox" />
                <div className="img-container">
                  <img src="/images/hugo.png" alt="pic" />
                </div>
              </td>
              <td>Durand</td>
              <td>Pascal</td>
            </tr>
            <tr>
              <td className="td-one">
                <input type="checkbox" />
                <div className="img-container">
                  <img src="/images/hugo.png" alt="pic" />
                </div>
              </td>
              <td>Durand</td>
              <td>Pascal</td>
            </tr>
            <tr>
              <td className="td-one">
                <input type="checkbox" />
                <div className="img-container">
                  <img src="/images/hugo.png" alt="pic" />
                </div>
              </td>
              <td>Durand</td>
              <td>Pascal</td>
            </tr>
            <tr>
              <td className="td-one">
                <input type="checkbox" />
                <div className="img-container">
                  <img src="/images/hugo.png" alt="pic" />
                </div>
              </td>
              <td>Durand</td>
              <td>Pascal</td>
            </tr>
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
};

export default AddModeratorModal;
