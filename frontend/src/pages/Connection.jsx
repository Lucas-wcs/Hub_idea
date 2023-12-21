import React, { useContext, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../components/ThemeContext";
import Navbar from "../components/Navbar";
import { UserContext } from "../components/UserContext";

function Connection() {
  const { setUser } = useContext(UserContext);

  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const emailRef = useRef();

  const passwordRef = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND}/api/login`,
        {
          email,
          password,
        }
      );

      if (res.status === 200) {
        setUser(res.data);
        navigate("/home");
      } else {
        setShowPopup(true);
      }
    } catch {
      console.error(e);
      setShowPopup(true);
    }
  };

  return (
    <>
      <Navbar />
      <div className="connection">
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <p>Votre mail ou mot de passe est invalide</p>
              <button
                type="button"
                className="popup-close-button"
                onClick={() => setShowPopup(false)}
              >
                Fermer
              </button>
            </div>
          </div>
        )}
        <form onSubmit={handleLogin} className="container-form">
          <div className="container-input">
            <h1 className="title-connection">Bienvenue</h1>
            <input
              className="input-button-style"
              type="text"
              placeholder="Adresse mail"
              ref={emailRef}
              required
            />
            <input
              className="input-button-style"
              type="password"
              placeholder="Mot de passe"
              ref={passwordRef}
              required
            />
            <button type="submit">
              <span className="button_top"> Se connecter</span>
            </button>
          </div>
        </form>
        <hr className="custom-hr" />
        <div className="presentation-hub">
          <div className="image-container">
            <img
              className="images-connection"
              src="/images/idea.png"
              alt="idea-thinking"
            />
            <p className="text-connection">Etape 1 : Créer une idée</p>
          </div>
          <img
            className="arrow"
            src={
              theme === "dark"
                ? "/images/icons/right-arrow_dark.png"
                : "/images/icons/right-arrow.png"
            }
            alt="arrow"
          />
          <div className="image-container">
            <img
              className="images-connection"
              src="/images/vote.png"
              alt="idea-voting"
            />
            <p className="text-connection">Etape 2 : Votez</p>
          </div>
          <img
            className="arrow"
            src={
              theme === "dark"
                ? "/images/icons/right-arrow_dark.png"
                : "/images/icons/right-arrow.png"
            }
            alt="arrow"
          />
          <div className="image-container">
            <img
              className="images-connection"
              src="/images/hand.png"
              alt="idea-vote"
            />
            <p className="text-connection">Etape 3 : Décision finale</p>
          </div>
        </div>
        <div className="container-button-rules">
          <Link to="/rules">
            <button type="button">
              <span className="button_top"> Voir le réglement</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Connection;
