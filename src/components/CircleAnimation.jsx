import React from 'react';

const CircleAnimation = () => {
  // Function to generate the rotated spans
  const generateRotatedSpans = (text) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        style={{ transform: `rotate(${i * 10.3}deg)` }}
        className="absolute left-[50%] text-base md:text-lg transform origin-[0_150px]"
      >
        {char}
      </span>
    ));
  };

  return (
    <div className="relative w-[50vw] h-[50vw] max-w-[300px] max-h-[300px] rounded-full flex items-center justify-center">
      <div className="absolute w-full h-full text-black text-base md:text-lg animate-textRotation">
        <p>{generateRotatedSpans("- WT - Agence De solutions Digitales")}</p>
      </div>
    </div>
  );
};

export default CircleAnimation;
