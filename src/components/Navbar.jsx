import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["HOME", "ABOUT", "PROJECTS", "SKILLS"];

  return (
    <div className="h-[9vh] w-full fixed top-0 left-0 px-50 flex items-center justify-center z-50 backdrop-blur-md">
      {/* Main Navbar */}
      <div className="w-[90%] flex justify-between items-center">
        <h1 className="text-[28px] font-oswald">PM</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-[19px] font-nunito">
          {links.map((link, index) => (
            <li key={index}>
              <a
                className="tracking-widest leading-5 hover:text-blue-500 transition duration-300"
                href={`#${link.toLowerCase()}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <button className="hidden md:block text-[19px] px-4 py-3 bg-black text-white rounded-full tracking-widest leading-5 hover:bg-gray-800 transition duration-300">
          CONTACT
        </button>

        {/* Menu Button */}
        <div
          className="md:hidden cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={`h-[3px] w-6 bg-black rounded transition duration-300 ${
              menuOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          ></div>
          <div
            className={`h-[3px] w-6 bg-black rounded transition duration-300 ${
              menuOpen ? "opacity-0" : "my-1"
            }`}
          ></div>
          <div
            className={`h-[3px] w-6 bg-black rounded transition duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          ></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-screen bg-zinc-300 flex flex-col justify-between items-center text-center py-16 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-40`}
      >
        <h1 className="text-[40px] font-oswald mb-16">PM</h1>
        <ul className="flex flex-col items-center gap-8 text-[22px] font-nunito">
          {links.map((link, index) => (
            <li key={index}>
              <a
                className="tracking-widest leading-5 text-black hover:text-blue-500 transition duration-300"
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="text-[20px] px-8 py-4 bg-black text-white rounded-full tracking-widest leading-5 hover:bg-gray-800 transition duration-300"
          onClick={() => setMenuOpen(false)}
        >
          CONTACT
        </button>
      </div>
    </div>
  );
};

export default Navbar;
