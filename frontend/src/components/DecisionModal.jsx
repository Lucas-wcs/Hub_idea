import PropTypes from "prop-types";

function DecisionModal({ handleClickDecision }) {
  return (
    <div className="decision-modal-container">
      <div className="decision-container">
        <div
          className="icon-close-container"
          onClick={handleClickDecision}
          role="presentation"
        >
          <img src="images/icon_cross.png" alt="cross" />
        </div>
        <h1>Réaliser un repas de Noel</h1>
        <div className="image-form-container">
          <div className="coverimage-container">
            <img src="images/repas_noel.webp" alt="idea" />
          </div>
          <div className="progress-percentage-container">
            <progress id="decision" value="80" max="100" />
            <p>65%</p>
          </div>
          <div className="form-entire-container">
            <h2>Commentaire: </h2>
            <form action="">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Mettre un commentaire si vous souhaitez expliquer votre décision  ... "
              />
              <div className="buttons-container">
                <input
                  className="button-blue"
                  type="submit"
                  value="Refus de l’idée"
                  onClick={handleClickDecision}
                />
                <input
                  className="button-green"
                  type="submit"
                  value="Approuver l’idée"
                  onClick={handleClickDecision}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

DecisionModal.propTypes = {
  handleClickDecision: PropTypes.func.isRequired,
};

export default DecisionModal;
