import { useLoaderData, useParams } from "react-router-dom";
import PropTypes from "prop-types";

function AdmindecisionModal({ handleOpenIdeaModal }) {
  const { ideas } = useLoaderData();

  const { id } = useParams();
  const idea = ideas.find((p) => p.id === parseInt(id, 10));

  return (
    <div className="adminDecisionModal">
      <div
        className="modal-cross-container"
        onClick={handleOpenIdeaModal}
        role="presentation"
      >
        <div className="cross-img-container" role="presentation">
          <img src="/images/icon_cross.png" alt="cross_logo" />
        </div>
      </div>
      <h4>{idea.title}</h4>
      <p className="description">{idea.idea_description}</p>
      <label htmlFor="start">{idea.date_limit}</label>

      <input
        type="date"
        id="start"
        name="trip-start"
        value="2023-07-22"
        min="2023-01-01"
        max="3000-12-31"
      />
      <div className="decision">
        <input
          type="submit"
          value="Soumettre l'idée au vote"
          className="choice refuse"
        />
        <input
          type="submit"
          value="Ne pas soumettre l'idée au vote"
          className="choice accept"
        />
      </div>
    </div>
  );
}

AdmindecisionModal.propTypes = {
  handleOpenIdeaModal: PropTypes.func.isRequired,
};

export default AdmindecisionModal;
