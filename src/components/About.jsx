import React from 'react';
import prince from '../assets/prince.png';
import coffee from '../assets/coffee.png';
import laptop from '../assets/laptop.png';

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      className="h-screen w-full bg-[#252c36] rounded-t-[50px] px-5 sm:px-10 md:px-[75px] flex overflow-hidden"
    >
      <div className="left w-full md:w-1/2 h-full flex flex-col justify-center gap-8 sm:gap-12 md:gap-16 px-5 py-10 sm:py-14">
        <h1 className="text-[100px] sm:text-[120px] md:text-[190px] text-white font-oswald border-b-2">
          WHO IS I ?
        </h1>
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-nunito font-light">
            FRONT-END DEVELOPER
          </h1>
          <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-nunito uppercase font-light">
            I'm a Front-End and Full-Stack Developer{' '}
            <span>
              <img
                className="h-[30px] sm:h-[40px] inline -mt-3 hover:scale-125 transition-all ease-in-out duration-400"
                src={laptop}
                alt=""
              />
            </span>{' '}
            crafting sleek, interactive web experiences. Like a digital wizard, I turn coffee{' '}
            <span>
              <img
                className="h-[50px] sm:h-[60px] inline -mt-3 hover:scale-125 transition-all ease-in-out duration-400"
                src={coffee}
                alt=""
              />
            </span>{' '}
            and code into pure magic!
          </h1>
        </div>
      </div>
      <div className="right w-full md:w-1/2 h-full flex justify-center items-end relative">
        <img
          className="bottom-0 left-10 h-[70%] sm:h-[80%] md:h-[90%] w-[80%] sm:w-[90%] object-cover object-center hover:scale-105 transition-all ease-in-out duration-500"
          src={prince}
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
