import React from "react";

const Title = ({ title, color }) => {
  return <h2 className="text-2xl font-fontBase " style={{color:color}}> {title}</h2>;
};

export default Title;
