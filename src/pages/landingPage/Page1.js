import React from "react";
import "./Page1.css";

function Page1(background) {
  return (
    <div
      className="headerBlock"
      style={{
        backgroundImage: `url(${background.background})`,
        position: "relative",
      }}
    >
      <div className="headerBlock__info">
        <div className="headerBlock__infoText">
          <h2>
            Do you believe that everything can be done easily? We believe, and
            we create it.
          </h2>
        </div>
      </div>
      <div className="headerBlock__actions">
        <button className="headerBlock__buttonPrimary">Find out more</button>
      </div>
    </div>
  );
}

export default Page1;
