import { useState } from "react";
import IdeaCard from "../components/IdeaCard";
// import ValidateModale from "../components/ValidateModale";
import CreateIdeaModal from "../components/CreateIdeaModal";
// <ValidateModale type="modale1" setTypeModal={() => console.log("")} />

function Home() {
  const [isOpenIdeaModal, setIsOpenIdeaModal] = useState(false);

  const handleOpenModalIdea = () => {
    setIsOpenIdeaModal((current) => !current);
  };

  return (
    <div
      className={`home-container ${isOpenIdeaModal && "home-container-fixed"}`}
    >
      <div className={`${isOpenIdeaModal ? "" : "hide-idea-modal"}`}>
        <CreateIdeaModal handleOpenModalIdea={handleOpenModalIdea} />
      </div>
      <div className="title-button-container">
        <div>
          <h1>Bienvenue Hugo 👋</h1>
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
