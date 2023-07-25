import React, { useReducer, useContext, useState } from "react";

import { TOGGLE_SIDEBAR } from "./actions";

import reducer from "./reducers";
import axios from "axios";

export const initialState = {
  showSidebar: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [show, setShow] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [index, setIndex] = useState(0);

  // const title = document.querySelector('.window-title')
  // title.innerHTML = link.text
  // console.log(title.innerHTML)

  const [title, setTitle] = useState(
    document.querySelector(".window-title").innerHTML
  );

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleSidebar,
        show,
        setShow,
        clicked,
        setClicked,
        title,
        setTitle,
        index,
        setIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
