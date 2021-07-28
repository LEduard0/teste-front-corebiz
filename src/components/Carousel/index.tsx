import React from "react";
import Slider from "react-slick";

import bannerMobile from "../../assets/images/bannerMobile.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel: React.FC = () => {
  return (
    <>
      <Slider {...settings}>
        <img
          src={bannerMobile}
          alt="Mobile Banner"
          width="100%"
          height="auto"
        />
        <img
          src={bannerMobile}
          alt="Mobile Banner"
          width="100%"
          height="auto"
        />
      </Slider>
    </>
  );
};

export default Carousel;
