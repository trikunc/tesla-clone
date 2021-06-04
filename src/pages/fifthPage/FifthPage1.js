import React from "react";
import "./FifthPage1.css";

import image1 from "../../assets/img/Page5/Picture1.jpg";
import image2 from "../../assets/img/Page5/Picture2.jpg";

function FifthPage1() {
  return (
    <div class="container">
      <div className="FifthPage1__content">
        <div className="FifthPage1__imageContainer">
          <img src={image1} className="FifthPage1__image" alt="pic1" />;
        </div>
        <div className="FifthPage1__imageText">
          <div className="test">
            <p>Professional Services</p>
            <button className="FifthPage1__button">Read more</button>
          </div>
        </div>
      </div>
      <div className="FifthPage1__content">
        <div className="FifthPage1__imageContainer">
          <img src={image2} className="FifthPage1__image" alt="pic1" />;
        </div>
        <div className="FifthPage1__imageText">
          <div className="test">
            <p>Operation Services</p>
            <button className="FifthPage1__button">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthPage1;
