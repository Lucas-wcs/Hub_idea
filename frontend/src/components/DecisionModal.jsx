function DecisionModal() {
  return (
    <div className="decision-modal-container">
      <div className="icon-close-container">
        <img src="images/icon_cross.png" alt="cross" />
      </div>
      <h1>Réaliser un repas de Noel</h1>
      <div className="image-form-container">
        <div className="coverimage-container">
          <img src="images/repas_noel.webp" alt="idea" />
        </div>
        <div className="progress-percentage-container">
          <progress id="decision" value="80" max="100" />
          <p>65%</p>
        </div>
        <div className="form-entire-container">
          <h2>Commentaire: </h2>
          <form action="">
            <textarea name="" id="" cols="30" rows="10" />
            <div className="buttons-container">
              <input className="button-blue" type="submit" value="Brouillon" />
              <input className="button-green" type="submit" value="Publier" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DecisionModal;
