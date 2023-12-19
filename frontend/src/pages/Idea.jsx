function Idea() {
  return (
    <div className="idea">
      <h2>Réaliser un repas de Noel</h2>
      <h3>Créé par Nicolas Hugo</h3>
      <div className="idea-main-container">
        <div className="idea-main-img-container">
          <img src="/images/repas_noel.webp" alt="repas_noel_logo" />
        </div>
        <div className="idea-main-info-container">
          <h4>Description</h4>
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme assembla ensemble des morceaux de texte pour
            réaliser un livre spécimen de polices de texte. Il n'a pas fait que
            survivre cinq siècles, mais s'est aussi adapté à la bureautique
            informatique, sans que son contenu n'en soit modifié. Il a été
            popularisé dans les années 1960 grâce à la vente de feuilles
            Letraset contenant des passages du Lorem Ipsum, et, plus récemment,
            par son inclusion dans des applications de mise en page de texte,
            comme Aldus PageMaker.
          </p>
          <div className="idea-info-vote">
            <progress id="avancement" value="40" max="100" />
            <div className="idea-info-vote-bottom">
              <p>35 personnes ont voté</p>
              <div className="idea-chosendate">
                <div className="idea-logocalandar-container">
                  <img src="/images/icons_calendrier.png" alt="calandar_logo" />
                </div>
                <div className="idea-enddate">
                  <p>Date de fin :</p>
                  <p>18_12_2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="idea-info-impacted-vote-container">
            <div className="idea-impacted-container">
              <p>Personnes impactées</p>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
            <div className="idea-vote-container">
              <button type="submit">
                <div className="vote-logo-container">
                  <img
                    src="/images/icons_pouces_bas.png"
                    alt="logo_pouce_bas"
                  />
                </div>
                <p>Je suis contre</p>
              </button>
              <button type="submit">
                <div className="vote-logo-container">
                  <img
                    src="/images/icons_pouce_haut.png"
                    alt="logo_pouce_haut"
                  />
                </div>
                <p>Je suis pour</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="idea-comments-container">
        <h3>Commentaires :</h3>
        <div className="idea-comment-container">
          <div>
            <img src="/images/figure1.png" alt="figure1" />
          </div>
          <div>
            <p className="idea-bold">Victoria :</p>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500,
              quand un
            </p>
          </div>
        </div>
        <div className="idea-comment-container">
          <div>
            <img src="/images/figure1.png" alt="figure1" />
          </div>
          <div>
            <p className="idea-bold">Victoria :</p>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500,
              quand un
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Idea;
