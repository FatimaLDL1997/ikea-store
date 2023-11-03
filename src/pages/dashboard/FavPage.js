import React, { useEffect } from "react";
import products from "../../utils/products";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

import Wrapper from "../../assets/wrappers/sub-wrappers/AllNewProducts";

import { AiFillStar, AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import { MdAddShoppingCart , MdRemoveCircle} from "react-icons/md";

const FavPage = () => {
  const {
    foundFav,
    sendFavItems,
    getFavItems,
    updateFavItems,
    setFavItems,
    favItems,
  } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    getFavItems();
    if (favItems.length == 0) {
      getFavItems();
      sendFavItems();
    }
    if (favItems.length > 0) {
      getFavItems();
      updateFavItems({ favItems });
    }
    console.log(favItems);

    //remove add to fav icon from each item since this the fav list its self
    // const fav = document.getElementsByClassName("add-to-fav");
    // const result = Array.from(fav);
    // console.log(result);
    // result.forEach((element) => {
    //   element.style.display = "none";
    // });
  }, []);

  return (
    <Wrapper>
      <div className="title">Shopping List</div>
      {favItems.length > 0 || foundFav ? (
        <div className="product-box">
          {favItems.map((item, index) => {
            return (
              <div
                key={index}
                className="product-item-container"
                onClick={() => navigate(`/new-product-details/${item[0].id}`)}
              >
                <img src={item[0].img} className="img" alt="img" />
                <div className="product-item">
                  <div className="name">{item[0].text}</div>
                  <div className="type-size">
                    <h4>
                      {item[0].type} {item[0].size}
                    </h4>
                  </div>
                  <div className="price">
                    <span>$</span>
                    {item[0].price}
                  </div>
                  <div className="ratings">
                    {item[0].rating >= 1 ? (
                      <div>
                        <AiFillStar />
                      </div>
                    ) : (
                      <div>
                        <AiOutlineStar />
                      </div>
                    )}
                    {item[0].rating >= 2 ? (
                      <div>
                        <AiFillStar />
                      </div>
                    ) : (
                      <div>
                        <AiOutlineStar />
                      </div>
                    )}
                    {item[0].rating >= 3 ? (
                      <div>
                        <AiFillStar />
                      </div>
                    ) : (
                      <div>
                        <AiOutlineStar />
                      </div>
                    )}
                    {item[0].rating >= 4 ? (
                      <div>
                        <AiFillStar />
                      </div>
                    ) : (
                      <div>
                        <AiOutlineStar />
                      </div>
                    )}
                    {item[0].rating >= 5 ? (
                      <div>
                        <AiFillStar />
                      </div>
                    ) : (
                      <div>
                        <AiOutlineStar />
                      </div>
                    )}
                    <span className="reviews">({item[0].reviews})</span>
                  </div>
                  <h2 className="options">
                    {item[0].options > 1 ? "Available in more options" : ""}
                  </h2>
                  <div className="add-container">
                    <div className="add-to-cart">
                      <MdAddShoppingCart />
                    </div>
                    {/* <div className="add-to-fav">
                    <AiOutlineHeart />
                  </div> */}
                    <div className="remove">
                      <MdRemoveCircle />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>No Items Added Yet!</div>
      )}
    </Wrapper>
  );
};

export default FavPage;
