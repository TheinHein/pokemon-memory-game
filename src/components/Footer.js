import React from "react";
import pokeball from "../pokeball.png";

const Footer = () => {
  return (
    <footer className="relative font-sans text-sm w-full h-14 bg-red-500/100 text-right pr-3 leading-[56px] text-white">
      <div className="absolute bottom-2 left-7 2xl:left-[15%] w-20 h-20  lg:block motion-safe:animate-bounce">
        <img src={pokeball} alt="Poke Ball" />
      </div>
      ©2022 thein.than.hein.th@gmail.com
    </footer>
  );
};

export default Footer;
