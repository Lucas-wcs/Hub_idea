/* eslint-disable no-const-assign */
import axios from "axios";
import { useNavigate, useParams, useRouteLoaderData } from "react-router-dom";

function AdmindecisionModal() {
  const { ideas } = useRouteLoaderData("admin");

  const { id } = useParams();
  const idea = ideas.find((p) => p.id === parseInt(id, 10));

  const navigate = useNavigate();

  const handleCloseWindow = () => {
    navigate("/administrator");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let ideaToUpdate = {};
    if (e.nativeEvent.submitter.value === "soumettre") {
      ideaToUpdate = {
        status_id: "4",
        date_limit: e.target.date.value,
      };
    } else {
      ideaToUpdate = {
        status_id: "3",
        date_limit: e.target.date.value,
      };
    }

    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND}/api/ideas/admin-decision/${idea.id}`,
        ideaToUpdate
      );
    } catch (err) {
      console.error(err);
    }
    console.info(ideaToUpdate);
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
        <form onSubmit={handleSubmit}>
          <div className="date">
            <label htmlFor="start">{idea.date_limit.split("T")[0]}</label>
            <input type="date" id="start" name="date" />
          </div>
          <div className="decision">
            <button type="submit" value="soumettre" className="choice refuse">
              Soumettre l'idée au vote
            </button>
            <button type="submit" value="rejeter" className="choice accept">
              Ne pas soumettre l'idée au vote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdmindecisionModal;
