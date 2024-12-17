import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeClosed } from "react-icons/rx";

const NavBar = ({ showMenu, setShowMenu }) => {
  const lettersRef = useRef([]);

  useEffect(() => {
    if (showMenu) {
      gsap.fromTo(
        lettersRef.current,
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
        }
      );
    }
  }, [showMenu]);

  return (
    <>
      <nav
        className={
          !showMenu
            ? "h-screen w-1/4 flex flex-col -right-full absolute top-0  "
            : "slide-in-right h-screen w-full md:w-1/4 flex flex-col fixed top-0 p-4 bg-black z-10"
        }
      >
        {/* Title logo */}
        <h2 className="absolute flex flex-col items-center text-4xl right-8 top-1/4 font-fontBase text-basic">
          {["R", "A", "P", "I ", "D", "P", "A", "Y"].map((char, index) => (
            <span
              key={index}
              className="block"
              ref={(el) => (lettersRef.current[index] = el)}
            >
              {char}
            </span>
          ))}
        </h2>

        {/* Close btn */}
        <button
          onClick={() => setShowMenu(false)}
          className="absolute z-10 flex items-center gap-2 font-medium top-8 right-9 group"
        >
          <GoEyeClosed
            className="block group-hover:hidden"
            color="white"
            size={20}
          />
          <RxEyeClosed
            className="hidden group-hover:block"
            color="white"
            size={20}
          />
          <p className="font-extrabold text-white">Fermer</p>
        </button>

        <ul className="relative flex flex-col justify-center h-screen gap-12 p-">
          <li
            onClick={() => setShowMenu(false)}
            className="text-2xl uppercase transition duration-300 ease-in-out font-fontAlt md:text-3xl text-zinc-400 hover:text-white hover:font-bold "
          >
            
            <a href="#home">Accueil</a>
          </li>
          <li
          
            onClick={() => setShowMenu(false)}
            className="text-2xl uppercase transition duration-300 ease-in-out font-fontAlt md:text-3xl text-zinc-400 hover:text-white hover:font-bold"
          >
             <a href="#about">A Propos</a>
            
          </li>
          <li
            onClick={() => setShowMenu(false)}
            className="text-2xl uppercase transition duration-300 ease-in-out font-fontAlt md:text-3xl text-zinc-400 hover:text-white hover:font-bold"
          >
          <a href="#demo">Demo</a>
           
          </li>
        </ul>

        <p className="text-lg text-white font-fontAlt">willhortone@gmail.com</p>
      </nav>
      {/* {showMenu && (
        <div class="w-full h-screen fixed top-0 left-0 bg-[rgba(255,255,255,0)] transition-all ease duration-400 backdrop-blur-md z-2"></div>
      )} */}
    </>
  );
};

export default NavBar;
