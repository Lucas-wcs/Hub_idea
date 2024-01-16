import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

function IdeaCard({ title, ideaId, statusId, createdUserFirstname, image }) {
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
    <div className="idea-card-container">
      <div className="status-image-container">
        <div className="card-image-container">
          <img src={image} alt={title} />
        </div>
        <div className="status-container">
          <p>{statusId}</p>
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
            Créée par {createdUserFirstname}
          </p>
          <Link to={`/idea/${ideaId}`} className="button-green">
            <p>Voir détails</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

IdeaCard.propTypes = {
  title: PropTypes.string.isRequired,
  ideaId: PropTypes.number.isRequired,
  statusId: PropTypes.string.isRequired,
  createdUserFirstname: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default IdeaCard;
