import React from "react";
import "./Page1.css";

function Page2(background) {
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
            Digital transformation? not just a discourse, see what we can do for
            you.
          </h2>
        </div>
      </div>
      <div className="headerBlock__actions">
        <button className="headerBlock__buttonPrimary">Find out more</button>
      </div>
    </div>
  );
}

export default Page2;
