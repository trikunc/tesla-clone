import React from "react";
import "./ThirdPage1.css";

import image1 from "../../assets/img/thirdPage/Picture1.jpg";
import image2 from "../../assets/img/thirdPage/Picture2.jpg";
import image3 from "../../assets/img/thirdPage/Picture3.jpg";
import image4 from "../../assets/img/thirdPage/Picture4.png";

function ThirdPage1() {
  return (
    // <div className="container">
    //   <div style={{ backgroundColor: "red" }}>Test</div>
    //   <div style={{ backgroundColor: "green" }}>Test</div>
    //   <div style={{ backgroundColor: "blue" }}>Test</div>
    //   <div style={{ backgroundColor: "purple" }}>Test</div>
    // </div>
    <div class="flex">
      <div className="ThirdPage1__image1">
        <div className="ThirdPage1__content">
          <div className="ThirdPage1__textContainer">
            <p className="ThirdPage1__text">Digital Workforce</p>
          </div>
          <div className="ThirdPage1__actions">
            <button className="ThirdPage1__button">Learn more</button>
          </div>
        </div>
      </div>
      <div className="ThirdPage1__image2">
        <div className="ThirdPage1__content">
          <div className="ThirdPage1__textContainer">
            <p className="ThirdPage1__text">DevOps</p>
          </div>
          <div className="ThirdPage1__actions">
            <button className="ThirdPage1__button">Learn more</button>
          </div>
        </div>
      </div>
      <div className="ThirdPage1__image3">
        <div className="ThirdPage1__content">
          <div className="ThirdPage1__textContainer">
            <p className="ThirdPage1__text">Digital Experience Monitoring</p>
          </div>
          <div className="ThirdPage1__actions">
            <button className="ThirdPage1__button">Learn more</button>
          </div>
        </div>
      </div>
      <div className="ThirdPage1__image4">
        <div className="ThirdPage1__content">
          <div className="ThirdPage1__textContainer">
            <p className="ThirdPage1__text">Digital Quality Assurance</p>
          </div>
          <div className="ThirdPage1__actions">
            <button className="ThirdPage1__button">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage1;
