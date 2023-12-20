//  import { useState } from "react";
// bouton de fermeture de la modale
// state et crud rejeter et accepter idée

function ModaleFinaleDecision() {
  return (
    <div className="modale-final-decision">
      <div className="idea-final-container">
        <div className="close-button">
          <button type="button">close</button>
        </div>
        <div className="header">
          <div className="title">
            <h1>Proposition: Réaliser un repas de Noël</h1>
          </div>
        </div>
        <div className="tall-idea-img-container">
          <div className="idea-img-container">
            <img src="/images/repas_noel.webp" alt=" repas de Noël" />
          </div>
        </div>

        <div className="progress-percentage-container">
          <progress id="file" value="65" max="100" />
          <p>65%</p>
          <div className="comment-finale-decision">
            <p>Commentaire:</p>
            <textarea
              name="comment-moderator"
              id="comment-moderator"
              cols="30"
              rows="10"
            />
          </div>
          <div className="moderator-decision-buttons">
            {/* voir si submit, rajouter name? */}
            <button type="submit">Refuser l'idée</button>
            <br />
            <button type="submit">Approuver définitivement l'idée</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModaleFinaleDecision;
