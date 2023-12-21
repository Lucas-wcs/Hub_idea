import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./ThemeContext";

function ValidateModale({ type, setTypeModal }) {
  const modals = {
    modale1: {
      title: "Comfirmer la publication",
      text: "Cette action est irréversible. En cas de modification, merci de contacter l'adminsitrateur",
      logo: "/images/icons/validation.png",
      textButton: "Publier",
      textButton2: "Annuler",
    },
    modale2: {
      title: "",
      text: "Bravo ! Ton idée est en attente de validation par l'administrateur",
      logo: "/images/icons/confetti.png",
      textButton: "Accueil",
    },
    modale3: {
      title: "",
      text: "Merci d'avoir soumis l'idée au vote!",
      logo: "/images/icons/confetti.png",
      textButton: "Accueil",
    },
    modale4: {
      title: "",
      text: "",
      logo: "",
      textButton: "",
    },
  };

  const { theme } = useContext(ThemeContext);

  const modalToDisplay = modals[type];

  // function clavier poour touche entrée
  const onValidate = () => {
    setTypeModal("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onValidate();
    }
  };

  return (
    <div className="modal" onKeyDown={handleKeyDown} tabIndex={0} role="button">
      <div
        className={`modal-content ${theme === "dark" ? "dark" : "light"}`}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
      >
        <div className="modal-Header">
          <img src={modalToDisplay.logo} alt="Logo" />
          <h4 className="modal-title">{modalToDisplay.title}</h4>
        </div>
        <div className="modal-body">
          <p>{modalToDisplay.text}</p>
        </div>
        <div className="modal-footer">
          <button className="button1" type="button">
            {modalToDisplay.textButton}
          </button>
        </div>
        {modalToDisplay.textButton2 ? (
          <button
            className="button2"
            type="button"
            onClick={() => setTypeModal("")}
          >
            {modalToDisplay.textButton2}
          </button>
        ) : null}
      </div>
    </div>
  );
}

ValidateModale.propTypes = {
  type: PropTypes.string.isRequired,
  setTypeModal: PropTypes.func.isRequired,
};

// importation modale dans pages <ValidateModale type="modale1" setTypeModal={() => console.log("")} />

export default ValidateModale;
