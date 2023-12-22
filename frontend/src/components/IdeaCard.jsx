import { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./ThemeContext";

function IdeaCard({ title }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="idea-card-container">
      <div className="status-image-container">
        <div className="card-image-container">
          <img src="/images/repas_noel.webp" alt="idea" />
        </div>
        <div className="status-container">
          <p>Fin dans 3 jours</p>
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
          <p>Créée par Nicolas</p>
          <button type="button">Voir détails</button>
        </div>
      </div>
    </div>
  );
}

IdeaCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default IdeaCard;
