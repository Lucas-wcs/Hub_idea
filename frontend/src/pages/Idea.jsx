import { useContext, useState, useEffect } from "react";
import { useLoaderData, useRevalidator } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import DecisionModal from "../components/DecisionModal";
import ValidateModale from "../components/ValidateModale";
import { ThemeContext } from "../context/ThemeContext";

function Idea() {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  const { idea, votes } = useLoaderData();
  const revalidator = useRevalidator();
  const [isOpenDecisionModal, setIsOpenDecisionModal] = useState(false);
  const [isOpenDecisionConfirmModal, setIsOpenDecisionConfirmModal] =
    useState(false);
  const [buttonContre, setButtonContre] = useState(false);
  const [buttonPour, setButtonPour] = useState(false);
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(0);

  // comments
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // to show or not vote buttons
  const objectToFind1 = user && {
    user_id: user.id,
    idea_id: idea[0].id,
    is_vote: 1,
  };
  const objectToFind2 = user && {
    user_id: user.id,
    idea_id: idea[0].id,
    is_vote: 0,
  };

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
    setComment("");
  };

  useEffect(() => {
    IdeaComments();
  }, []);

  const handleCommentChange = (event) => {
    const newComment = event.target.value;
    setComment(newComment);
    setMessage(newComment);
  };

  const handleDeleteComment = async (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND}/api/comments/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(() => {
        IdeaComments();
        revalidator.revalidate();
      })
      .catch((e) => console.error(e));
  };

  // for showing just date without hours
  const date = idea[0].date_limit.split("T");
  // vote
  const handleClickVote = async (e) => {
    if (e.target.value === "contre") {
      setButtonPour(true);
      setButtonContre(true);
      try {
        const userId = user.id;
        const ideaId = idea[0].id;
        await axios.post(
          `${import.meta.env.VITE_BACKEND}/api/votes`,
          { user_id: userId, idea_id: ideaId, is_vote: 0 },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        revalidator.revalidate();
      } catch (err) {
        console.error(err);
      }
    } else if (e.target.value === "pour") {
      try {
        const userId = user.id;
        const ideaId = idea[0].id;
        await axios.post(
          `${import.meta.env.VITE_BACKEND}/api/votes`,
          { user_id: userId, idea_id: ideaId, is_vote: 1 },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        revalidator.revalidate();
      } catch (err) {
        console.error(err);
      }
      setButtonContre(true);
      setButtonPour(true);
    }
  };

  const percentage = (n) => {
    let forVote = 0;
    for (let i = 0; i < n.length; i += 1) {
      if (n[i].is_vote === 1) {
        forVote += 1;
      }
    }
    return (forVote / n.length) * 100;
  };

  useEffect(() => {
    if (votes.length === 0) {
      setProgress(0);
    } else {
      setProgress(percentage(votes));
    }
  }, [votes]);

  // modal for moderateur
  const handleClickDecisionModal = () => {
    setIsOpenDecisionModal((current) => !current);
  };

  const handleDecisionConfirmModal = () => {
    setIsOpenDecisionConfirmModal((current) => !current);
  };

  const handleClickDecisionValidate = async (decisionComment) => {
    setIsOpenDecisionModal((current) => !current);
    handleDecisionConfirmModal();
    const ideaFinalComment = decisionComment;

    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND}/api/ideas/moderator/${idea[0].id}`,
        { status_id: "6", idea_final_comment: ideaFinalComment },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickDecisionRefuse = async (decisionComment) => {
    setIsOpenDecisionModal((current) => !current);
    handleDecisionConfirmModal();
    const ideaFinalComment = decisionComment;

    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND}/api/ideas/moderator/${idea[0].id}`,
        { status_id: "7", idea_final_comment: ideaFinalComment },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const [showImpactedUsers, setShowImpactedUsers] = useState([]);

  const getImpactedUsers = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND}/api/impacted-users/ideas/${
          idea[0].id
        }`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setShowImpactedUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getImpactedUsers();
  }, []);

  return (
    <>
      {/* div for modal */}
      {isOpenDecisionModal && (
        <div>
          <DecisionModal
            handleClickDecisionValidate={handleClickDecisionValidate}
            handleClickDecisionRefuse={handleClickDecisionRefuse}
            handleClickDecisionModal={handleClickDecisionModal}
            ideaTitle={idea[0].title}
            ideaImage={idea[0].idea_image}
          />
        </div>
      )}
      {isOpenDecisionConfirmModal && (
        <div>
          <ValidateModale
            type="modale4"
            setTypeModal={() => console.info("")}
            handleDecisionConfirmModal={handleDecisionConfirmModal}
          />
        </div>
      )}

      {/* div for modal until here */}
      <div
        className={`home-container ${
          isOpenDecisionModal && "home-container-fixed"
        }`}
      />
      <div className="idea">
        <h2>{idea[0].title}</h2>
        <h3>
          Créé par{" "}
          {idea[0].firstname === (user && user.firstname)
            ? "vous"
            : idea[0].firstname}
        </h3>
        <div className="idea-main-container">
          <div className="idea-main-img-container">
            <img
              src={`${import.meta.env.VITE_BACKEND}${idea[0].idea_image}`}
              alt={idea[0].title}
            />
          </div>
          <div className="idea-main-info-container">
            <h4>Description</h4>
            <p>{idea[0].idea_description}</p>
            <div className="idea-info-vote">
              <progress id="avancement" value={progress} max="100" />
              <div className="idea-info-vote-bottom">
                <p>{votes.length} personnes ont voté</p>
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
              <div className="idea-impacted-paragraph">
                <p>Personnes impactées</p>
              </div>

              {showImpactedUsers.map((impacted) => {
                return (
                  <div
                    key={`${impacted.userId}-${idea[0].id}`}
                    className="impacteduser-image-container"
                  >
                    {impacted.image_profil ? (
                      <img
                        className="img-impacted-user"
                        title={`${impacted.firstname} ${impacted.lastname}`}
                        src={`${import.meta.env.VITE_BACKEND}${
                          impacted.image_profil
                        }`}
                        alt="profile"
                      />
                    ) : (
                      <img
                        className="img-impacted-user"
                        title={`${impacted.firstname} ${impacted.lastname}`}
                        src={
                          theme === "dark"
                            ? "/images/icons/avatar_icon_dark.png"
                            : "/images/icons/avatar_icon.png"
                        }
                        alt="default profile"
                      />
                    )}
                  </div>
                );
              })}
            </div>
            {idea[0].status_id === 4 || idea[0].status_id === 5 ? (
              <div className="idea-vote-container">
                <button
                  className={`button-moderateur ${
                    theme === "dark" ? "dark" : "light"
                  } ${user && user.is_moderator ? "" : "is-not-moderator"}`}
                  type="button"
                  onClick={handleClickDecisionModal}
                >
                  Modérateur
                </button>
                {user &&
                !votes.some(
                  (item) =>
                    item.user_id === objectToFind1.user_id &&
                    item.idea_id === objectToFind1.idea_id &&
                    item.is_vote === objectToFind1.is_vote
                ) &&
                !votes.some(
                  (item) =>
                    item.user_id === objectToFind2.user_id &&
                    item.idea_id === objectToFind2.idea_id &&
                    item.is_vote === objectToFind2.is_vote
                ) ? (
                  <>
                    <button
                      className={`button-vote vote-pour ${
                        theme === "dark" ? "dark" : "light"
                      }`}
                      type="button"
                      value="contre"
                      name="name"
                      onClick={handleClickVote}
                      disabled={buttonContre}
                    >
                      <img
                        src="/images/icons_pouces_bas.png"
                        alt="logo_pouce_bas"
                      />
                      Je suis contre
                    </button>
                    <button
                      className={`button-vote vote-contre ${
                        theme === "dark" ? "dark" : "light"
                      }`}
                      type="submit"
                      value="pour"
                      onClick={handleClickVote}
                      disabled={buttonPour}
                    >
                      <img
                        src="/images/icons_pouce_haut.png"
                        alt="logo_pouce_haut"
                      />
                      Je suis pour
                    </button>
                  </>
                ) : (
                  <p className="text-vot">
                    Vous avez déjà voté pour cette idée.
                  </p>
                )}
              </div>
            ) : (
              <div className="decision-result-container">
                {idea[0].status_id !== 6 && idea[0].status_id !== 7 ? (
                  ""
                ) : (
                  <div>
                    {idea[0].status_id === 6 ? (
                      <h3 className="decision-result">L'idée a été validée</h3>
                    ) : (
                      <h3 className="decision-result">L'idée a été refusée</h3>
                    )}
                    <div className="decision-comment-container">
                      <p className="decision-comment">
                        {" "}
                        Commentaire des modérateurs :{" "}
                      </p>
                      <div>
                        <p>
                          {idea[0].idea_final_comment &&
                            idea[0].idea_final_comment}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="idea-comments-container">
          <h3>Commentaires :</h3>
          <div className="idea-comment-container">
            <div className="container-post-message">
              {user && user.image_profil ? (
                <img
                  className="img-comment-user"
                  title="Profil"
                  src={`${import.meta.env.VITE_BACKEND}${user.image_profil}`}
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
              <p className="idea-bold">{`${user && user.firstname} ${
                user && user.lastname
              }`}</p>
              <form onSubmit={postComment}>
                <textarea
                  className={theme === "dark" ? "dark" : ""}
                  value={comment}
                  onChange={handleCommentChange}
                  maxLength="500"
                  placeholder="Votre commentaire..."
                />
                <div className="container-button-count">
                  <p className="character-count">
                    {500 - message.length} caractères restants
                  </p>
                  <button className="button-comment" type="submit">
                    Poster votre commentaire
                  </button>
                </div>
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
                    <p className="new-comment">{com.description}</p>

                    <p className="idea-bold">
                      {`${com.firstname} ${com.lastname}`}
                    </p>
                    {com.image_profil ? (
                      <img
                        className="img-comment-user"
                        title="Profil"
                        src={`${import.meta.env.VITE_BACKEND}${
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
                    <div className="logo-delete-comment">
                      {(user && user.is_moderator) ||
                      (user && user.is_administrator) ? (
                        <img
                          src="/images/icon_cross.png"
                          alt="del_logo"
                          onClick={() => handleDeleteComment(com.id)}
                          role="presentation"
                        />
                      ) : null}
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

export const loaders = async ({ params }) => {
  const loaderIdea = async () => {
    try {
      const ideas = await axios.get(
        `${import.meta.env.VITE_BACKEND}/api/ideas/${params.id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return ideas.data;
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  const loadVotes = async () => {
    try {
      const vote = await axios.get(
        `${import.meta.env.VITE_BACKEND}/api/votes/ideas/${params.id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return vote.data;
    } catch (e) {
      console.error(e);
      return [];
    }
  };
  const [idea, votes] = await Promise.all([loaderIdea(), loadVotes()]);
  return { idea, votes };
};

export default Idea;
