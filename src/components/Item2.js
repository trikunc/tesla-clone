import React from "react";
import Button from "./Button";
import "./Item2.css";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Item2 = ({
  title,
  desc,
  backgroundImg,
  leftBtnTxt,
  leftBtnLink,
  rightBtnTxt,
  rightBtnLink,
  twoButtons,
  first,
  itemPosition,
}) => {
  return (
    <div
      className="item2"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="item2__container">
        <div className={`${itemPosition}`}>
          <h1>{title}</h1>
          <div className="item2_textDesc">
            <p>{desc}</p>
          </div>
        </div>
        <div className="item2__lowerThird">
          <div className="item2__buttons">
            <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
            {twoButtons && (
              <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
            )}
          </div>
          {first && (
            <div className="item2__expand">
              <ExpandMoreIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item2;
