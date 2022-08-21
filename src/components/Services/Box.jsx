import React from "react";
import { Link } from "react-scroll";

const Box = (props) => {
  return (
    <div className="s-box">
      <div className="s-b-img">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="s-b-text">
        <p className="details">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <Link to="#" className="cv-btn">
          {props.button}
        </Link>
      </div>
    </div>
  );
};

export default Box;
