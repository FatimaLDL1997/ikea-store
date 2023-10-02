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
  SEND_CARTITEMS_SUCCESS,
  SEND_CARTITEMS_BEGIN,
  SEND_CARTITEMS_ERROR,
  UPDATE_CARTITEMS_BEGIN,
  UPDATE_CARTITEMS_SUCCESS,
  UPDATE_CARTITEMS_ERROR,
  GET_CARTITEMS_SUCCESS,
  GET_CARTITEMS_BEGIN,
  GET_CARTITEMS_ERROR,
  DELETE_CARTITEMS_BEGIN,
} from "./actions";

import reducer from "./reducers";
import axios from "axios";
// import products from "../utils/products";

// set as default
const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
// let items = localStorage.getItem("cartItems");
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
  retrievedItems: [],
  found: false,
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
// console.log("origin")
// console.log(token)
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(
    () => updateState({}),

    []
  );

  const [total, setTotal] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [show, setShow] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [index, setIndex] = useState(0);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

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

  //response
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        // logoutUser();
        console.log("logging  ......");
      }
      return Promise.reject(error);
    }
  );

  const [cartItems, setCartItems] = useState(() => {
    //getting local storage value if any
    const savedItems = localStorage.getItem("cartItems");
    return JSON.parse(savedItems) || [];
  });

  const [showPopUp, setShowPopUp] = useState(false);
  const [retrItems, setRetrItems] = useState([]);

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
      // console.log(response.data);
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

  const calTotal = () => {
    setTotal(0);
    cartItems.forEach((element) => {
      setTotal((oldTotal) => {
        oldTotal =
          oldTotal +
          parseFloat(element[0].price) * parseFloat(element[0].amount);
        // console.log(oldTotal)
        return oldTotal;
      });
    });
  };

  const calTotalProd = () => {
    setTotalProducts(0);
    cartItems.forEach((element) => {
      setTotalProducts((oldTotal) => {
        oldTotal = oldTotal + parseFloat(element[0].amount);
        return oldTotal;
      });
    });
  };
  //-------------backend functions ---------------

  const sendCartItems = async () => {
    dispatch({ type: SEND_CARTITEMS_BEGIN });
    try {
      await authFetch.post("/prod", {
        cartItems,
      });

      dispatch({ type: SEND_CARTITEMS_SUCCESS });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: SEND_CARTITEMS_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const updateCartItems = async (currentCartItems) => {
    dispatch({ type: UPDATE_CARTITEMS_BEGIN });
    try {
      // console.log(initialState.user._id);
      // let currentUserId = initialState.user._id;
      await authFetch.patch(`/prod`, currentCartItems);
      // console.log(currentCartItems);

      dispatch({ type: UPDATE_CARTITEMS_SUCCESS, payload: currentCartItems });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_CARTITEMS_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };

  const getCartItems = async () => {
    console.log("getting");
    dispatch({ type: GET_CARTITEMS_BEGIN });
    try {
      const { data } = await authFetch.get("/prod");
      console.log(data.retrievedItems);

      if (data.retrievedItems) {
        console.log("successfully in");
        const { retrievedItems } = data;
        const { cartItems } = retrievedItems;
        dispatch({ type: GET_CARTITEMS_SUCCESS, payload: { cartItems } });
      }
      // console.log(cartItems);
    } catch (error) {
      // logoutUser()
      dispatch({
        type: GET_CARTITEMS_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const emptyCartItems = async () => {
    console.log("starting Delete All");
    dispatch({ type: DELETE_CARTITEMS_BEGIN });
    try {
      console.log('here........')
      await authFetch.delete("/prod");
    } catch (error) {
      console.log("logging out! delete error");
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleSidebar,
        getCartItems,
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
        total,
        calTotal,
        totalProducts,
        calTotalProd,

        //backend
        sendCartItems,
        updateCartItems,
        retrItems,

        emptyCartItems,
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
