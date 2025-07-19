// import React from 'react';
import Navbar from './Navbar';
import princeloop from '../assets/princeloop.mp4';

const Landing = () => {
  return (
    <div  className="w-full min-h-screen flex items-center justify-center pb-20 pt-24">
      <Navbar />
      <div className="w-[90%] relative flex flex-col lg:flex-row">
        <div className="lg:w-3/5 w-full font-oswald leading-none flex flex-col items-center lg:items-start">
          <p className="big_fonts text-[12vw] md:text-[250px] lg:text-[400px] xl:text-[600px]">IT'S</p>
          <p className="big_font text-[10vw] md:text-[150px] lg:text-[300px] xl:text-[450px] z-10">PRINCE</p>
          <p className="big_font text-[10vw] md:text-[150px] lg:text-[300px] xl:text-[450px]">MALVI</p>
          <div data-scroll data-scroll-speed=".4" className="absolute bottom-[100px] lg:bottom-[300px] left-1/2 lg:left-[451px] transform -translate-x-1/2 lg:translate-x-0 h-[25vh] w-[40vw] lg:h-[45vh] lg:w-[18vw] rounded-2xl overflow-hidden">
            <video 
              autoPlay
              muted
              loop
              className="h-full w-full object-cover object-center hover:scale-105 transition-all ease-in-out duration-500"
              src={princeloop}
            ></video>
          </div>
        </div>
        <div className="boxing lg:w-2/5 w-full  px-5 lg:px-10 pt-[50px] lg:pt-[110px] flex flex-col xl:gap-3 font-light text-center   lg:text-[15px] gap-3 lg:text-left 2xl:gap-7 ">
          <p className="text1 2xl:text-[28px] text-black uppercase font-nunito">
            Hey there! I'm Prince, the guy who turns coffee into code!
          </p>
          <p className="text1 2xl:text-[28px] text-black uppercase font-nunito">
            I craft websites that are as fresh and stylish as your favorite playlist—minimalist, creative, and always on point.
          </p>
          <p className="text1 2xl:text-[28px] text-black uppercase font-nunito">
            "Keep coding until the code becomes a masterpiece." — By Prince Malvi
          </p>
          <p className="text2 mt-8 lg:mt-16 lg:text-[18px] text-[6vw] 2xl:text-[32px] text-black uppercase font-nunito font-light border-b-2 border-black w-[70%] mx-auto lg:mx-0">
            SCROLL TO EXPLORE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
