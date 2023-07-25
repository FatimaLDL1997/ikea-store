import styled from "styled-components";

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  background: var(--white);
  .logo {
    display: flex;
    align-items: center;
    width: 6rem;
  }
  .main-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    height: fit-content;
    width: 100%;
    background-color: white;
  }
  .nav-center {
    display: flex;
    width: 100%;
    height: 5rem;
    align-items: center;
    position: relative;
    justify-content: space-around;
    /* z-index: -1; */
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.3rem;
    color: var(--black);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .toggle-btn-container {
    font-family: monospace;
    width: 2rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
  }
  .toggle-btn-container:hover {
    background-color: lightgrey;
    border-radius: 50%;
  }
  .menu-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    padding-top: 10px;
    padding-left: 2.8rem;
    font-size: 0.9rem;
    font-weight: 500;
    font-family: "Noto Sans Cypro Minoan", sans-serif;
  }
  //fav list
  .fav-list svg {
    background: transparent;
    border-color: transparent;
    font-size: 1.4rem;
    color: var(--black);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .fav-list {
    //container
    font-family: monospace;
    width: 2rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    /* margin: 0 auto; */
    /* margin-right: 0.7rem; */
  }
  .fav-list:hover {
    background-color: lightgrey;
    border-radius: 50%;
  }
  ///cart
  .cart svg {
    background: transparent;
    border-color: transparent;
    font-size: 1.4rem;
    color: var(--black);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .cart {
    //container
    font-family: monospace;
    width: 2rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    /* margin: 0 auto; */
    margin-right: 0.7rem;
  }
  .cart:hover {
    background-color: lightgrey;
    border-radius: 50%;
  }

  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .logo-text {
    display: none;
    margin: 0;
  }

  input {
    width: 52vw;
    height: 2.9rem;
    /* margin: 0 auto; */
    /* margin-right: 15rem; */
    border: none;
    border-radius: 30px;
    text-indent: 30px;
    color: black;
    /* font-weight: 00; */

    font-size: 1.1rem;
    background-color: #f5f5f5;
  }
  input:focus {
    outline-color: #663fc0;
    outline-width: thin;
    outline-style: outset;
  }
  input:hover {
    background-color: lightgrey;
  }
  .search-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    left: 3rem;
  }
  /* .search-container svg */
  .search-icon {
    left: 2rem;
    display: flex;
    position: relative;
    left: 2.4rem;
    font-size: 1.3rem;
  }
  .camera-icon {
    /* right: 12rem; */
    font-size: 1.4rem;
    display: flex;
    position: relative;
  }

  .login-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border: none;
    background-color: white;
    width: 11rem;
    height: 2.4rem;
    /* margin: 0 auto; */
    margin-right: 1rem;
    margin-left: 2.7rem;

    border: none;
    border-radius: 30px;
    position: relative;
    left: 1rem;
    font-family: system-ui;
    font-size: 13px;
  }
  .login-btn svg {
    font-size: 1.2rem;
  }
  .login-btn .text {
    padding-left: 12px;
  }
  .login-btn:hover {
    border: none;
    cursor: pointer;
    background-color: lightgrey;
    /* width: 12rem;
    height: 2.3rem; */
    /* margin: 0 auto; */
    /* border: none; */
    /* border-radius: 30px; */
  }
  .navbar-logo {
    position: relative;
    left: 2rem;
  }
  .top-massege {
    display: flex;
    background: black;
    color: white;
    flex-direction: row;
    position: relative;
    /* left: -25px; */
    top: 0;
    width: 100%;
    height: 2.7rem;
    /* z-index: 5; */
    justify-content: center;
    align-items: center;
    /* padding-left: 15rem; */
    /* padding-right: 15rem; */
    list-style: none;
  }
  .top-massege li {
    font-size: 0.8rem;
  }
  .top-massege-icon {
    margin-right: 1rem;
    margin-left: 4rem;
  }
  .lower-nav-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 4rem;
    align-content: center;

  }

  .line {
    display: flex;
    justify-content: flex-end;
    /* color: lightgray; */
    /* font-size: 2px; */
    flex-direction: row;
    border-bottom: 1px solid #f6f6f6;
    width: 80rem;
    margin-left: 9rem;
    justify-content: center;
  }
  .short-nav {
    /* background-color: #663fc0; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    margin-left: 9.3rem;
    margin-top: 1rem;
  }
  .nav-link{
    font-weight: 900;
    margin-right: 2rem;
    color: black;
    font-size: 0.9rem;
  }

  
  
  .loc-store {
    /* background-color: green; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    align-content:center; 
    width: 100%;
    height: 100%;
  }
  .loc-store h1 {
    font-size: 1rem;
    padding-right: 2rem;
    margin-bottom: 0;
    margin-left: 1rem;
  }

  .mystore{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-content:center; 
    width: fit-content;
    height: 100%;

  }
  
  .mystore svg , .delivery svg {
    font-size: 1.4rem;
  }
  .delivery{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-content:center; 
    width: 9rem;
    height: 100%;

  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 100%;
      /* padding-left: 3%; */
      /* padding-right: 3%; */
      padding-top: 3px;
    }
    .logo {
      /* display: none; */
    }
    .logo-text {
      display: block;
    }
  }
`;
export default Wrapper;
