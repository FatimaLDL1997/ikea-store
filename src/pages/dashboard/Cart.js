import React, { useState } from "react";
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

  const increment = (e) => {
  };

  const decrement = (e) => {

    
    // // console.log(hover);
    // minus[0].style.color = "lightgrey";
    // minus[0].style.cursor = "auto";

    // // console.log("down");
    // if (itemAmount > 0) {
    //   minus[0].style.color = "black";
    //   minus[0].style.cursor = "pointer";

    //   const amount =
    //     e.currentTarget.parentElement.parentElement.children[1].innerHTML;
    //   setItemAmount(parseInt(amount) + 1);
    // }
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
        <div className="products-container">
          {products.map(
            ({
              product,
              img,
              id,
              text,
              availability,
              type,
              articleNum,
              size,
              price,
              amount,
            }) => {
              return (
                <div
                  key={id}
                  className="product-container"
                  style={{ paddingBottom: "4rem" }}
                >
                  <div className="left">
                    <div className="img-container">
                      <img className="img" src={img} />
                      <div className="article-container">{articleNum}</div>
                    </div>
                    <div className="details">
                      <div className="text">{text}</div>
                      <div className="type">{type}</div>
                      <div className="size">{size}</div>
                      <div className="availability">
                        <PiDotOutlineFill className="dot" />
                        {availability}
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
                          >
                            <AiOutlineMinus
                              className="minus"
                              onClick={(e) => decrement(e)}
                            />
                          </div>
                          <div className="amount">{itemAmount}</div>
                          <div className="plus-container">
                            <AiOutlinePlus
                              className="plus"
                              onClick={(e) => increment(e)}
                            />
                          </div>
                        </button>
                        <div className="delete">Remove product</div>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div className="price">${price}</div>
                  </div>
                </div>
              );
            }
          )}
        </div>
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
