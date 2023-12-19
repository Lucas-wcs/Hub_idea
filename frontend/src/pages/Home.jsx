import React from "react";
import IdeaCard from "../components/IdeaCard";

function Home() {
  return (
    <div className="home-container">
      <div className="title-button-container">
        <div>
          <h1>Bienvenue Hugo👋</h1>
          <h2>Nouvelles idées de WILD CODE SCHOOL</h2>
        </div>
        <div className="button-container">
          <button type="button" className="serch-button">
            <img src="images/icons/search_icon.png" alt="search-button" />
          </button>
          <button type="button" className="create-idea-button">
            <p>J'ai une idée!</p>
          </button>
        </div>
      </div>
      <div>
        <IdeaCard />
      </div>
    </div>
  );
}

export default Home;
