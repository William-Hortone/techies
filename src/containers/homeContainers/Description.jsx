import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Description = () => {
  useEffect(() => {
    const textSpans = document.querySelectorAll(".content-text span");

    //  timeline for staggered animations
    gsap.fromTo(
      textSpans,
      { y: "100%" },
      {
        y: "0%",
        duration: 2,
        ease: "power3.out",
        stagger: 0.1, 
        scrollTrigger: {
          trigger: ".app__desc-content",
          start: "top 80%",
          end: "top 80%",
          toggleActions: "play none play none",
        },
      }
    );
  }, []);

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center gap-32 md:px-[20%] bg-primary">
      <div className="app__desc-content">
        <h3 className="leading-10 text-center text-red-600 uppercase content-text font-fontAlt 2xl:text-3xl md:text-xl bg-primary">
          <span>NB : Il ne s'agit pas du site officiel de RapidPay,</span>
        </h3>
        <h3 className="leading-10 text-center text-red-600 uppercase content-text font-fontAlt 2xl:text-3xl md:text-xl bg-primary">
          <span> mais juste d'un site conçu pour</span>
        </h3>
        <h3 className="leading-10 text-center text-red-600 uppercase content-text font-fontAlt 2xl:text-3xl md:text-xl bg-primary">
          <span>présenter RapidPay lors des Techies Awwards </span>
        </h3>
    
      </div>

      
    </section>
  );
};

export default Description;
