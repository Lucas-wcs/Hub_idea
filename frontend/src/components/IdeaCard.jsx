import { useContext } from "react";
import PropTypes from "prop-types";
import DecisionModal from "./DecisionModal";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

function IdeaCard({
  title,
  statusId,
  isOpenDecisionModal,
  setIsOpenDecisionModal,
}) {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  const handleClickDecision = (e) => {
    e.preventDefault();
    setIsOpenDecisionModal((current) => !current);
  };

  return (
    <div className="idea-card-container">
      {/* div for modal */}
      <div className={`${isOpenDecisionModal ? "" : "hide-decision-modal"}`}>
        <DecisionModal handleClickDecision={handleClickDecision} />
      </div>
      <div className="status-image-container">
        <div className="card-image-container">
          <img src="/images/repas_noel.webp" alt="idea" />
        </div>
        <div className="status-container">
          <p>{statusId}</p>
          <img
            className="clickable-image"
            src={
              theme === "dark"
                ? "/images/icons/timer_icon_light.png"
                : "/images/icons/timer_icon.png"
            }
            alt="logo_retour"
          />
        </div>
      </div>
      <div className="text-container">
        <p className="idea-title">{title}</p>
        <div className="progress-percentage-container">
          <progress id="file" value="65" max="100" />
          <p>65%</p>
        </div>
        <div className="name-button-container">
          <p className={`${user.is_moderator && "is-moderator"}`}>
            Créée par Nicolas
          </p>
          <button
            className={`button-blue ${
              user.is_moderator ? "" : "is-not-moderator"
            }`}
            type="button"
            onClick={handleClickDecision}
          >
            Modérateur
          </button>
          <button className="button-green" type="button">
            Voir détails
          </button>
        </div>
      </div>
    </div>
  );
}

IdeaCard.propTypes = {
  title: PropTypes.string.isRequired,
  statusId: PropTypes.string.isRequired,
  isOpenDecisionModal: PropTypes.bool.isRequired,
  setIsOpenDecisionModal: PropTypes.func.isRequired,
};

export default IdeaCard;
