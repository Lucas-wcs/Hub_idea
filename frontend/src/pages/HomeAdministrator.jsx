import { useState } from "react";
import AddMemberModal from "../components/AddMemberModal";
import AddModeratorModal from "../components/AddModeratorModal";

function HomeAdministrator() {
  const [isOpenMemberModal, setIsOpenMemberModal] = useState(false);
  const [isOpenModeratorModal, setIsOpenModeratorModal] = useState(false);

  const handleOpenModalAddMember = () => {
    setIsOpenMemberModal((current) => !current);
  };

  const handleOpenModalAddModerator = () => {
    setIsOpenModeratorModal((current) => !current);
  };

  return (
    <div
      className="homeAdministrator"
      onClick={(e) => e.stopPropagation()}
      role="presentation"
    >
      <div
        className={`homeAdmin-container ${
          isOpenMemberModal && "container-flou-admin"
        } ${isOpenModeratorModal && "container-flou-admin"}`}
      >
        <div className="homeAdmin-title">
          <div className="homeAdmin-logo-container">
            <img src="/images/icons_idea.png" alt="idea_logo" />
          </div>
          <h4>Idées proposées par les membres</h4>
        </div>
        <div className="homeAdmin-content-container">
          <p>Repas de Noel en fin d'année</p>
          <p>Racheter un nouveau canapé pour la salle de pause</p>
          <p>Changer la table basse de l'accueil</p>
          <p>Mettre des fleurs pour l'entrée</p>
          <p>Soirée de Départ de Sofia</p>
          <p>Organiser une journée de porte ouverte des métiers de chacun</p>
        </div>
      </div>

      <div
        className={`homeAdmin-container ${
          isOpenMemberModal && "container-flou-admin"
        } ${isOpenModeratorModal && "container-flou-admin"}`}
      >
        <div className="homeAdmin-title">
          <div className="homeAdmin-logo-container">
            <img src="/images/icons_admin.png" alt="admin_logo" />
          </div>
          <h4>Membres modérateurs</h4>
          <div
            className="homeAdmin-logo-container button-add"
            onClick={handleOpenModalAddModerator}
            role="presentation"
          >
            <img src="/images/icons_add.png" alt="add_logo" />
          </div>
        </div>
        <div className="homeAdmin-content-container">
          <p>Pierre Dupont</p>
          <p>Marie Durand</p>
          <p>Catherine Hugo</p>
          <p>Samantha Marquez</p>
          <p>Paul De La Seine</p>
          <p>Pierre Courège</p>
        </div>
      </div>

      <div
        className={`homeAdmin-container ${
          isOpenMemberModal && "container-flou-admin"
        } ${isOpenModeratorModal && "container-flou-admin"}`}
      >
        <div className="homeAdmin-title">
          <div className="homeAdmin-logo-container">
            <img src="/images/icons_members.png" alt="members_logo" />
          </div>
          <h4>Membres du groupe</h4>
          <div
            className="homeAdmin-logo-container button-add"
            onClick={handleOpenModalAddMember}
            role="presentation"
          >
            <img src="/images/icons_add.png" alt="add_logo" />
          </div>
        </div>
        <div className="homeAdmin-content-container">
          <p>Pierre Dupont</p>
          <p>Marie Durand</p>
          <p>Catherine Hugo</p>
          <p>Samantha Marquez</p>
          <p>Paul De La Seine</p>
          <p>Pierre Courège</p>
          <p>Pierre Dupont</p>
          <p>Marie Durand</p>
          <p>Catherine Hugo</p>
          <p>Samantha Marquez</p>
          <p>Paul De La Seine</p>
          <p>Pierre Courège</p>
        </div>
      </div>
      {isOpenModeratorModal && (
        <div className="addModerator-modal">
          <AddModeratorModal
            handleOpenModalAddModerator={handleOpenModalAddModerator}
          />
        </div>
      )}
      {isOpenMemberModal && (
        <div className="addMember-modal">
          <AddMemberModal handleOpenModalAddMember={handleOpenModalAddMember} />
        </div>
      )}
    </div>
  );
}

export default HomeAdministrator;
