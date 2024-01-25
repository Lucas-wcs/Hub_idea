import { useState, useContext } from "react";
import { useNavigate, useLoaderData, useRevalidator } from "react-router-dom";
import axios from "axios";
import IdeaCard from "../components/IdeaCard";
import CreateIdeaModal from "../components/CreateIdeaModal";
import UpdateIdeaModal from "../components/UpdateIdeaModal";
import ValidateModale from "../components/ValidateModale";
import { UserContext } from "../context/UserContext";

function Home() {
  const revalidator = useRevalidator();
  const { ideas, statuses } = useLoaderData();
  const navigate = useNavigate();
  const [isOpenIdeaModal, setIsOpenIdeaModal] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [isOpenSubmitModal, setIsOpenSubmitModal] = useState(false);
  // useState for update
  const [isOpenUpdateIdeaModal, setIsOpenUpdateIdeaModal] = useState(false);
  const [isOpenUpdateConfirmModal, setIsOpenUpdateConfirmModal] =
    useState(false);
  const [image, setImage] = useState();
  // const [newIdeaId, setNewIdeaId] = useState("");
  const [usersAssociated, setUsersAssociated] = useState([]);
  const { user } = useContext(UserContext);
  const [statusFilter, setStatusFilter] = useState("1,2,3,4,5,6,7");
  const [draftIdea, setDraftIdea] = useState({
    ideaId: "",
    title: "",
    dateLimit: "",
    image: "",
    description: "",
  });
  const [inputIdea, setInputIdea] = useState({
    ideaTitle: "",
    ideaDateLimit: "",
    ideaDescription: "",
  });

  // 1st modal create idea : brouillon ou publier une idée
  const handleSubmitIdea = async (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.value === "Brouillon") {
      navigate("/home");

      // const ideaImage = "https://picsum.photos/300/600";
      const statusId = 1;

      const data = new FormData();

      data.append("title", inputIdea.ideaTitle);
      data.append("date_limit", inputIdea.ideaDateLimit);
      data.append("idea_description", inputIdea.ideaDescription);
      data.append("status_id", statusId);
      data.append("user_id", user.id);
      data.append("ideaImage", image);

      axios
        .post(`${import.meta.env.VITE_BACKEND}/api/ideas`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          // TODO change. logic in backend Menager

          axios
            .post(
              `${import.meta.env.VITE_BACKEND}/api/impacted-users`,
              {
                idea_id: response.data.insertId.insertId,
                usersAssociated,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            )
            .then(() => {
              // TODO pop up confirmation post
            })
            .catch((error) => console.error(error));
        })
        .then(() => {
          revalidator.revalidate();
        })
        .catch((error) => console.error(error));
      e.target.title.value = "";
      e.target.date.value = "";
      e.target.description.value = "";
    } else {
      setIsOpenConfirmModal((current) => !current);
      setInputIdea({
        ideaTitle: e.target.title.value,
        ideaDateLimit: e.target.date.value,
        ideaDescription: e.target.description.value,
      });
    }
    setIsOpenIdeaModal(false);
  };

  // handling 1st modal for creating idea
  const handleOpenModalIdea = () => {
    setIsOpenIdeaModal((current) => !current);
  };

  // 2nd modal of validateModale
  const handleClickSubmitButton = async (button) => {
    setIsOpenConfirmModal(false);
    setIsOpenSubmitModal((current) => !current);

    if (button === 1) {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND}/api/ideas`,
          {
            title: inputIdea.ideaTitle,
            date_limit: inputIdea.ideaDateLimit,
            idea_image: "idea-image",
            idea_description: inputIdea.ideaDescription,
            status_id: 2,
            user_id: user.id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(() => {
          // TODO update users associeted
        })
        .catch((error) => console.error(error));
    }
  };
  // handling button to close
  const handleClickIdeaCancelButton = () => {
    setIsOpenConfirmModal(false);
    setIsOpenIdeaModal(true);
  };

  // reopen 1st create idea modal for draft
  const handleOpenModalIdeaDraft = (
    title,
    dateLimit,
    // image,
    description,
    ideaId
  ) => {
    setIsOpenUpdateIdeaModal((current) => !current);
    setDraftIdea({
      title,
      dateLimit,
      // image,
      description,
      ideaId,
    });
  };

  // handle submit 1st draft modal
  const handleUpdateIdea = async (e) => {
    e.preventDefault();
    setIsOpenUpdateIdeaModal(false);
    let statusId;
    if (e.nativeEvent.submitter.value === "Brouillon") {
      // navigate("/home");
      statusId = 1;
    } else {
      setIsOpenUpdateConfirmModal(true);
      statusId = 2;
    }

    const title = e.target.title.value;
    const limitDate = e.target.date.value;
    const ideaImage = "https://picsum.photos/300/600";
    const description = e.target.description.value;

    try {
      await axios
        .put(
          `${import.meta.env.VITE_BACKEND}/api/ideas/${draftIdea.ideaId}`,
          {
            title,
            date_limit: limitDate,
            idea_image: ideaImage,
            idea_description: description,
            status_id: statusId,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(() => {
          axios
            .put(
              `${import.meta.env.VITE_BACKEND}/api/impacted-users`,
              {
                idea_id: draftIdea.ideaId,
                usersAssociated,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            )
            .then(() => {
              // TODO pop up confirmation post
              revalidator.revalidate();
            })
            .catch((error) => {
              revalidator.revalidate();
              console.error(error);
            });
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  };

  // modal submitting updating idea : soumettre
  const handleClickUpdateSubmitButton = async () => {
    setIsOpenUpdateConfirmModal(false);
  };

  const handleStatusFilterChange = (event) => {
    const { value } = event.target;
    const statusIds = value.split(",").map(Number);
    setStatusFilter(statusIds);
  };

  return (
    <div
      className={`home-container ${isOpenIdeaModal && "home-container-fixed"}`}
    >
      {/* div for modal */}
      {isOpenIdeaModal && (
        <div>
          <CreateIdeaModal
            handleOpenModalIdea={handleOpenModalIdea}
            handleSubmitIdea={handleSubmitIdea} // when you click submit
            usersAssociated={usersAssociated}
            setUsersAssociated={setUsersAssociated}
            image={image}
            setImage={setImage}
            inputIdea={inputIdea}
            setInputIdea={setInputIdea}
          />
        </div>
      )}
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
      {isOpenUpdateIdeaModal && (
        <div>
          <UpdateIdeaModal
            handleOpenModalIdeaDraft={handleOpenModalIdeaDraft}
            handleUpdateIdea={handleUpdateIdea}
            usersAssociated={usersAssociated}
            setUsersAssociated={setUsersAssociated}
            draftIdea={draftIdea}
          />
        </div>
      )}

      <div
        className={`${
          isOpenUpdateConfirmModal ? "" : "hide-update-confirm-modal"
        }`}
      >
        <ValidateModale
          type="modale8"
          setTypeModal={() => console.info("")}
          handleClickUpdateSubmitButton={handleClickUpdateSubmitButton}
        />
      </div>
      {/* div for modal until here */}
      <div className="title-button-container">
        <div>
          <h1>Bienvenue {user && user.firstname} 👋</h1>
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
        {ideas
          .filter((idea) => statusFilter.includes(idea.status_id))
          .map((idea) => {
            if (
              (idea.status_id === 1 || idea.status_id === 2) &&
              idea.user_id !== (user && user.id)
            ) {
              return null;
            }
            return (
              <IdeaCard
                title={idea.title}
                dateLimit={idea.date_limit}
                description={idea.idea_description}
                ideaId={idea.id}
                statusId={idea.status_id}
                statusName={statuses[idea.status_id - 1].status_name}
                createdUserFirstname={idea.firstname}
                image={`${import.meta.env.VITE_BACKEND}${idea.idea_image}`}
                key={idea.title} // Utiliser l'ID de l'idée comme clé plutôt que le titre
                handleOpenModalIdeaDraft={handleOpenModalIdeaDraft}
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
        `${import.meta.env.VITE_BACKEND}/api/status-idea`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      return res.data;
    } catch (e) {
      console.error(e);
      return [];
    }
  };
  const loadIdeas = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND}/api/ideas`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

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
