import { useContext, useState } from "react";
import { ContextProvider } from "../Global/Context";

const Sidebar = () => {
  const { loader, usr } = useContext(ContextProvider);
  const username = !loader && usr && usr.displayName ? usr.displayName : "";
  const [state, setState] = useState([
    { id: 1, image: "/images/user1.jpg", name: "test 1" },
    { id: 2, image: "/images/user2.jpg", name: "test 2" },
    { id: 1, image: "/images/user3.jpg", name: "test 3" },
  ]);

  return (
    <div className="sidebar">
      {!loader && usr ? (
        <div className="sidebar__user">
          <div className="sidebar__user-avator">{username[0]}</div>
          <div className="sidebar__user-name">{username}</div>
        </div>
      ) : (
        ""
      )}
      <div className="sidebar__list">
        <h3>Suggestions for you</h3>
        {state.map((user) => (
          <div className="sidebar__list-user" key={user.id}>
            <div className="sidebar__list-a">
              <div className="sidebar__list-a-img">
                <img src={user.image} alt={user.image} />
              </div>
              <div className="sidebar__list-a-name">{user.name}</div>
            </div>
            <div className="sidebar__list-b">
              <a href="">Follow</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
