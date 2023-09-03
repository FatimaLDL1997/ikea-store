import React from "react";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";

const Overlay = () => {
  const { showSidebar, showRightSidebar } = useAppContext();
  useEffect(() => {
    const body = document.querySelector("body");
    if (showSidebar || showRightSidebar) {
      // console.log(body);
      body.classList.add("hide-overflow-y");
    } else {
      body.classList.remove("hide-overflow-y");
    }
  }, [showSidebar, showRightSidebar]);
  return (
    <div
      className="overlay"
      style={{ display: showSidebar || showRightSidebar ? "block" : "none" }}
    ></div>
  );
};

export default Overlay;
