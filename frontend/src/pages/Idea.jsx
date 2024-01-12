import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import DecisionModal from "../components/DecisionModal";
import ValidateModale from "../components/ValidateModale";

function Idea() {
  const idea = useLoaderData();
  const { user } = useContext(UserContext);
  const [isOpenDecisionModal, setIsOpenDecisionModal] = useState(false);
  const [isOpenDecisionConfirmModal, setIsOpenDecisionConfirmModal] =
    useState(false);
  const [buttonContre, setButtonContre] = useState(false);
  const [buttonPour, setButtonPour] = useState(false);

  // for showing just date without hour
  const date = idea[0].date_limit.split("T");

  // vote
  const handleClickVote = async (e) => {
    if (e.target.value === "contre") {
      setButtonPour(true);
      try {
        const userId = user.id;
        const ideaId = idea[0].id;
        axios.post(
          `${import.meta.env.VITE_BACKEND}/api/votes`,
          { user_id: userId, idea_id: ideaId, is_vote: 0 },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      } catch (err) {
        console.error(err);
      }
    } else if (e.target.value === "pour") {
      try {
        const userId = user.id;
        const ideaId = idea[0].id;
        axios.post(
          `${import.meta.env.VITE_BACKEND}/api/votes`,
          { user_id: userId, idea_id: ideaId, is_vote: 1 },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      } catch (err) {
        console.error(err);
      }
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
            <div>
              <img src="/images/figure1.png" alt="figure1" />
            </div>
            <div>
              <p className="idea-bold">Victoria :</p>
              <p>
                Le Lorem Ipsum est simplement du faux texte employé dans la
                composition et la mise en page avant impression. Le Lorem Ipsum
                est le faux texte standard de l'imprimerie depuis les années
                1500, quand un
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
                est le faux texte standard de l'imprimerie depuis les années
                1500, quand un
              </p>
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
