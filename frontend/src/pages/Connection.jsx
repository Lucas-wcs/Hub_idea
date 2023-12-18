function Connection() {
  return (
    <div>
      <div className="container-form">
        <div className="container-input">
          <h1 className="title-connection">Bienvenue</h1>
          <input
            className="input-button-style"
            type="text"
            placeholder="Adresse mail"
          />
          <input
            className="input-button-style"
            type="password"
            placeholder="Mot de passe"
          />
          <button type="button">
            <span className="button_top"> Se connecter</span>
          </button>
        </div>
      </div>
      <hr className="custom-hr" />
      <div className="presentation-hub">
        <div className="image-container">
          <img
            className="images-connection"
            src="/images/hand.gif"
            alt="idea-thinking"
          />
          <p className="text-connection">Etape 1 : Créer une idée</p>
        </div>
        <img className="arrow" src="/images/right-arrow.png" alt="arrow" />
        <div className="image-container">
          <img
            className="images-connection"
            src="/images/voting.gif"
            alt="idea-voting"
          />
          <p className="text-connection">Etape 2 : Votez</p>
        </div>
        <img className="arrow" src="/images/right-arrow.png" alt="arrow" />
        <div className="image-container">
          <img
            className="images-connection"
            src="/images/vote.gif"
            alt="idea-vote"
          />
          <p className="text-connection">Etape 3 : Décision finale</p>
        </div>
      </div>
      <div className="container-button-rules">
        <button type="button">
          <span className="button_top"> Voir le réglement</span>
        </button>
      </div>
    </div>
  );
}
export default Connection;
