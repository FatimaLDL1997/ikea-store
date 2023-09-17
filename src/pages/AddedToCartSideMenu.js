import { useAppContext } from "../context/appContext";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/AddedToCartSideMenu";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineUser, AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const AddedToCartSideMenu = (props) => {
  const { showPopUp, togglePopUp, cartItems } = useAppContext();
  const Navigate = useNavigate();

  console.log(props.data.itemAmount)
  return (
    <Wrapper>
      <div
        className={
          showPopUp
            ? "sidebar-popup-container show-sidebar"
            : "sidebar-popup-container "
        }
      >
        <div className="content">
          <div className="close-container-box">
            <div className="close-container" onClick={togglePopUp}>
              <GrFormClose />
            </div>
          </div>

          <div className="items">
            <h1>You've added {props.data.itemAmount} {props.data.text} to your shopping bag</h1>
            <a
              style={{ textDecoration: "underline" }}
              onClick={() => {
                togglePopUp();
                Navigate("/cart");
              }}
            >
              Continue to cart
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AddedToCartSideMenu;
