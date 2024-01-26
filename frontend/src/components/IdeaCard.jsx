import { useContext, useEffect, useState } from "react";
import axios from "axios";
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
  const [votes, setVotes] = useState([]);

  // eslint-disable-next-line consistent-return
  const loadVotes = async () => {
    try {
      const vote = await axios.get(
        `${import.meta.env.VITE_BACKEND}/api/votes/ideas/${ideaId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setVotes(vote.data);
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  useEffect(() => {
    loadVotes();
  }, []);

  const percentage = (n) => {
    let forVote = 0;
    for (let i = 0; i < n.length; i += 1) {
      if (n[i].is_vote === 1) {
        forVote += 1;
      }
    }
    return Math.round((forVote / n.length) * 100);
  };

  return (
    <div
      className={`idea-card-container ${statusId === 1 ? "ideaCardDraft" : ""}`}
    >
      <div className="status-image-container">
        <div className="card-image-container">
          <img src={image} alt={title} />
        </div>
        <div className="status-container">
          <p>{statusName}</p>
          {statusId === 1 ? (
            <button
              type="submit"
              onClick={() =>
                handleOpenModalIdeaDraft(title, dateLimit, description, ideaId)
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
          <progress
            id="file"
            value={votes.length === 0 ? 0 : percentage(votes)}
            max="100"
          />
          <p>{votes.length === 0 ? 0 : percentage(votes)}%</p>
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
