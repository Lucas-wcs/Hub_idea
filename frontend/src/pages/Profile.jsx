// voir pour la navbar
import { Link } from "react-router-dom";

function Profile() {
  // mettre les useState et handlers
  return (
    <div>
      <div className="profile-page">
        <div className="home-button">
          <Link to="/home">
            <img src="images/return-home.png" alt="bouton retour" />
          </Link>
        </div>
        <div className="profile-form">
          <div className="thumbnail">
            <img src="images/hugo.png" alt="my thumbnail" />
            <div>
              <button type="button">Télécharger photo</button>
            </div>
          </div>
          <div className="form-field">
            <div className="names">
              {" "}
              {/* voir si on doit créer un input caché */}
              <label htmlFor="firstname">Prénom</label>
              <input type="text" placeholder="Prénom" name="firstname" />
              {/* mettre value */}
              <label htmlFor="lastname">Nom</label>
              <input type="text" placeholder="Nom" name="lastname" />
              <label htmlFor="email">Adresse mail</label>
              <input type="email" placeholder="Email" name="email" />
            </div>

            <div className="passwords">
              <label className="label-password" htmlFor="password">
                Changer de mot de passe
              </label>
              <input
                type="password"
                placeholder="Mot de passe actuel"
                name="password"
              />
              <input
                type="password"
                placeholder="Nouveau mot de passe"
                name="password"
              />
              <input
                type="password"
                placeholder="Confirmation du nouveau mot de passe"
                name="check password"
              />
            </div>
            <div className="submit-button">
              <button type="submit">Sauvegarder</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
