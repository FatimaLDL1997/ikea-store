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

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleSidebar,
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
