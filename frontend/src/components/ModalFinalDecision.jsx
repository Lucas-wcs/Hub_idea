//  import { useState } from "react";
// bouton de fermeture de la modale
// state et crud rejeter et accepter idée

function ModaleFinaleDecision() {
  return (
    <div className="modal-final-decision">
      <div className="final-decision-container">
        <div className="close-button">
          <button type="button">Close</button>
        </div>
        <div className="title-container">
          <h1>Proposition: Repas de Noël</h1>
        </div>
        <div className="idea-picture-container">
          <img src="/images/repas_noel.webp" alt="repas de Noël" />
        </div>
        <div className="progress-bar-container">
          <progress id="file" value="65" max="100" />
          <p>65%</p>
        </div>
        <div className="comment-container">
          <div className="comment">
            <p>Commentaire</p>
          </div>
          <textarea
            name="comment-text"
            id="comment"
            cols="30"
            rows="10"
            placeholder="Mettre un commentaire si vous souhaitez expliquer votre décision  ... "
          />
        </div>
        <div className="idea-final-buttons">
          <button className="reject" type="submit">
            Rejeter définitivement l'idée
          </button>
          <button className="accept" type="submit">
            Accepter définitivement l'idée
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModaleFinaleDecision;
