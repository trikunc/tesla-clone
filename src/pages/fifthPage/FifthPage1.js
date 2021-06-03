import React from "react";
import "./FifthPage1.css";

import image1 from "../../assets/img/Page5/Picture1.jpg";
import image2 from "../../assets/img/Page5/Picture2.jpg";

function FifthPage1() {
  return (
    <div class="flex">
      <div className="FifthPage1__content" style={{ backgroundColor: "red" }}>
        <div className="FifthPage1__imageContainer">
          <img src={image1} className="FifthPage1__image" alt="pic1" />;
        </div>

        <p>Test</p>
        {/* <div className="FifthPage1__actions">
          <button className="FifthPage1__button">Learn more</button>
        </div> */}
      </div>
      <div>Test2</div>
    </div>
  );
}

export default FifthPage1;
