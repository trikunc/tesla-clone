import React from "react";
import "./Page1.css";

function Page4(background) {
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
            Need technical specialist team to help your business? We initially
            focused on that support service.
          </h2>
        </div>
      </div>
      <div className="headerBlock__actions">
        <button className="headerBlock__buttonPrimary">Find out more</button>
      </div>
    </div>
  );
}

export default Page4;
