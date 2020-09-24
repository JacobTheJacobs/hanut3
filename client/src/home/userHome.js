import React from "react";
import "./styles.css";

const SearchBox = () => (
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
    />
    <div class="input-group-append">
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Search
      </button>
    </div>
  </div>
);

const UserHome = () => {
  return (
    <div>
      <div className="container1">
        <img
          src="https://st2.depositphotos.com/4196725/6840/i/950/depositphotos_68400461-stock-photo-nuts-texture.jpg"
          alt="Snow"
          style={{ width: "100%", height: "600px" }}
        />
        <div className="bottom-left">Bottom Left</div>
        <div className="top-left">
          <img
            src="https://i.pinimg.com/originals/e1/49/9d/e1499dcf8c44c275f213eca5e9202bf4.jpg"
            className="logo"
          />
        </div>
        <div className="top-right">Top Right</div>
        <div className="bottom-right">Bottom Right</div>
        <div className="centered">
          <h1>Groceries Delivered in 90 Minute</h1>
          <h5>
            Get your healthy foods & snacks delivered at your doorsteps all day
            everyday
          </h5>
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default UserHome;
