import React from "react";
import "./FifthPage4.css";

import Palo from "../../assets/img/brand/PaloAltoNetworks.png";
import Forti from "../../assets/img/brand/fortinet.png";
import Juniper from "../../assets/img/brand/Juniper.png";
import Arbor from "../../assets/img/brand/Arbor.png";
import Elastic from "../../assets/img/brand/Elastic.jpeg";
import Alcatel from "../../assets/img/brand/Alcatel.png";

const FifthPage4 = () => {
  return (
    <div className="FifthPage4__Container">
      <div className="FifthPage4__Title">
        <h1>OUR EXPERIENCES</h1>
      </div>
      <div className="FifthPage4__Text">
        <h3>
          We are experienced and continue to develop our capabilities in various
          fields of technology
        </h3>
      </div>
      <div className="FifthPage4__Brand">
        <img src={Palo} className="FifthPage4__img" alt="" />
        <img src={Forti} className="FifthPage4__img" alt="" />
        <img src={Juniper} className="FifthPage4__img" alt="" />
        <img src={Arbor} className="FifthPage4__img" alt="" />
        <img src={Elastic} className="FifthPage4__img" alt="" />
        <img src={Alcatel} className="FifthPage4__img" alt="" />
      </div>
      <div className="FifthPage4__ButtonContainer">
        <button className="FifthPage4__button">Contact Us</button>
      </div>
    </div>
  );
};

export default FifthPage4;
