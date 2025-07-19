  import React from 'react';

  const ProjectLanding = () => {
    return (
      <div className="h-[100vh] w-full bg-[#262626] px-5 sm:px-10 md:px-[75px] py-10 sm:py-14">
        <div className="relative project-box h-full w-full text-[#ffff] font-oswald leading-none flex flex-col">
          {/* Title */}
          <h1 className=" text-left tracking-tighter text-[13vw] sm:text-[20vw] md:text-[15vw] lg:text-[250px] xl:text-[300px] 2xl:text-[350px] max-w-full">
            PRINCE
          </h1>
          <h1 className=" text-right tracking-tighter text-[13vw] sm:text-[20vw] md:text-[15vw] lg:text-[250px] xl:text-[300px] 2xl:text-[350px] max-w-full">
            PROJECT
          </h1>

          {/* Timeline */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center font-nunito">
            <span className="text-[20px] sm:text-[5vw] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[22px] text-white">
              2021
            </span>
            <div className="flex-1 h-[2px] bg-white mx-2 sm:mx-4 lg:mx-6 xl:mx-8 2xl:mx-10"></div>
            <span className="text-[20px] sm:text-[5vw] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[22px] text-white">
              2024
            </span>
          </div>
        </div>
      </div>
    );
  };

  export default ProjectLanding;
