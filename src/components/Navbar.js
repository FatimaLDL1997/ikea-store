import Wrapper from "../assets/wrappers/Navbar";
import { FaHome } from "react-icons/fa";
import { FiMenu, FiTruck } from "react-icons/fi";
import { useState } from "react";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";
import { TOGGLE_SIDEBAR } from "../context/actions";
import { BsTelephone } from "react-icons/bs";
import {
  AiOutlineUser,
  AiOutlineCamera,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { TbBuildingStore } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineLocalOffer } from "react-icons/md";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let newLinks1 = links.slice(0, 6);

  const { toggleSidebar, logoutUser, user } = useAppContext();
  const [showLogout, setShowLogout] = useState(false);

  return (
    <Wrapper>
      <main className="main-container">
        <div className="top-massege">
          <li>
            <BsTelephone className="top-massege-icon" />
            Order by phone
          </li>
          <li>
            <MdOutlineLocalOffer className="top-massege-icon" />
            IKEA Summer SALE
          </li>
          <li>
            <MdOutlineLocalOffer className="top-massege-icon" />
            Join IKEA Family
          </li>
        </div>
        <div className="nav-center">
          <div className="menu-container">
            <div className="toggle-btn-container">
              <button className="toggle-btn" onClick={toggleSidebar}>
                <FiMenu />
              </button>
            </div>
            Menu
          </div>

          <div className="navbar-logo">
            <Logo className="logo" />
          </div>

          <div className="search-container">
            <span className="search-icon">
              <AiOutlineSearch />
            </span>
            <input
              type="text"
              name="search"
              className="form-input"
              placeholder="Find what you need to Bring Home to Life"
            ></input>
          </div>
          <span className="camera-icon">
            <AiOutlineCamera />
          </span>

          <button className="login-btn">
            <AiOutlineUser />
            <div className="text">
              {user ? `Hej ${user}!` : "Hej! Login or signcup"}
            </div>
          </button>
          <span className="fav-list">
            <AiOutlineHeart />
          </span>
          <span className="cart">
            <HiOutlineShoppingBag />
          </span>

          {/* <div className="btn-container">
          <button className="btn" onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button onClick={logoutUser} className="dropdown-btn">
              logout
            </button>
          </div>
        </div> */}
        </div>
        <div className="lower-nav-container">
          <div className="short-nav">
            {newLinks1.map((link) => {
              const { text, path, id } = link;

              return (
                <NavLink
                  to={path}
                  key={id}
                  onClick={toggleSidebar}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  {/* <span className='icon'>{icon}</span> */}
                  {text}
                </NavLink>
              );
            })}
          </div>
          <div className="loc-store">
            <div className="delivery">
              <FiTruck />
              <h1>M4X 1K3</h1>
            </div>
            <div className="mystore">
              <TbBuildingStore />
              <h1>Toronto Downtown - Aura</h1>
            </div>
          </div>
        </div>
        <div className="line">
        
        </div>
      </main>
    </Wrapper>
  );
};

export default Navbar;
