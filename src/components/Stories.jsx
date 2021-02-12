import { useState } from "react";

const Stories = () => {
  const [state, setState] = useState([
    { id: 1, image: "/images/user1.webp", name: "user1" },
    { id: 2, image: "/images/user2.jpg", name: "user2" },
    { id: 3, image: "/images/user3.jpg", name: "user3" },
    { id: 4, image: "/images/user4.jpg", name: "user4" },
    { id: 5, image: "/images/user5.jpg", name: "user5" },
    { id: 6, image: "/images/user6.jpg", name: "user6" },
    { id: 7, image: "/images/user7.jpg", name: "user7" },
    { id: 8, image: "/images/user8.jpg", name: "user8" },
    { id: 9, image: "/images/user9.jpg", name: "user9" },
  ]);
  return (
    <div className="stories">
      {state.map((user) => (
        <div className="stories__info" key={user.id}>
          <div className="stories__img">
            <span>
              <img src={user.image} alt="user" />
            </span>
          </div>
          <div className="stories__name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
