import React from "react";
import "./SecondPage1.css";

import image1 from "../../assets/img/secondPage/Page 1/Picture1.jpg";
import image2 from "../../assets/img/secondPage/Page 1/Picture2.jpeg";
import image3 from "../../assets/img/secondPage/Page 1/Picture3.jpg";
import image4 from "../../assets/img/secondPage/Page 1/Picture4.jpg";
import image5 from "../../assets/img/secondPage/Page 1/Picture5.jpg";
import image6 from "../../assets/img/secondPage/Page 1/Picture6.jpg";

function SecondPage1() {
  return (
    <div className="container">
      <div className="secondPage1__imageContent">
        <div className="secondPage1__imageBorder">
          <img src={image1} className="secondPage1__image" alt="pic1" />
        </div>
        <div className="secondPage1__imageBorder">
          <img src={image2} className="secondPage1__image" alt="pic2" />
        </div>
        <div className="secondPage1__imageBorder">
          <img src={image3} className="secondPage1__image" alt="pic3" />
        </div>
        <div className="secondPage1__imageBorder">
          <img src={image4} className="secondPage1__image" alt="pic4" />
        </div>
        <div className="secondPage1__imageBorder">
          <img src={image5} className="secondPage1__image" alt="pic5" />
        </div>
        <div className="secondPage1__imageBorder">
          <img src={image6} className="secondPage1__image" alt="pic6" />
        </div>
      </div>
      <div className="secondPage1__content">
        <div className="secondPage1__infoText">
          Should you believe, the answer is on the Internet of Things.
        </div>
        <div className="secondPage1__infoNote">
          See how we can make everything easy for you and your industry
        </div>
        <div className="secondPage1__infoBtn">
          <div>
            <button>Our product and Services</button>
          </div>
          <div>
            <button>We are always innovating</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage1;
