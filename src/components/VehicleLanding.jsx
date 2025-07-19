import React, { useEffect, useState } from "react";
import registration from "../assets/RentalXimage/registration.png";
import landing from "../assets/RentalXimage/landing.png";
import service1 from "../assets/RentalXimage/service1.png";
import service2 from "../assets/RentalXimage/service2.png";
import vc1 from "../assets/RentalXimage/vc1.png";
import vc2 from "../assets/RentalXimage/vc2.png";
import vc3 from "../assets/RentalXimage/vc3.png";
import booking from "../assets/RentalXimage/booking.png";
import profile1 from "../assets/RentalXimage/profile1.png";
import updvehicle from "../assets/RentalXimage/updvehicle.png";

const VehicleLanding = () => {
  const RentalX = [
    registration,
    landing,
    service1,
    service2,
    vc1,
    vc2,
    vc3,
    booking,
    profile1,
    updvehicle,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === RentalX.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [RentalX.length]);

  return (
    <div className="h-screen w-full bg-orange-400 px-16 py-12 flex items-end relative overflow-hidden">
      <div className="vehicle-page h-full w-full flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="box1 w-full lg:w-3/5 h-full flex flex-col justify-between space-y-5">
          <h1 className="text-3xl font-oswald text-white pl-3">PROJECT 1</h1>
          <div className="box1-inner flex flex-col justify-end gap-5">
            <pre className="desc text-xl sm:text-2xl font-nunito text-white tracking-tight pl-3">
              VEHICLE RENTAL / UI/UX DESIGN / WEBFLOW DEVELOPMENT
            </pre>
            <h1 className="project-name text-[100px] sm:text-[150px] lg:text-[250px] font-oswald text-[#ffffff] leading-none tracking-tighter pb-2 font-semibold">
              RENTAL X
            </h1>
          </div>
        </div>

        {/* Right Section */}
        <div className="box2 w-full lg:w-2/5 relative h-full flex justify-end items-end">
          <div className="box2-inner h-[35vh] sm:h-[45vh] lg:h-[60vh] shadow-2xl rounded-xl backdrop-blur-sm px-2 py-2 overflow-hidden z-10 flex items-center justify-center">
            <img
              className="images rounded-sm h-[35vh] sm:h-[45vh] lg:h-[50vh] w-[32vw] sm:w-[40vw] lg:w-[40vw] object-contain object-center"
              src={RentalX[currentIndex]}
              alt={`Slide ${currentIndex}`}
            />
          </div>
        </div>
      </div>

      {/* Large "01" number */}
      <h1 className="absolute text-[100px] sm:text-[150px] lg:text-[400px] text-orange-300 font-oswald tracking-tighter leading-none font-extrabold bottom-10 right-10">
        01
      </h1>
    </div>
  );
};

export default VehicleLanding;
