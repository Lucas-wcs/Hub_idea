import React from "react";

function IdeaCard() {
  return (
    <div className="idea-card-container">
      <div className="status-image-container">
        <div className="card-image-container">
          <img src="/images/repas_noel.webp" alt="idea" />
        </div>
        <div className="status-container">
          <p>Fin dans 3 jours</p>
          <img src="/images/icons/timer_icon.png" alt="timer" />
        </div>
      </div>
      <div className="text-container">
        <p className="idea-title">Réaliser un repas de Noel</p>
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

export default IdeaCard;
