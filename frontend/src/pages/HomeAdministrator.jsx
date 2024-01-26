/* eslint-disable consistent-return */
import { useState } from "react";
import axios from "axios";
import { useLoaderData, useRevalidator, Link, Outlet } from "react-router-dom";
import AddMemberModal from "../components/AddMemberModal";
import AddModeratorModal from "../components/AddModeratorModal";

function HomeAdministrator() {
  const { ideas, users } = useLoaderData();
  const revalidator = useRevalidator();

  const [isOpenMemberModal, setIsOpenMemberModal] = useState(false);
  const [isOpenModeratorModal, setIsOpenModeratorModal] = useState(false);

  const handleOpenModalAddMember = () => {
    setIsOpenMemberModal((current) => !current);
  };

  const handleOpenModalAddModerator = () => {
    setIsOpenModeratorModal((current) => !current);
  };

  const handleDeleteModerator = (id) => {
    axios
      .put(
        `${import.meta.env.VITE_BACKEND}/api/users/remove-moderator/${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(() => {
        revalidator.revalidate();
      })
      .catch((e) => console.error(e));
  };

  const handleDeleteMember = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND}/api/users/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(() => {
        revalidator.revalidate();
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="homeAdministrator">
      <Outlet />
      <div className="homeAdmin-container">
        <div className="homeAdmin-title">
          <div className="homeAdmin-logo-container">
            <img src="/images/icons_idea.png" alt="idea_logo" />
          </div>
          <h4>Idées proposées par les membres</h4>
        </div>
        <div className="content-container">
          {ideas
            .filter((idea) => idea.status_id === 2)
            .map((idea) => {
              return (
                <Link
                  to={`/administrator/idea/${idea.id}`}
                  className="bloc-ideas"
                  key={idea.id}
                >
                  <p>{idea.title}</p>
                </Link>
              );
            })}
        </div>
      </div>

      <div className="homeAdmin-container">
        <div className="homeAdmin-title">
          <div className="homeAdmin-logo-container">
            <img src="/images/icons_admin.png" alt="admin_logo" />
          </div>
          <h4>Membres modérateurs</h4>
          <div
            className="homeAdmin-logo-container"
            onClick={handleOpenModalAddModerator}
            role="presentation"
          >
            <img src="/images/icons_add.png" alt="add_logo" />
          </div>
        </div>
        <div className="content-container">
          {users
            // eslint-disable-next-line array-callback-return
            .filter((moderator) => {
              if (moderator.is_moderator === 1) {
                return true;
              }
            })
            .map((moderator) => {
              return (
                <div key={moderator.id} className="bloc-moderators">
                  <p>
                    {moderator.firstname} {moderator.lastname}
                  </p>
                  <div className="logo-delete-container">
                    <img
                      src="/images/icon_del.png"
                      alt="cross_logo"
                      onClick={() => handleDeleteModerator(moderator.id)}
                      role="presentation"
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="homeAdmin-container">
        <div className="homeAdmin-title">
          <div className="homeAdmin-logo-container">
            <img src="/images/icons_members.png" alt="members_logo" />
          </div>
          <h4>Membres du groupe</h4>
          <div
            className="homeAdmin-logo-container"
            onClick={handleOpenModalAddMember}
            role="presentation"
          >
            <img src="/images/icons_add.png" alt="add_logo" />
          </div>
        </div>
        <div className="content-container">
          {users.map((user) => {
            return (
              <div key={user.id} className="bloc-users">
                <p>
                  {user.firstname} {user.lastname}
                </p>
                <div className="logo-delete-container">
                  <img
                    src="/images/icon_del.png"
                    alt="del_logo"
                    onClick={() => handleDeleteMember(user.id)}
                    role="presentation"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {isOpenModeratorModal && (
        <div className="addModerator-modal">
          <AddModeratorModal
            handleOpenModalAddModerator={handleOpenModalAddModerator}
            users={users}
          />
        </div>
      )}
      {isOpenMemberModal && (
        <div className="addMember-modal">
          <AddMemberModal
            handleOpenModalAddMember={handleOpenModalAddMember}
            setIsOpenMemberModal={setIsOpenMemberModal}
          />
        </div>
      )}
    </div>
  );
}

// eslint-disable-next-line consistent-return
export const loader = async () => {
  const loadIdeas = async () => {
    try {
      const res = await axios.get("http://localhost:3310/api/ideas", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return res.data;
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  const loadUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3310/api/users", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return res.data;
    } catch (e) {
      console.error(e);
      return [];
    }
  };
  const [ideas, users] = await Promise.all([loadIdeas(), loadUsers()]);

  return { ideas, users };
};

export default HomeAdministrator;
