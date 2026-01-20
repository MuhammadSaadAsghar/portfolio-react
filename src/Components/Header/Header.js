import React from "react";
import "./Hero.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="overley"></div>
      <div className="content">
        <div >
          <p>WE CRAFT DEGITAL EXPERIENCE</p>
          <h1 className="head-Design">
            Design Driven For <br />
            Professionals
          </h1>
          <div className="header-button">
            <button className="b-one " id="b-1" >Get Started</button>
            <button className="b-one" id="b-two">Our Work</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
