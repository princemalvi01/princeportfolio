import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-[#e44d26] text-8xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#2965f1] text-8xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-[#f7df1e] text-8xl" /> },
  { name: "React", icon: <FaReact className="text-[#61dafb] text-8xl" /> },
  { name: "PHP", icon: <FaPhp className="text-[#8993be] text-8xl" /> },
  { name: "Python", icon: <FaPython className="text-[#3776ab] text-8xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-[#00599c] text-8xl" /> },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1e3c72] to-[#2a5298] py-16 px-8">
      <div className="max-w-7xl mx-auto mt-10 text-center">
        <h1 className="text-6xl sm:text-8xl font-bold text-white mb-14 tracking-wide uppercase font-oswald">
          Skills
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#0e172a] hover:bg-[#1c2539] transition duration-300 p-8 rounded-xl shadow-xl transform hover:scale-110 group"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 blur-lg opacity-50  transition duration-300 rounded-full"
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.4), transparent 70%)`,
                  }}
                ></div>
                {skill.icon}
              </div>
              <h2 className="text-2xl font-semibold text-white mt-6 group-hover:text-[#f9a825] font-nunito transition duration-300">
                {skill.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
