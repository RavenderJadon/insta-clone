import { useContext } from "react";
import { ContextProvider } from "../Global/Context";
import {
  FaSistrix,
  FaHome,
  FaTelegramPlane,
  FaRegCompass,
  FaRegHeart,
} from "react-icons/fa";

const Navbar = () => {
  const { model, openModal } = useContext(ContextProvider);
  console.log("my model", model);
  const openForm = () => {
    openModal();
  };

  return (
    <div className="navbar">
      <div className="navbar__first">
        <div className="navbar__first-logo">
          <img src="/images/instagramLogo.png" alt="insta logo" />
        </div>
      </div>
      <div className="navbar__middle">
        <div className="navbar__middle-search">
          <input type="text" className="navbar__search" placeholder="Search" />
          <FaSistrix className="searchIcon" />
        </div>
      </div>
      <div className="navbar__last">
        <li>
          <FaHome className="navbar__icons" />
        </li>
        <li>
          <FaTelegramPlane className="navbar__icons" />
        </li>
        <li>
          <FaRegCompass className="navbar__icons" />
        </li>
        <li>
          <FaRegHeart className="navbar__icons" />
        </li>
        <li onClick={openForm}>Register/Login</li>
      </div>
    </div>
  );
};

export default Navbar;
