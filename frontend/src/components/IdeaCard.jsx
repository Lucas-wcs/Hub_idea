import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

function IdeaCard({
  title,
  dateLimit,
  image,
  description,
  ideaId,
  statusName,
  statusId,
  createdUserFirstname,
  handleOpenModalIdeaDraft,
}) {
  // const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  return (
    <div
      className={`idea-card-container ${statusId === 1 ? "ideaCardDraft" : ""}`}
    >
      <div className="status-image-container">
        <div className="card-image-container">
          <img src="/images/repas_noel.webp" alt="idea" />
        </div>
        <div className="status-container">
          <p>{statusName}</p>
          {statusId === 1 ? (
            <button
              type="submit"
              onClick={() =>
                handleOpenModalIdeaDraft(title, dateLimit, image, description)
              }
            >
              {" "}
              <img
                src="images/icon-modify.png"
                alt=""
                className="modify-draft"
              />
            </button>
          ) : (
            ""
          )}
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
            Créée par{" "}
            {createdUserFirstname === (user && user.firstname)
              ? "vous"
              : createdUserFirstname}
          </p>
          {statusId === 1 ? (
            <Link to={`/idea/${ideaId}`} className="disabled-button">
              <p>Voir détails</p>
            </Link>
          ) : (
            <Link to={`/idea/${ideaId}`} className="button-green">
              <p>Voir détails</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

IdeaCard.propTypes = {
  title: PropTypes.string.isRequired,
  dateLimit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ideaId: PropTypes.number.isRequired,
  statusId: PropTypes.number.isRequired,
  statusName: PropTypes.string.isRequired,
  createdUserFirstname: PropTypes.string.isRequired,
  handleOpenModalIdeaDraft: PropTypes.func,
};

IdeaCard.defaultProps = {
  handleOpenModalIdeaDraft: null,
};

export default IdeaCard;
