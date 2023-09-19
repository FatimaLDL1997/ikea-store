import React, { useReducer, useEffect, useContext, useState } from "react";

import {
  TOGGLE_SIDEBAR,
  TOGGLE_RIGHT_SIDEBAR,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_ERROR,
  SETUP_USER_SUCCESS,
  LOGOUT_USER,
} from "./actions";

import reducer from "./reducers";
import axios from "axios";
// import products from "../utils/products";

// set as default
const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
let items = localStorage.getItem("cartItems");

// const userLocation = localStorage.getItem("location");
export const initialState = {
  showSidebar: false,
  showRightSidebar: false,

  isLoading: false,

  showAlert: false,
  alertText: "",
  alertType: "",

  user: user ? JSON.parse(user) : null,
  token: token,
  // cartItems: items ? JSON.parse(items):[],
  // cartList: cartList,

  // userLocation: userLocation || "",
  // showSidebar: false,
  // isEditing: false,
  // editJobId: "",
  // position: "",
  // company: "",
  // jobLocation: userLocation || "",
  // jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  // jobType: "full-time",
  // statusOptions: ["pending", "interview", "declined"],
  // status: "pending",
  // jobs: [],
  // totalJobs: 0,
  // numOfPages: 1,
  // page: 1,
  // stats: {},
  // monthlyApplications: [],

  // search: "",
  // searchStatus: "all",
  // searchType: "all",
  // sort: "latest",
  // sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const [state, dispatch] = useReducer(reducer, initialState);
  const [show, setShow] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [index, setIndex] = useState(0);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const [cartItems, setCartItems] = useState(() => {
    //getting local storage value if any
    const savedItems = localStorage.getItem("cartItems");
    return JSON.parse(savedItems) || [];
  });

  const [showPopUp, setShowPopUp] = useState(false);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const setWindowDimensions = () => {
    //------------------window width --------------
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);

    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, [window.innerWidth]);

  const [title, setTitle] = useState(
    document.querySelector(".window-title").innerHTML
  );
  //---------------------axios----------------
  //axios
  axios.defaults.headers["Authorization"] = `Bearer ${state.token}`;
  //axios instance setup
  const authFetch = axios.create({
    baseURL: "/api/v1",
  });
  // request

  authFetch.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // console.log(error.response);
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  //-------------------alert-----------------------
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };
  const addCartItemsToLocalStorage = ({ cartItems }) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  const removeCartItemsFromLocalStorage = () => {
    localStorage.removeItem("cartItems");
  };
  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user)); //since user is an object
    localStorage.setItem("token", token);
  };
  //------------local storage------------------
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  const setupUser = async ({ currentUser, endpoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      //using template liSETUP to dynamically pass in arguments
      //frontend --> backend
      const response = await axios.post(
        `/api/v1/auth/${endpoint}`,
        currentUser
      );

      const { user, token } = response.data;
      console.log(response.data);
      console.log("good");

      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, alertText },
      });

      addUserToLocalStorage({
        user,
        token,
      });
    } catch (error) {
      //local storage later
      // console.log('here error');
      console.log(error.response);
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  //--------------sidebar---------------------
  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };
  const toggleRightSidebar = () => {
    dispatch({ type: TOGGLE_RIGHT_SIDEBAR });
  };
  //--------------logout user-------------
  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
    removeCartItemsFromLocalStorage();
  };

  //------------------------------------

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleSidebar,
        toggleRightSidebar,

        logoutUser,

        show,
        setShow,
        clicked,
        setClicked,
        title,
        setTitle,
        index,
        setIndex,

        windowHeight,
        windowWidth,
        setWindowHeight,
        setWindowWidth,
        setWindowDimensions,

        setupUser,

        displayAlert,

        cartItems,
        setCartItems,
        addCartItemsToLocalStorage,

        setShowPopUp,
        showPopUp,
        togglePopUp,
        forceUpdate,
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
