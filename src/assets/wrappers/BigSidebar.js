import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--white);
      /* min-height: 100vh; */
      height: 100%;

      width: 30rem;
      margin-left: -30rem;
      transition: var(--transition);
      position: fixed;
      z-index: 99;
      overflow-y: auto;
    }
    .content {
      position: sticky;
      top: 0;
      padding-top: 1rem;
    }
    .content img {
      width: 5.5rem;
      /* height: 2rem; */
      /* font-size: 5.6rem; */
      margin-left: 4.6rem;
      /* padding-right: 4rem; */
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 2.5rem;
    }
    .close-container {
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      /* margin-right: 20px !important; */
      font-size: 27px;
    }
    .close-container:hover {
      background-color: lightgrey;
      transition: ease-in-out all;
    }
    header {
      position: fixed;
      height: 4rem;
      background: white;
      width: 451px;
    }
    header svg {
      cursor: pointer;
      font-weight: bolder;
      color: black;
    }
    header svg:hover {
      /* background-color: lightgray; */
      border-radius: 50%;
    }
    .nav-links-bolder {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      padding-left: 6.8rem;
      padding-right: 4rem;
      font-weight: bolder;
      font-size: 2.3rem;
      color: black;
    }
    .nav-links-bold {
      /* padding-top: 2rem; */
      display: flex;
      flex-direction: column;
      padding-left: 6.8rem;
      padding-right: 4rem;
      font-weight: 600;
      font-size: 0.9rem;
      color: black;
    }
    .nav-links-reg {
      padding-top: 1.5rem;
      display: flex;
      flex-direction: column;
      padding-left: 6.8rem;
      padding-right: 4rem;
      font-weight: 200;
      font-size: 0.9rem;
      color: black;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: black;
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: var(--transition);
    }
    .nav-link:hover {
      /* background: var(--grey-50); */
      /* padding-left: 3rem; */
      color: var(--grey-900);
      text-decoration-line: underline;
    }
    .nav-link:hover .icon {
      color: var(--primary-500);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }
    .active {
      color: var(--grey-900);
    }
    .active .icon {
      color: var(--primary-500);
    }

    /*overlay*/
    .overlay {
      background-color: rgba(128, 128, 128, 0.559);
      top: 0px;
      left: 0px;
      width: 100vw;
      height: 100vh;
      position: absolute;
      z-index: 10;
    }
    .container {
      padding-top: 3rem;
      width: 100%;
    }
    .login-btn {
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: center;
      margin-top: 2rem;
      margin-left: 9rem;
      border: none;
      background-color: white;
      width: 18rem;

      height: 3.2rem;
      border: none;
      border-bottom: 2px solid lightgray;
      font-family: system-ui;
      font-size: 14px;
      font-weight: 300;
    }
    .login-btn svg {
      font-size: 1.4rem;
    }
    .login-btn .text {
      padding-left: 12px;
    }
    .login-btn:hover {
      /* border: none; */
      cursor: pointer;
      background-color: lightgrey;
      /* width: 12rem;
      height: 2.3rem; */
      /* margin: 0 auto; */
      border: none;
      /* border-radius: 30px; */
    }
  }
`;
export default Wrapper;
