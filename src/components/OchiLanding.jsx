import React, { useEffect, useState } from "react";
import ochilanding from "../assets/OchiImage/ochilanding.png";
import marquee from "../assets/OchiImage/marquee.png";
import about from "../assets/OchiImage/about.png";
import game from "../assets/OchiImage/game.png";
import image from "../assets/OchiImage/image.png";
import cards from "../assets/OchiImage/cards.png";
import footer from "../assets/OchiImage/footer.png";

const OchiLanding = () => {
  const Ochi = [
    ochilanding,
    marquee,
    about,
    game,
    image,
    cards,
    footer,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Ochi.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [Ochi.length]);

  return (
    <div className="h-screen w-full bg-green-400 px-16 py-12 flex items-end relative overflow-hidden">
      <div className="vehicle-page h-full w-full flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="box1 w-full lg:w-3/5 h-full flex flex-col justify-between space-y-5">
          <h1 className="text-3xl font-oswald text-white pl-3">PROJECT 2</h1>
          <div className="box1-inner flex flex-col justify-end gap-5">
            <pre className="desc text-xl sm:text-2xl font-nunito text-white tracking-tight pl-3">
              OCHI / UI/UX DESIGN / ANIMATION DEVELOPMENT
            </pre>
            <h1 className="project-name text-[100px] sm:text-[150px] lg:text-[250px] font-oswald text-white leading-none tracking-tighter pb-2 font-semibold">
              OCHI
            </h1>
          </div>
        </div>

        {/* Right Section */}
        <div className="box2 w-full lg:w-2/5 relative h-full flex justify-end items-end">
          <div className="box2-inner h-[35vh] sm:h-[45vh] lg:h-[60vh] shadow-2xl rounded-xl backdrop-blur-sm px-2 py-2 overflow-hidden z-10 flex items-center justify-center">
            <img
              className="images rounded-sm h-[35vh] sm:h-[45vh] lg:h-[50vh] w-[32vw] sm:w-[40vw] lg:w-[40vw] object-contain object-center"
              src={Ochi[currentIndex]}
              alt={`Slide ${currentIndex}`}
            />
          </div>
          <h1 className="big-num absolute text-[100px] sm:text-[150px] lg:text-[400px] text-green-300 font-oswald tracking-tighter leading-none font-extrabold bottom-10 right-10">
            02
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OchiLanding;
