import React from "react";
import "./FifthPage3.css";

// import image1 from "../../assets/img/Page5/Picture1.jpg";
import image2 from "../../assets/img/Page5/Picture2.jpg";

import icon1 from "../../assets/img/fifthPage/materials/Operation.png";
import icon2 from "../../assets/img/fifthPage/materials/Remote.png";
import icon3 from "../../assets/img/fifthPage/materials/Asses.png";

function FifthPage3() {
  return (
    <div class="container">
      <div className="FifthPage3__contentImage">
        <div className="FifthPage3__imageContainer">
          <img src={image2} className="FifthPage3__image" alt="pic1" />
        </div>
      </div>
      <div className="FifthPage3__content">
        <div className="FifthPage3__contentText">
          <h2>OPERATION SERVICES</h2>
          <h3>
            We are willing to help operate your system so that it is maintained
            and optimal.
          </h3>
          <h3>The services we offer :</h3>
          <div>
            <img src={icon1} className="FifthPage3__icon" alt="pic1" />
            Daily Operation Services
          </div>
          <div>
            <img src={icon2} className="FifthPage3__icon" alt="pic1" />
            Remote and On-Site Support Services
          </div>
          <div>
            <img src={icon3} className="FifthPage3__icon" alt="pic1" />
            Assessment Services
          </div>

          <div>
            <h3>Want to consult?</h3>
            <button className="FifthPage3__button">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthPage3;
