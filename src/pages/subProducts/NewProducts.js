import React from "react";
import Wrapper from "../../assets/wrappers/sub-wrappers/NewProducts";

import { Navigation, Scrollbar, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import products from "../../utils/products";
import NewProduct from "./NewProduct";

SwiperCore.use([Navigation, Pagination, Scrollbar]);
const NewProducts = () => {
  return (
    // eslint-disable-line no-eval

    <Wrapper>
      <h4>What’s new in the IKEA range</h4>
      <h3>Open your home to colourful new looks</h3>
      <h2>
        Want to liven up every room in your home? Style them with the latest new
        products in oodles of colours that pop.
      </h2>
      <div className="product-box">
        <Swiper
          className="swiper-slider-container"
          // effect={"coverflow"}
          grabCursor={true}
          spaceBetween={50}
          slidesPerView={3}
          centeredSlides={false}
        
          // keyboard={true}
          scrollbar={{ draggable: true }}
        >
          {products.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <NewProduct {...product}></NewProduct>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* <Swiper
                className='swiper-slider-container'
                effect={"coverflow"}
                // modules={[Navigation, Pagination, Scrollbar]}
                grabCursor={true}
                spaceBetween={20}
                slidesPerView={"auto"}
                watchOverflow={true}
                centeredSlides={true}
                coverflowEffect={{
                  rotate: 10,
                  stretch: 0,
                  depth: 5,
                  modifier: 5,
                  slideShadows: true,
                }}
                // keyboard={true}
                navigation
                pagination={{ clickable: true }}
              >
                {products.map((product) => {
                  return (
                    <SwiperSlide key={product.id}>
                      <NewProduct {...product} className="item" >{product.text}</NewProduct>
                    </SwiperSlide>
                  );
                })}
              </Swiper> */}
    </Wrapper>
  );
};

export default NewProducts;
