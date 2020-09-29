import React from "react";

const Carousel = () => (
  <div>
    <h2></h2>

    <Slider {...settings} style={{ width: "100%" }}>
      <div>
        <div style={{ margin: "15px" }}>
          {" "}
          <img src="https://shop.redq.now.sh/_next/static/images/offer-1-1f7a4c9ea0ba5a216bc7af1f60d044e0.png" />
        </div>
      </div>

      <div>
        <img src="https://shop.redq.now.sh/_next/static/images/offer-3-2f8285b13bef950f843cb4147666af6e.png" />
      </div>

      <div>
        <img src="https://shop.redq.now.sh/_next/static/images/offer-2-90d3534e1ad62a8b8a977f1290e61e9f.png" />
      </div>

      <div>
        <img src="https://shop.redq.now.sh/_next/static/images/offer-1-1f7a4c9ea0ba5a216bc7af1f60d044e0.png" />
      </div>

      <div>
        <img src="https://shop.redq.now.sh/_next/static/images/offer-3-2f8285b13bef950f843cb4147666af6e.png" />
      </div>

      <div>
        <img src="https://shop.redq.now.sh/_next/static/images/offer-2-90d3534e1ad62a8b8a977f1290e61e9f.png" />
      </div>
    </Slider>
  </div>
);

export default Carousel;
