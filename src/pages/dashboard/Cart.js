import React, { useState, useEffect } from "react";
import Wrapper from "../../assets/wrappers/Cart";
import { FiTruck } from "react-icons/fi";
import { TbBuildingStore } from "react-icons/tb";
import { SlOptions } from "react-icons/sl";
import products from "../../utils/products";
import { PiDotOutlineFill } from "react-icons/pi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useAppContext } from "../../context/appContext";
const Cart = () => {
  const [receiveType, setReceiveType] = useState("delivery");

  const [hover, setHover] = useState(false);

  const { cartItems, setCartItems } = useAppContext();
  const [itemAmount, setItemAmount] = useState(0);
  const minus = document.getElementsByClassName("minus");

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  useEffect(() => {
    console.log("changed");
    // window.location.reload();
  }, [cartItems]);

  const increment = (e) => {
    let numAmount = e.currentTarget.parentElement.children[1];
    // console.log(numAmount)
    numAmount.innerHTML = parseInt(numAmount.innerHTML) + 1;
    setItemAmount(parseInt(numAmount.innerHTML));
    console.log("up");

    minus[0].style.color = "black";
    minus[0].style.cursor = "pointer";
  };

  const decrement = (e) => {
    console.log("down");
    minus[0].style.color = "lightgrey";
    minus[0].style.cursor = "auto";

    let numAmount = e.currentTarget.parentElement.children[1];
    setItemAmount(parseInt(numAmount.innerHTML));

    if (itemAmount > 1) {
      minus[0].style.color = "black";
      minus[0].style.cursor = "pointer";

      // console.log(numAmount)
      numAmount.innerHTML = parseInt(numAmount.innerHTML) - 1;
    }
  };

  return (
    <Wrapper>
      <div className="left-side">
        <div className="top-row">
          <h1>Shopping cart</h1>
          <div>
            <SlOptions />
          </div>
        </div>
        <h3>How would you like to receive your order? </h3>
        <div className="btns-container">
          <button
            className="delivery-btn"
            onClick={() => setReceiveType("delivery")}
          >
            <FiTruck />
            Delivery
          </button>
          <button
            className="collect-btn"
            onClick={() => setReceiveType("collect")}
          >
            <TbBuildingStore />
            Collect
          </button>
        </div>
        {cartItems.length > 0 ? (
          <div className="products-container">
            {cartItems.map((item,index) => {
              return (
                <div
                  key={index}
                  className="product-container"
                  style={{ paddingBottom: "4rem" }}
                >
                  <div className="left">
                    <div className="img-container">
                      <img className="img" src={item[0].img} />
                      <div className="article-container">{item[0].articleNum}</div>
                    </div>
                    <div className="details">
                      <div className="text">{item[0].text}</div>
                      <div className="type">{item[0].type}</div>
                      <div className="size">{item[0].size}</div>
                      <div className="availability">
                        <PiDotOutlineFill className="dot" />
                        {item[0].availability}
                      </div>
                      <div className="amount-delete-row">
                        <button className="inc-dec-btn">
                          <div
                            className="minus-container"
                            style={{
                              backgroundColor:
                                itemAmount > 0 && hover ? "lightgrey" : "white",
                            }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={(e) => decrement(e)}
                          >
                            <AiOutlineMinus className="minus" />
                          </div>
                          <div className="amount">{item[0].amount}</div>
                          <div
                            className="plus-container"
                            onClick={(e) => increment(e)}
                          >
                            <AiOutlinePlus className="plus" />
                          </div>
                        </button>
                        <div className="delete">Remove product</div>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="price">${item[0].price}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="products-container">Empty Cart</div>
        )}
      </div>
      <div className="right-side">
        <h3>Order summary</h3>
        <div className="total-price">
          <h4>Products price</h4>
          <h4> $111.00</h4>
        </div>
        <div className="collect-delivery-price">
          <h4>{receiveType == "delivery" ? "Delivery" : "Collect"}</h4>
          <h4>-</h4>
        </div>
        <div className="line"></div>
        <div className="subtotal-row">
          <h4>Subtotal</h4>
          <h2>$99.92</h2>
        </div>
        <button className="continue-to-checkout">Continue to checkout</button>
      </div>
    </Wrapper>
  );
};

export default Cart;
