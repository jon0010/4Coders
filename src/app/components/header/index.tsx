import React from "react";
import Navbar from "../navbar";

const Header = () => {
  return (
    <div className="relative z-40">
      <div className="absolute inset-x-0 top-0 flex justify-center items-center z-50">
        <Navbar />
      </div>

      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/dkpotpaaf/video/upload/v1707673767/SaveTube.io-Background_oficina_video_programci%C3%B3n-_1080p_erlsyk.mp4"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-900 opacity-50 z-0"></div>
        <div className="grid">
          <p
            className="col-span-full self-start font-bold text-center text-base md:text-lg drop-shadow-2xl mb-40"
            style={{ color: "#40b3a2" }}
          >
            MIGRACION DE EMPRENDIMIENTOS AL MUNDO DIGITAL AL ALCANCE DE TODOS
          </p>
          <p className="col-span-full z-10 font-bold text-white text-center text-xl md:text-7xl mb-40 leading-normal">
            Simplicidad, elegancia y eficiencia. nuestra fórmula para el éxito a
            bajo costo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
