import PropTypes from "prop-types";

function DecisionModal({
  handleClickDecisionModal,
  handleClickDecisionValidate,
  handleClickDecisionRefuse,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.nativeEvent.submitter.value === "Refus de l’idée") {
      handleClickDecisionRefuse(event.target.decisioncomment.value);
    } else {
      handleClickDecisionValidate(event.target.decisioncomment.value);
    }
  };
  return (
    <div className="decision-modal-container">
      <div className="decision-container">
        <div
          className="icon-close-container"
          onClick={handleClickDecisionModal}
          role="presentation"
        >
          <img src="../public/images/icon_cross.png" alt="cross" />
        </div>
        <h1>Réaliser un repas de Noel</h1>
        <div className="image-form-container">
          <div className="coverimage-container">
            <img src="/images/repas_noel.webp" alt="idea" />
          </div>
          <div className="form-entire-container">
            <h2>Commentaire: </h2>
            <form action="submit" onSubmit={handleSubmit}>
              <textarea
                name="decisioncomment"
                id="decisioncomment"
                cols="30"
                rows="10"
                placeholder="Mettre un commentaire si vous souhaitez expliquer votre décision  ... "
              />
              <div className="buttons-container">
                <input
                  className="button-blue"
                  type="submit"
                  value="Refus de l’idée"
                  // onClick={handleClickDecisionRefuse}
                />
                <input
                  className="button-green"
                  type="submit"
                  value="Approuver l’idée"
                  // onClick={handleClickDecisionValidate}
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
  handleClickDecisionModal: PropTypes.func.isRequired,
  handleClickDecisionValidate: PropTypes.func.isRequired,
  handleClickDecisionRefuse: PropTypes.func.isRequired,
};

export default DecisionModal;
