import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel: React.FC = () => {
  return (
    <>
      <Slider {...settings}>
        <div>
          <img src="" alt="Mobile Banner" />
        </div>
      </Slider>
    </>
  );
};

export default Carousel;
