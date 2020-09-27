import React, { useState } from "react";

const UserHome = () => {
  const [customStyle, setCustomeStyle] = useState("none");

  const w3_open3 = (e) => {
    console.log(e);
    console.log(customStyle);
    if (customStyle === "block") {
      setCustomeStyle("none");
    }
    setCustomeStyle("block");
  };

  const w3_close = (e) => {
    console.log(e);
    console.log(customStyle);
    setCustomeStyle("none");
  };

  const MobileHeader = () => (
    <header className="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
      <div className="w3-bar-item w3-padding-24 w3-wide">LOGO</div>
      <a
        className="w3-bar-item w3-button w3-padding-24 w3-right"
        onClick={(e) => w3_open3(e)}
      >
        <i className="fa fa-bars"></i>
      </a>
    </header>
  );

  const Header = () => (
    <nav
      className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top"
      style={{ zIndex: "3", width: "250px", display: customStyle }}
      id="mySidebar"
    >
      <div className="w3-container w3-display-container w3-padding-16">
        <i
          onClick={(e) => w3_close(e)}
          className="fa fa-remove w3-hide-large w3-button w3-display-topright"
        ></i>
        <h3 className="w3-wide">
          <b>LOGO</b>
        </h3>
      </div>
      <div
        className="w3-padding-64 w3-large w3-text-grey"
        style={{ fontWeight: "bold", display: customStyle }}
      >
        <a href="#" className="w3-bar-item w3-button">
          Shirts
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Dresses
        </a>

        <div
          id="demoAcc"
          className="w3-bar-block w3-hide w3-padding-large w3-medium"
        >
          <a href="#" className="w3-bar-item w3-button w3-light-grey">
            <i className="fa fa-caret-right w3-margin-right"></i>Skinny
          </a>
          <a href="#" className="w3-bar-item w3-button">
            Relaxed
          </a>
          <a href="#" className="w3-bar-item w3-button">
            Bootcut
          </a>
          <a href="#" className="w3-bar-item w3-button">
            Straight
          </a>
        </div>
        <a href="#" className="w3-bar-item w3-button">
          Jackets
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Gymwear
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Blazers
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Shoes
        </a>
      </div>
      <a href="#footer" className="w3-bar-item w3-button w3-padding">
        Contact
      </a>

      <a href="#footer" className="w3-bar-item w3-button w3-padding">
        Subscribe
      </a>
    </nav>
  );

  return (
    <div>
      <Header />
      <MobileHeader />

      <div
        class="w3-overlay w3-hide-large"
        onClick={(e) => w3_close(e)}
        style={{ cursor: "pointer", display: customStyle }}
        title="close side menu"
        id="myOverlay"
      ></div>
    </div>
  );
};

export default UserHome;
