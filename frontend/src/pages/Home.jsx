import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import IdeaCard from "../components/IdeaCard";
import CreateIdeaModal from "../components/CreateIdeaModal";
import ValidateModale from "../components/ValidateModale";
import { UserContext } from "../components/UserContext";

function Home() {
  const navigate = useNavigate();
  const [isOpenIdeaModal, setIsOpenIdeaModal] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [isOpenSubmitModal, setIsOpenSubmitModal] = useState(false);
  const { user } = useContext(UserContext);
  const handleOpenModalIdea = () => {
    setIsOpenIdeaModal((current) => !current);
  };

  const handleClickDraft = (event) => {
    event.preventDefault();
    navigate("/home");
    handleOpenModalIdea();
  };

  const handleClickPublish = (event) => {
    event.preventDefault();
    setIsOpenIdeaModal(false);
    setIsOpenConfirmModal((current) => !current);
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
          handleClickPublish={handleClickPublish}
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
          <h1>Bienvenue {user[0].firstname} 👋</h1>
          <h2>Nouvelles idées de WILD CODE SCHOOL</h2>
        </div>
        <div className="button-container">
          <button type="button" className="serch-button">
            <img src="images/icons/search_icon.png" alt="search-button" />
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
        <IdeaCard />
        <IdeaCard />
        <IdeaCard />
        <IdeaCard />
        <IdeaCard />
      </div>
    </div>
  );
}

export default Home;
