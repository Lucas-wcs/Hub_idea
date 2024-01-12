import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

function IdeaCard({ title, ideaId, statusId }) {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  return (
    <div className="idea-card-container">
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
          <p className={user?.is_moderator && "is-moderator"}>
            Créée par Nicolas
          </p>
          <Link to={`/idea/${ideaId}`} className="button-green">
            <p>Voir détails</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

IdeaCard.propTypes = {
  title: PropTypes.string.isRequired,
  ideaId: PropTypes.number.isRequired,
  statusId: PropTypes.string.isRequired,
};

export default IdeaCard;
