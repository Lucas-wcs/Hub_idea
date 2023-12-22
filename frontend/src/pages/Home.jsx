import { useState, useContext } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import axios from "axios";
import IdeaCard from "../components/IdeaCard";
import CreateIdeaModal from "../components/CreateIdeaModal";
import ValidateModale from "../components/ValidateModale";
import { UserContext } from "../context/UserContext";

function Home() {
  const ideas = useLoaderData();
  const navigate = useNavigate();
  const [isOpenIdeaModal, setIsOpenIdeaModal] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [isOpenSubmitModal, setIsOpenSubmitModal] = useState(false);
  const { user } = useContext(UserContext);

  // creating(post) new idea
  const handleSubmitIdea = async (e) => {
    e.preventDefault();
    setIsOpenIdeaModal(false);
    setIsOpenConfirmModal((current) => !current);
    const title = e.target.title.value;
    const limitDate = e.target.date.value;
    const ideaImage = "https://picsum.photos/300/600";
    // const ideaimage = e.target.ideaimage.value;
    const description = e.target.description.value;

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND}/api/ideas`, {
        title,
        date_limit: limitDate,
        idea_image: ideaImage,
        idea_description: description,
      });
      e.target.title.value = "";
      e.target.date.value = "";
      e.target.description.value = "";
    } catch (error) {
      console.error(error);
    }
  };

  // modal for creating idea
  const handleOpenModalIdea = () => {
    setIsOpenIdeaModal((current) => !current);
  };

  const handleClickDraft = (event) => {
    event.preventDefault();
    navigate("/home");
    handleOpenModalIdea();
  };

  const handleClickSubmitButton = () => {
    setIsOpenConfirmModal(false);
    setIsOpenSubmitModal((current) => !current);
  };

  const handleClickIdeaCancelButton = () => {
    setIsOpenConfirmModal(false);
    setIsOpenIdeaModal(true);
  };

  return (
    <div
      className={`home-container ${isOpenIdeaModal && "home-container-fixed"}`}
    >
      {/* div for modal */}
      <div className={`${isOpenIdeaModal ? "" : "hide-idea-modal"}`}>
        <CreateIdeaModal
          handleOpenModalIdea={handleOpenModalIdea}
          handleClickDraft={handleClickDraft}
          handleSubmitIdea={handleSubmitIdea}
        />
      </div>
      <div className={`${isOpenConfirmModal ? "" : "hide-confirm-modal"}`}>
        <ValidateModale
          type="modale1"
          setTypeModal={() => console.info("")}
          handleClickSubmitButton={handleClickSubmitButton}
          handleClickIdeaCancelButton={handleClickIdeaCancelButton}
        />
      </div>
      <div className={`${isOpenSubmitModal ? "" : "hide-submit-modal"}`}>
        <ValidateModale
          type="modale2"
          setTypeModal={() => console.info("")}
          handleClickSubmitButton={handleClickSubmitButton}
          handleClickIdeaCancelButton={handleClickIdeaCancelButton}
        />
      </div>
      {/* div for modal until here */}
      <div className="title-button-container">
        <div>
          <h1>Bienvenue {user.firstname} 👋</h1>
          <h2>Nouvelles idées de WILD CODE SCHOOL</h2>
        </div>
        <div className="button-container">
          <button type="button" className="serch-button">
            <img
              title="rechercher"
              src="images/icons/search_icon.png"
              alt="search-button"
            />
          </button>
          <button
            type="button"
            className="create-idea-button"
            onClick={handleOpenModalIdea}
          >
            <p>J'ai une idée!</p>
          </button>
        </div>
      </div>
      <div className="idea-cards-container">
        {ideas.map((idea) => {
          return <IdeaCard title={idea.title} statusId={idea.status_id} />;
        })}
      </div>
    </div>
  );
}

export const loaderIdeas = async () => {
  try {
    const res = await axios.get("http://localhost:3310/api/ideas");
    return res.data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default Home;
