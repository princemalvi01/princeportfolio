import React, { useEffect, useState } from "react";
import netflixlanding from "../assets/NetflixImages/netflixlanding.png";
import p1 from "../assets/NetflixImages/p1.png";
import p2 from "../assets/NetflixImages/p2.png";
import p3 from "../assets/NetflixImages/p3.png";
import p4 from "../assets/NetflixImages/p4.png";
import p5 from "../assets/NetflixImages/p5.png";

const NetflixLanding = () => {
  const Netflix = [
    netflixlanding,
    p1,
    p2,
    p3,
    p4,
    p5,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Netflix.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [Netflix.length]);

  return (
    <div className="h-screen w-full bg-red-500 px-16 py-12 flex items-end relative">
      <div className="vehicle-page h-full w-full flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="box1 w-full lg:w-3/5 h-full flex flex-col justify-between space-y-5">
          <h1 className="text-3xl font-oswald text-white pl-3">PROJECT 4</h1>
          <div className="box1-inner flex flex-col justify-end gap-5">
            <pre className="desc text-xl sm:text-2xl font-nunito text-white tracking-tight pl-3">
              NETFLIX / UI/UX DESIGN / CLONE DEVELOPMENT
            </pre>
            <h1 className="project-name text-[100px] sm:text-[150px] lg:text-[250px] font-oswald text-white leading-none tracking-tighter pb-2 font-semibold">
              NETFLIX
            </h1>
          </div>
        </div>

        {/* Right Section */}
        <div className="box2 w-full lg:w-2/5 relative h-full flex justify-end items-end">
          <div className="box2-inner h-[35vh] sm:h-[45vh] lg:h-[60vh] shadow-2xl rounded-xl backdrop-blur-sm px-2 py-2 overflow-hidden z-10 flex items-center justify-center">
            <img
              className="images rounded-sm h-[35vh] sm:h-[45vh] lg:h-[50vh] w-[32vw] sm:w-[40vw] lg:w-[40vw] object-contain object-center"
              src={Netflix[currentIndex]}
              alt={`Slide ${currentIndex}`}
            />
          </div>
          <h1 className="big-num absolute text-[100px] sm:text-[150px] lg:text-[400px] text-red-300 font-oswald tracking-tighter leading-none font-extrabold bottom-10 right-10">
            04
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NetflixLanding;
