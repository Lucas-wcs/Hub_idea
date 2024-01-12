import { useContext, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import DecisionModal from "../components/DecisionModal";
import ValidateModale from "../components/ValidateModale";
import { ThemeContext } from "../context/ThemeContext";

function Idea() {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  const idea = useLoaderData();
  const [isOpenDecisionModal, setIsOpenDecisionModal] = useState(false);
  const [isOpenDecisionConfirmModal, setIsOpenDecisionConfirmModal] =
    useState(false);
  const [buttonContre, setButtonContre] = useState(false);
  const [buttonPour, setButtonPour] = useState(false);

  // comments
  const [comment, setComment] = useState("");
  // const [commentData, setCommentData] = useState(useLoaderData());
  const [comments, setComments] = useState([]);

  const IdeaComments = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND}/api/comments-by-idea/${idea[0].id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setComments(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des commentaires :", error);
    }
  };

  const postComment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND}/api/comments`,
        {
          ideaId: idea[0].id,
          userId: user.id,
          description: comment,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      if (response.status === 201) {
        IdeaComments();
      }
    } catch (error) {
      console.error("Erreur", error);
    }
  };

  useEffect(() => {
    IdeaComments();
  }, []);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // for showing just date without hours
  const date = idea[0].date_limit.split("T");

  // vote
  const handleClickVote = (e) => {
    if (e.target.value === "contre") {
      setButtonPour(true);
    } else if (e.target.value === "pour") {
      setButtonContre(true);
    }
  };

  // modal for moderateur
  const handleClickDecisionModal = () => {
    setIsOpenDecisionModal((current) => !current);
  };

  const handleDecisionConfirmModal = () => {
    setIsOpenDecisionConfirmModal((current) => !current);
  };

  const handleClickDecisionValidate = (e) => {
    e.preventDefault();
    setIsOpenDecisionModal((current) => !current);
    handleDecisionConfirmModal();
  };

  const handleClickDecisionRefuse = (e) => {
    e.preventDefault();
    setIsOpenDecisionModal((current) => !current);
    handleDecisionConfirmModal();
  };

  return (
    <>
      {/* div for modal */}
      <div className={`${isOpenDecisionModal ? "" : "hide-decision-modal"}`}>
        <DecisionModal
          handleClickDecisionValidate={handleClickDecisionValidate}
          handleClickDecisionRefuse={handleClickDecisionRefuse}
          handleClickDecisionModal={handleClickDecisionModal}
        />
      </div>
      <div
        className={`${
          isOpenDecisionConfirmModal ? "" : "hide-decision-confirm-modal"
        }`}
      >
        <ValidateModale
          type="modale4"
          setTypeModal={() => console.info("")}
          handleDecisionConfirmModal={handleDecisionConfirmModal}
        />
      </div>
      {/* div for modal until here */}
      <div
        className={`home-container ${
          isOpenDecisionModal && "home-container-fixed"
        }`}
      />
      <div className="idea">
        <h2>{idea[0].title}</h2>
        <h3>Créé par Nicolas Hugo</h3>
        <div className="idea-main-container">
          <div className="idea-main-img-container">
            <img src="/images/repas_noel.webp" alt="repas_noel_logo" />
          </div>
          <div className="idea-main-info-container">
            <h4>Description</h4>
            <p>{idea[0].idea_description}</p>
            <div className="idea-info-vote">
              <progress id="avancement" value="40" max="100" />
              <div className="idea-info-vote-bottom">
                <p>35 personnes ont voté</p>
                <div className="idea-chosendate">
                  <div className="idea-logocalandar-container">
                    <img
                      src="/images/icons_calendrier.png"
                      alt="calandar_logo"
                    />
                  </div>
                  <div className="idea-enddate">
                    <p>Date de fin :</p>
                    <p>{date[0]}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="idea-impacted-container">
              <p>Personnes impactées</p>
              <div className="impacteduser-image-container">
                <img src="/images/hugo.png" alt="" />
              </div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
            <div className="idea-vote-container">
              <button
                className={`button-moderateur ${
                  user && user.is_moderator ? "" : "is-not-moderator"
                }`}
                type="button"
                onClick={handleClickDecisionModal}
              >
                Modérateur
              </button>
              <button
                className="button-vote vote-pour"
                type="button"
                value="contre"
                name="name"
                onClick={handleClickVote}
                disabled={buttonContre}
              >
                <div className="vote-logo-container">
                  <img
                    src="/images/icons_pouces_bas.png"
                    alt="logo_pouce_bas"
                  />
                </div>
                Je suis contre
              </button>
              <button
                className="button-vote vote-contre"
                type="submit"
                value="pour"
                onClick={handleClickVote}
                disabled={buttonPour}
              >
                <div className="vote-logo-container">
                  <img
                    src="/images/icons_pouce_haut.png"
                    alt="logo_pouce_haut"
                  />
                </div>
                Je suis pour
              </button>
            </div>
          </div>
        </div>

        <div className="idea-comments-container">
          <h3>Commentaires :</h3>
          <div className="idea-comment-container">
            <div className="container-post-message">
              {user.image_profil ? (
                <img
                  className="img-comment-user"
                  title="Profil"
                  src={`${import.meta.env.VITE_BACKEND}/uploads/${
                    user.image_profil
                  }`}
                  alt="profile"
                />
              ) : (
                <img
                  className="img-comment-user"
                  title="Profil"
                  src={
                    theme === "dark"
                      ? "/images/icons/avatar_icon_dark.png"
                      : "/images/icons/avatar_icon.png"
                  }
                  alt="default profile"
                />
              )}
              <p className="idea-bold">{user.firstname + user.lastname}</p>
              <form onSubmit={postComment}>
                <textarea value={comment} onChange={handleCommentChange} />
                <button className="button-comment" type="submit">
                  Poster votre commentaire
                </button>
              </form>
              <div className="idea-container">
                <h2>{idea.title}</h2>
                <p>{idea.description}</p>
              </div>
            </div>
          </div>

          <div className="idea-comment-container">
            <div className="comments-container">
              <div>
                {comments.map((com) => (
                  <div className="container-new-comment" key={com.id}>
                    <p className="idea-bold">
                      {`${com.firstname} ${com.lastname}`} :
                    </p>
                    <p className="new-comment">{com.description}</p>
                    <div>
                      {com.image_profil ? (
                        <img
                          className="img-comment-user"
                          title="Profil"
                          src={`${import.meta.env.VITE_BACKEND}/uploads/${
                            com.image_profil
                          }`}
                          alt="profile"
                        />
                      ) : (
                        <img
                          className="img-comment-user"
                          title="Profil"
                          src={
                            theme === "dark"
                              ? "/images/icons/avatar_icon_dark.png"
                              : "/images/icons/avatar_icon.png"
                          }
                          alt="default profile"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export const loaderIdea = async ({ params }) => {
  try {
    const idea = await axios.get(
      `${import.meta.env.VITE_BACKEND}/api/ideas/${params.id}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return idea.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default Idea;
