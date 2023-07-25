import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/BigSidebar";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";

const BigSidebar = () => {
  const { showSidebar, toggleSidebar, user } = useAppContext();
  console.log(showSidebar);
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container "
        }
      >
        <div className="content">
          <header>
            <div className="close-container">
              <GrFormClose onClick={toggleSidebar} />
            </div>
            <Logo />
          </header>

          <div className="container">
            <button className="login-btn">
              <AiOutlineUser />
              <div className="text">
                {user ? `Hej ${user}!` : "Hej! Login or signcup"}
              </div>
            </button>

            <NavLinks toggleSidebar={toggleSidebar} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
