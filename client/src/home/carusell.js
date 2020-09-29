import React, { useState } from "react";
import Slider from "react-slick";

const Carousel = () => {
  const [settings, setSettings] = useState({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1648,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  return (
    <div>
      <h2></h2>

      <Slider {...settings} style={{ width: "100%" }}>
        <div>
          <div style={{ margin: "15px" }}>
            {" "}
            <img
              style={{ width: "100%", height: "auto" }}
              src="https://shop.redq.now.sh/_next/static/images/offer-1-1f7a4c9ea0ba5a216bc7af1f60d044e0.png"
            />
          </div>
        </div>

        <div>
          <div style={{ margin: "15px" }}>
            <img
              style={{ width: "100%", height: "auto" }}
              src="https://shop.redq.now.sh/_next/static/images/offer-3-2f8285b13bef950f843cb4147666af6e.png"
            />
          </div>
        </div>
        <div>
          <div style={{ margin: "15px" }}>
            <img
              style={{ width: "100%", height: "auto" }}
              src="https://shop.redq.now.sh/_next/static/images/offer-2-90d3534e1ad62a8b8a977f1290e61e9f.png"
            />
          </div>
        </div>

        <div>
          <div style={{ margin: "15px" }}>
            {" "}
            <img
              style={{ width: "100%", height: "auto" }}
              src="https://shop.redq.now.sh/_next/static/images/offer-1-1f7a4c9ea0ba5a216bc7af1f60d044e0.png"
            />
          </div>
        </div>

        <div>
          <div style={{ margin: "15px" }}>
            <img
              style={{ width: "100%", height: "auto" }}
              src="https://shop.redq.now.sh/_next/static/images/offer-3-2f8285b13bef950f843cb4147666af6e.png"
            />
          </div>
        </div>
        <div>
          <div style={{ margin: "15px" }}>
            <img
              style={{ width: "100%", height: "auto" }}
              src="https://shop.redq.now.sh/_next/static/images/offer-2-90d3534e1ad62a8b8a977f1290e61e9f.png"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
