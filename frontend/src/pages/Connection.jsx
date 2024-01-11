import React, { useContext, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/UserContext";

function Connection() {
  // Using the UserContext to get the setUser function
  const { setUser } = useContext(UserContext);

  // Using the ThemeContext to get the current theme
  const { theme } = useContext(ThemeContext);

  // Using the useNavigate hook to get a function to navigate to different routes
  const navigate = useNavigate();

  // Using useRef to create references for the email and password inputs
  const emailRef = useRef();
  const passwordRef = useRef();

  // Using useState to manage the state of the popup, password visibility and eye icon
  const [showPopup, setShowPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isEyeOpen, setIsEyeOpen] = useState(false);

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Getting the values of the email and password inputs
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      // Sending a POST request to the login API with the email and password
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND}/api/login`,
        {
          email,
          password,
        }
      );
      // If the response status is 200, set the user data and navigate to the home page

      if (res.status === 200) {
        const { user } = res.data;
        const { token } = res.data;

        setUser(user);
        localStorage.setItem("token", token);

        setUser(res.data);
        navigate("/home");
      } else {
        // If the response status is not 200, handle the error (not shown in this code snippet)
        setShowPopup(true);
      }
    } catch {
      // If the request fails, handle the error (not shown in this code snippet)
      console.error(e);
      setShowPopup(true);
    }
  };
  // The handleShowPassword function is used to toggle the visibility of the password in the input field

  const handleShowPassword = () => {
    // The setShowPassword function is called with the current state of showPassword inverted
    // If showPassword is currently true, it will become false, and vice versa
    // This effectively toggles the visibility state of the password each time the function is called
    setShowPassword(!showPassword);
    // The setIsEyeOpen function is called with the current state of isEyeOpen inverted
    // If isEyeOpen is currently true, it will become false, and vice versa
    // This effectively toggles the state of the eye icon each time the function is called
    setIsEyeOpen((current) => !current);
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
            <div className="input-button-container">
              <input
                className="input-button-style-password"
                // The type attribute determines the type of the input field
                // If showPassword is true, the type is "text", which means the password is visible
                // If showPassword is false, the type is "password", which means the password is hidden
                type={showPassword ? "text" : "password"}
                // The placeholder attribute provides a hint that describes the expected value of the input field

                placeholder="Mot de passe"
                ref={passwordRef}
                required
              />
              <button
                className="toggle-button-connection"
                type="button"
                onClick={() => handleShowPassword()}
              >
                {isEyeOpen ? (
                  <img
                    className="img-password-connection-open"
                    src="/images/oeil-ouvert.png"
                    alt="oeil ouvert"
                  />
                ) : (
                  <img
                    className="img-password-connection"
                    src="/images/oeil-fermé.png"
                    alt="oeil fermé"
                  />
                )}
              </button>
            </div>

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
