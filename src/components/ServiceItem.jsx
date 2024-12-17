import React from "react";

const ServiceItem = ({ title, text, bgColor, color, className, video }) => {
  return (
    <div
      className={`w-full h-auto 2xl:min-h-64  flex flex-col justify-between p-4 md:p-8 md:flex-row ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col w-full gap-4 md:w-2/4">
        <h2
          className="py-2 text-2xl font-bold font-fontBase text-start lg:text-4xl"
          style={{ color: color }}
        >
          {title}
        </h2>
        <p
          className="text-lg font-opensans text-start"
          style={{ color: color }}
        >
          {text}
        </p>
      </div>
      <div className="w-full min-h-44 md:w-1/4 bg-sky-800 ">
        <video
          className="object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video
        </video>
      </div>
    </div>
  );
};

export default ServiceItem;
