import styled from "styled-components";

const Wrapper = styled.div`
  .container-all-products {
    /* background-color: #76be7a; */
    /* background-color: red; */
    height: 100vh;
    /* width: inherit; */
    /* position: relative; */
    /* margin: 0; */
  }
  .items-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .filter-container button svg {
    cursor: pointer;
  }
  .filter-container button svg:hover {
    color: reds;
  }
  .filter-container .features-btn:hover,
    .filter-container .type-btn:hover,
    .filter-container .category-btn:hover,
    .filter-container .sort-btn:hover,
    .filter-container .size-btn:hover,
    .filter-container .color-btn:hover,

    .filter-container .price-btn:hover {
     background-color: lightgray;
    }
  @media (min-width: 900px) {
    .items-container {
      justify-content: flex-end;
    }
    .total-items {
      padding-right: 10px;
    }
  }
  @media (max-width: 900px) {
    .filter-container .features-btn,
    .filter-container .type-btn,
    .filter-container .category-btn,
    .filter-container .price-btn {
      display: none;
    }
    .category-container,
    .price-container,
    .features-container,
    .type-container {
      position: fixed;
    }
  }
  @media (max-width: 1000px) {
    .filter-container .type-btn,
    .filter-container .category-btn,
    .filter-container .price-btn {
      display: none;
    }
    .type-container,
    .category-container,
    .price-container {
      position: fixed;
    }
  }
  @media (max-width: 1100px) {
    .filter-container .category-btn,
    .filter-container .price-btn {
      display: none;
    }
    .category-container,
    .price-container {
      position: fixed;
    }
  }

  .up-arrow {
    display: none;
    position: relative;
  }
  .down-arrow {
    display: flex;
    position: relative;
  }
  .filter-container {
    display: flex;
    padding-top: 2rem;
    gap: 1rem;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      border: hidden;
      border-radius: 30px;
      background-color: whitesmoke;
      padding: 0.5rem 0.9rem 0.5rem 0.9rem;
      width: 7rem;
      height: 2.5rem;
    }
  }
  .box {
    margin-top: 1rem;
    position: absolute;
    height: 70vh;
    width: 25rem;
    /* top: -2rem; */
    display: none;
    /* left: 7rem; */
    background-color: white;
    /* border: 8px solid lightgray; */
    box-shadow: 0px 0px 15px 0px lightgray;
    border-radius: 20px;
    padding: 2rem;
    overflow-y: auto;
  }

  .new-products-title {
    font-size: 24px;
    line-height: 32px;
    font-style: normal;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    color: black;
    padding-bottom: 40px;
    padding-top: 80px;
  }
  .display-btns-container {
    display: flex;
    flex-direction: row;
    /* justify-content: flex-end; */
    /* gap: 20px; */
  }

  .product-btn {
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    background-color: white;
    cursor: pointer;
    border: 1px solid lightgray;
  }
  .room-btn {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    background-color: white;
    cursor: pointer;
    border: 1px solid lightgray;
  }
  .product-btn:hover {
    border: 1px solid darkgray;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    background-color: white;
    cursor: pointer;
  }
  .room-btn:hover {
    border: 1px solid darkgray;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    background-color: white;
    cursor: pointer;
  }
  .product-btn-active {
    border: 1px solid black;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    background-color: white;
    cursor: pointer;
  }
  .room-btn-active {
    border: 1px solid black;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
    background-color: white;
    cursor: pointer;
  }
  
  .sort-cntr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow-y: hidden;
    font-size: 20px;
    color: black;
    font-style: normal;
    font-family: "Roboto", sans-serif;
    /* line-height: 22px; */
    font-weight: 400;
    padding-bottom: 30px;
  }
  .sort-cntr:first-child {
    padding-top: 20px;
  }
  input {
    width: 35px;
  }
  .checkmark {
    background-color: white;
    position: absolute;
    border-radius: 50%;

    height: 23px;
    right: 38px;
    margin-top: 6px;
    width: 23px;
    z-index: 1;
  }
  .checkmark:hover {
    cursor: pointer;
    background-color: grey !important;
    z-index: 1000;
    width: 15px;
    height: 15px;
    right: 42px;
    margin-top: 11px;
  }
  /* .checkmark:active{
    background-color: green;
  } */
`;

export default Wrapper;
