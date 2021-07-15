import React from "react";
import "./FifthPage2.css";

import image1 from "../../assets/img/Page5/Picture1.jpg";
// import image2 from "../../assets/img/Page5/Picture2.jpg"

import icon1 from "../../assets/img/fifthPage/materials/Network.png";
import icon2 from "../../assets/img/fifthPage/materials/Gear.png";
import icon3 from "../../assets/img/fifthPage/materials/Folder.png";
import icon4 from "../../assets/img/fifthPage/materials/Book.png";

function FifthPage2() {
  return (
    <div class="container">
      <div className="FifthPage2__contentImage">
        <div className="FifthPage2__imageContainer">
          <img src={image1} className="FifthPage2__image" alt="pic1" />
        </div>
      </div>
      <div className="FifthPage2__content">
        <div className="FifthPage2__contentText">
          <h2>PROFESSIONAL SERVICES</h2>
          <h3>
            We accept challenges and are willing to help you to complete your
            project on time.
          </h3>
          <h3>The services we offer :</h3>
          <div>
            <img src={icon1} className="FifthPage2__icon" alt="pic1" />
            IT Infrastructure Design (Network, System & Security)
          </div>
          <div>
            <img src={icon2} className="FifthPage2__icon" alt="pic1" />
            Implementation Services
          </div>
          <div>
            <img src={icon3} className="FifthPage2__icon" alt="pic1" />
            Documenting Services
          </div>
          <div>
            <img src={icon4} className="FifthPage2__icon" alt="pic1" />
            Research and Lab Services
          </div>

          <div>
            <h3>Want to consult?</h3>
            <button className="FifthPage2__button">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthPage2;
