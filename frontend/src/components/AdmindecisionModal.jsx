import { useNavigate, useParams, useRouteLoaderData } from "react-router-dom";

function AdmindecisionModal() {
  const { ideas } = useRouteLoaderData("admin");

  const { id } = useParams();
  const idea = ideas.find((p) => p.id === parseInt(id, 10));

  const navigate = useNavigate();

  const handleCloseWindow = () => {
    navigate("/administrator");
  };

  return (
    <div className="modal-global-container-decisionAdmin">
      <div className="adminDecisionModal">
        <div
          className="modal-cross-container"
          onClick={handleCloseWindow}
          role="presentation"
        >
          <div className="cross-img-container" role="presentation">
            <img src="/images/icon_cross.png" alt="cross_logo" />
          </div>
        </div>
        <h4>{idea.title}</h4>
        <p className="description">{idea.idea_description}</p>
        <label htmlFor="start">{idea.date_limit.split("T")[0]}</label>

        <input type="date" id="start" name="date" />
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
    </div>
  );
}

export default AdmindecisionModal;
