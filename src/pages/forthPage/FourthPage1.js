import React from "react";
import "./FourthPage1.css";

import Cashier from "../../assets/img/fourthPage/cashier.jpg";

const FourthPage1 = () => {
  return (
    <div className="FourthPage1__Container">
      <div className="FourthPage1__Top">
        <div className="FourthPage1__img">
          <img src={Cashier} alt="" />
        </div>
      </div>
      <div className="FourthPage1__Bottom">
        <div className="FourthPage1__Left">
          <h1>CASHIER AND ORDERING</h1>
        </div>
        <div className="FourthPage1__Right">
          <h2>
            Manage your cashier and ordering system with our application
            platform.{" "}
          </h2>
          <h3>
            We help to solve your cashier and ordering system with digital
            technology.
          </h3>
          <div className="FourthPage1__ButtonContainer">
            <button className="FourthPage1__Button">Contact Us</button>
            <button className="FourthPage1__Button">Schedule Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthPage1;
