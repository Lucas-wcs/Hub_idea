// voir pour la navbar
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <div>
        <Link to="/home">
          <button type="button">
            <img src="/images/retour.png" alt="bouton retour" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
