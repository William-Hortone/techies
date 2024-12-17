import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { PageTitle } from "../../components";
import images from "../../constants/images";
import video1 from "../../assets/video1.mp4";

gsap.registerPlugin(ScrollTrigger);

const Introduction = ({ setShowMenu, showMenu }) => {
  useEffect(() => {
    const divAnimation = gsap.context(() => {
      gsap.fromTo(
        ".expanding-div",
        { width: "65%" },
        {
          width: "90%",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".expanding-div",
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        ".h2-1",
        { x: "100vw" },
        {
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".content",
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );

      // Animate the second h2 from left to right
      gsap.fromTo(
        ".h2-2",
        { x: "-100vw" },
        {
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".content",
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );

      // Animate the third h2 from right to left
      gsap.fromTo(
        ".h2-3",
        { x: "100vw" },
        {
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".content",
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    });

    return () => divAnimation.revert();
  }, []);
  return (
    <>
      <section className="bg-primary">
        <div className="flex justify-between w-full p-6 bg-primary sm:p-8 ">
          <p className="w-3/4 font-sans text-xl md:text-2xl xl:text-3xl lg:w-1/2 ">
            RapidPay est une application mobile innovante qui simplifie les
            réservations de voyages au Gabon, ciblant à la fois les voyageurs
            locaux et internationaux. <br /> <br />
            Elle offre une plateforme complète qui permet non seulement de
            réserver facilement des chambres dans une variété d'hôtels à travers
            le pays, mais aussi de réservations des billets pour des trajets
            longue distance tels que Libreville-Bitam, Libreville-Franceville,
            et Libreville-Makokou, parmi d'autres destinations populaires.
            <br />
            <br /> Notre plateforme améliore non seulement la satisfaction des
            clients, mais vise également à soutenir les entreprises locales,
            créant ainsi un écosystème collaboratif qui profite à toutes les
            parties prenantes.
          </p>

          <div className="w-[300px] h-[300px]">
            <img src={images.img3} alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-16 mt-28 ">
          <PageTitle title="Demo" />
          <div className="expanding-div h-[50vh] md:h-[90vh] bg-basic">
            {/* <div className="w-full min-h-[100%] md:w-1/4 bg-sky-800 "> */}
            <video
              className="object-cover w-full h-full"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="" type="video/mp4" />
              Your browser does not support the video
            </video>
            {/* </div> */}
          </div>
        </div>

        <div className="flex justify-between w-full h-auto p-6 my-20 bg-primary sm:p-8 ">
          <p className="w-3/4 font-sans text-xl md:text-2xl xl:text-3xl lg:w-1/2 ">
            Notre collaboration avec les agences de transport locales et les
            hôtels partenaires nous permet d'offrir des services efficaces qui
            répondent aux besoins de nos clients.
            <br /> <br />
            <span className="font-bold ">
            Il est à noter que la version bêta de notre application est déjà
            disponible sur Google Play Store. Toutefois, elle est en test fermé,
            et à ce jour, nous avons déjà deux partenaires qui sont prêts à nous
            accompagner dès le lancement de notre application.
            </span></p>

          <div className="w-[300px]  ">
            <img src={images.img4} alt="" />
          </div>
        </div>

        {/* Content Section with Animated h2s */}
        <div className="flex flex-col items-center gap-8 py-20 content ">
          <h2 className="text-3xl font-bold md:text-6xl lg:text-8xl font-fontAlt h2-1">
            Faites vos
          </h2>
          <div className="relative h2-2">
            <h2 className="text-3xl font-bold md:text-6xl lg:text-8xl font-fontAlt ">
          réservations depuis 
            </h2>
            <div className="absolute top-1/2 transform rounded-xl -translate-y-1/2  left-[100%] w-[150px] h-[85px] md:w-[300px] md:h-[170px] bg-gradient-to-r from-green-500 to-blue-500">
              <video
                className="object-cover w-full h-full rounded-xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video
              </video>
            </div>
          </div>
          <h2 className="text-3xl font-bold md:text-6xl lg:text-8xl font-fontAlt h2-3">
          chez vous 
          </h2>
        </div>
      </section>
    </>
  );
};

export default Introduction;
