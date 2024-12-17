import React from "react";
import "./button.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Button = ({colorText, title, width}) => {
  return (
    <>

      <button className={`app__button  md:w-[${width}] w-[150px]` } >
        <div className="icon-btn">
          <FaArrowRight
            color="black"
            className="icon-arrow icon-btn-one"
            size={20}
          />
          <FaArrowRight
            color="black"
            className="icon-arrow icon-btn-two"
            size={20}
          />
        </div>

        <div className="icon-content-two">
          <FaArrowLeft
            color="black"
            className="icon-arrow icon-btn-three"
            size={20}
          />
        </div>
        <div className={`app__button-content bg-basic md:w-[${width}] w-[180px]`}>
          <p style={{color: colorText}}>{title}</p>
          <p style={{color: colorText}}>{title} </p>
        </div>
      </button>
    </>
  );
};

export default Button;
