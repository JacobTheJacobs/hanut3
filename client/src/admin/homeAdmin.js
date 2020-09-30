import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminPage = (props) => {
  const [customStyle, setCustomeStyle] = useState("none");

  const w3_open3 = (e) => {
    setCustomeStyle("block");
  };

  const w3_close = (e) => {
    setCustomeStyle("none");
  };

  const Header = () => (
    <div className="w3-bar w3-top w3-black w3-large" style={{ zIndex: "4" }}>
      <button
        className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey"
        onClick={customStyle === "none" ? () => w3_open3() : () => w3_close()}
      >
        <i className="fa fa-bars"></i>  Menu
      </button>
      <span className="w3-bar-item w3-right">Logo</span>
    </div>
  );

  const SideBar = () => (
    <>
      <nav
        className="w3-sidebar w3-collapse w3-white w3-animate-left"
        style={{ zIndex: "3", width: "300px", display: customStyle }}
        id="mySidebar"
      >
        <br />
        <div className="w3-container w3-row">
          <div className="w3-col s4">
            <img
              src="https://www.w3schools.com/w3images/avatar2.png"
              className="w3-circle w3-margin-right"
              style={{ width: "46px" }}
            />
          </div>
          <div className="w3-col s8 w3-bar">
            <span>
              Welcome, <strong>Mike</strong>
            </span>
            <br />
            <a href="#" className="w3-bar-item w3-button">
              <i className="fa fa-envelope"></i>
            </a>
            <a href="#" className="w3-bar-item w3-button">
              <i className="fa fa-user"></i>
            </a>
            <a href="#" className="w3-bar-item w3-button">
              <i className="fa fa-cog"></i>
            </a>
          </div>
        </div>
        <hr />
        <div className="w3-container">
          <h5>Dashboard</h5>
        </div>
        <div className="w3-bar-block">
          <a
            href="#"
            className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black"
            onClick={() => w3_close()}
            title="close menu"
          >
            <i className="fa fa-remove fa-fw"></i>  Close Menu
          </a>
          <a href="#" className="w3-bar-item w3-button w3-padding w3-blue">
            <i className="fa fa-users fa-fw"></i>  Overview
          </a>
          <Link to="/admin/add" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-plus fa-fw"></i>  הוסף מוצר
          </Link>
          <a href="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-users fa-fw"></i>  Traffic
          </a>
          <a href="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-bullseye fa-fw"></i>  Geo
          </a>
          <a href="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-diamond fa-fw"></i>  Orders
          </a>
          <a href="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-bell fa-fw"></i>  News
          </a>
          <a href="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-bank fa-fw"></i>  General
          </a>
          <a href="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-history fa-fw"></i>  History
          </a>
          <a href="#" className="w3-bar-item w3-button w3-padding">
            <i className="fa fa-cog fa-fw"></i>  Settings
          </a>
          <br />
        </div>
      </nav>
    </>
  );

  const StatOverview = () => (
    <div class="w3-row-padding w3-margin-bottom">
      <div class="w3-quarter">
        <div class="w3-container w3-red w3-padding-16">
          <div class="w3-left">
            <i class="fa fa-comment w3-xxxlarge"></i>
          </div>
          <div class="w3-right">
            <h3>52</h3>
          </div>
          <div class="w3-clear"></div>
          <h4>Messages</h4>
        </div>
      </div>
      <div class="w3-quarter">
        <div class="w3-container w3-blue w3-padding-16">
          <div class="w3-left">
            <i class="fa fa-eye w3-xxxlarge"></i>
          </div>
          <div class="w3-right">
            <h3>99</h3>
          </div>
          <div class="w3-clear"></div>
          <h4>Views</h4>
        </div>
      </div>
      <div class="w3-quarter">
        <div class="w3-container w3-teal w3-padding-16">
          <div class="w3-left">
            <i class="fa fa-share-alt w3-xxxlarge"></i>
          </div>
          <div class="w3-right">
            <h3>23</h3>
          </div>
          <div class="w3-clear"></div>
          <h4>Shares</h4>
        </div>
      </div>
      <div class="w3-quarter">
        <div class="w3-container w3-orange w3-text-white w3-padding-16">
          <div class="w3-left">
            <i class="fa fa-users w3-xxxlarge"></i>
          </div>
          <div class="w3-right">
            <h3>50</h3>
          </div>
          <div class="w3-clear"></div>
          <h4>Users</h4>
        </div>
      </div>
    </div>
  );

  const PageContent = () => (
    <div className="w3-main" style={{ marginLeft: "300px", marginTop: "43px" }}>
      <header class="w3-container" style={{ paddingTop: "22px" }}>
        <h5>
          <b>
            <i class="fa fa-dashboard"></i> My Dashboard
          </b>
        </h5>
      </header>
      <StatOverview />
    </div>
  );

  return (
    <div>
      <Header />
      <SideBar />
      <div
        className="w3-overlay w3-hide-large w3-animate-opacity"
        onClick={() => w3_close()}
        style={{ cursor: "pointer", display: customStyle }}
        title="close side menu"
        id="myOverlay"
      ></div>
      <PageContent />
      {props.children}
    </div>
  );
};

export default AdminPage;
