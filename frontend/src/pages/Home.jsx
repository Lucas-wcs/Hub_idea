import { useState, useContext, useEffect } from "react";
import { useNavigate, useLoaderData, useRevalidator } from "react-router-dom";
import axios from "axios";
import IdeaCard from "../components/IdeaCard";
import CreateIdeaModal from "../components/CreateIdeaModal";
import ValidateModale from "../components/ValidateModale";
import { UserContext } from "../context/UserContext";

function Home() {
  const revalidator = useRevalidator();
  const { statuses } = useLoaderData();
  const navigate = useNavigate();
  const [isOpenIdeaModal, setIsOpenIdeaModal] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [isOpenSubmitModal, setIsOpenSubmitModal] = useState(false);
  const [isOpenDecisionModal, setIsOpenDecisionModal] = useState(false);
  const [newIdeaId, setNewIdeaId] = useState("");
  const { user } = useContext(UserContext);

  // modal create idea : brouillon ou publier une idée
  const handleSubmitIdea = async (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.value === "Brouillon") {
      navigate("/home");
    } else {
      setIsOpenConfirmModal((current) => !current);
    }
    setIsOpenIdeaModal(false);
    const title = e.target.title.value;
    const limitDate = e.target.date.value;
    const ideaImage = "https://picsum.photos/300/600";
    const statusId = 1;
    // const ideaimage = e.target.ideaimage.value;
    const description = e.target.description.value;

    try {
      await axios
        .post(`${import.meta.env.VITE_BACKEND}/api/ideas`, {
          title,
          date_limit: limitDate,
          idea_image: ideaImage,
          idea_description: description,
          status_id: statusId,
          user_id: user.id,
        })
        .then((response) => {
          setNewIdeaId(response.data.insertId.insertId);
        })
        .then(() => {
          revalidator.revalidate();
        })
        .catch((error) => console.error(error));
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

  const ideaToUpdate = {
    status_id: "2",
  };

  // modal submitting idea : soumettre
  const handleClickSubmitButton = async () => {
    setIsOpenConfirmModal(false);
    setIsOpenSubmitModal((current) => !current);

    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND}/api/ideas/change-status/${newIdeaId}`,
        ideaToUpdate
      );
    } catch (e) {
      console.error(e);
    }
  };

  const handleClickIdeaCancelButton = () => {
    setIsOpenConfirmModal(false);
    setIsOpenIdeaModal(true);
  };

  // filter to status ideas
  // Declare a state variable 'statusFilter' and a function to update it 'setStatusFilter'
  // Initialize 'statusFilter' with an empty string
  const [statusFilter, setStatusFilter] = useState("");
  // Define a function to handle changes in the status filter
  const handleStatusFilterChange = (event) => {
    // Destructure 'value' from the event target
    const { value } = event.target;
    // Split the 'value' string by comma and convert each part to a number
    // This results in an array of status IDs
    const statusIds = value.split(",").map(Number);
    // Update 'statusFilter' with the array of status IDs
    setStatusFilter(statusIds);
  };
  // Declare a state variable 'ideas' and a function to update it 'setIdeas'
  // Initialize 'ideas' with an empty array
  const [ideas, setIdeas] = useState([]);
  // Define an asynchronous function to fetch ideas

  const getIdeas = async () => {
    try {
      // Send a GET request to the ideas API
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND}/api/ideas`
      );
      let filteredIdeas = response.data;
      // If 'statusFilter' is not empty, filter the ideas by status ID
      if (statusFilter) {
        filteredIdeas = response.data.filter(
          // For each idea, check if its status ID is in the 'statusFilter' array
          (idea) => statusFilter.includes(idea.status_id)
        );
      }
      // Update 'ideas' with the filtered ideas
      setIdeas(filteredIdeas);
    } catch (e) {
      // If an error occurs, log it to the console
      console.error(e);
    }
  };
  // Use the 'useEffect' hook to call 'getIdeas' whenever 'statusFilter' changes
  useEffect(() => {
    getIdeas();
  }, [statusFilter]);

  return (
    <div
      className={`home-container ${
        isOpenIdeaModal || (isOpenDecisionModal && "home-container-fixed")
      }`}
    >
      {/* div for modal */}
      <div className={`${isOpenIdeaModal ? "" : "hide-idea-modal"}`}>
        <CreateIdeaModal
          handleOpenModalIdea={handleOpenModalIdea}
          handleSubmitIdea={handleSubmitIdea} // when you click submit
          // newIdeaId={newIdeaId}
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
          <select
            className="filter-input"
            value={statusFilter}
            onChange={handleStatusFilterChange}
          >
            <option value="1,2,3,4,5,6,7">Toutes les idées</option>
            <option value="1">Brouillon</option>
            <option value="2,5">En attente</option>
            <option value="3,7">Refusées</option>
            <option value="4">En cours</option>
            <option value="6">Validées</option>
          </select>

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
          return (
            <IdeaCard
              title={idea.title}
              statusId={statuses[idea.status_id - 1].status_name}
              key={idea.id} // Utiliser l'ID de l'idée comme clé plutôt que le titre
              isOpenDecisionModal={isOpenDecisionModal}
              setIsOpenDecisionModal={setIsOpenDecisionModal}
            />
          );
        })}
      </div>
    </div>
  );
}

export const loaderHome = async () => {
  const loadStatus = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND}/api/status-idea`
      );
      return res.data;
    } catch (e) {
      console.error(e);
      return [];
    }
  };
  const loadIdeas = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND}/api/ideas`);
      return res.data;
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  const [ideas, statuses] = await Promise.all([loadIdeas(), loadStatus()]);
  return { ideas, statuses };
};

export default Home;
