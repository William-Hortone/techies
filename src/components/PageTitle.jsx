import React from "react";
import PageTitleLetter from "./PageTitleLetter";

const PageTitle = ({ title }) => {
  const letters = title.split("");

  return (

      <div className=" flex items-center h-[100px]">
        {letters.map((letter, index) => (
          <PageTitleLetter key={index} letter={letter} delay={index * 0.1} />
        ))}
      </div>
  );
};

export default PageTitle;
