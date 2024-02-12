import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-4 gap-2 p-8 justify-items-center"
      style={{ backgroundColor: "#161C2D" }}
    >
      <div style={{ padding: "25px" }}>
        <h1 className="text-4xl font-bold text-white mb-12 text-start">
          4Coders
        </h1>
        <p className="text-lg mt-2 text-start text-white my-20">
          Descubrí todo el potencial de tu negocio con nuestro equipo.
        </p>
        <div className="flex text-white">
          <FaFacebookSquare className="mr-2" />
          <FaInstagramSquare className="mr-2" />
          <FaLinkedin className="mr-2" />
          <FaSquareXTwitter className="mr-2" />
        </div>
      </div>
      <div
        className="text-white mt-16"
        style={{ paddingLeft: "15px", paddingRight: "15px" }}
      >
        <h3 className="text-lg mt-2 text-start text-white font-bold">
          Contacta con nosotros
        </h3>
        <ul className="text-lg mt-2 text-start text-white my-20">
          <li>mail1@gmail.com</li>
          <li>mail2@gmail.com</li>
          <li>mail3@gmail.com</li>
          <li>mail4@gmail.com</li>
          <li>mail5@gmail.com</li>
        </ul>
      </div>
      <div
        className="text-white mt-16"
        style={{ paddingLeft: "15px", paddingRight: "110px" }}
      >
        <h3 className="text-lg mt-2 text-start text-white font-bold">
          Productos
        </h3>
        <ul className="text-lg mt-2 text-start text-white my-20">
          <li>Precios</li>
          <li>Soporte</li>
        </ul>
      </div>
      <div
        className="text-white mt-16"
        style={{ paddingLeft: "15px", paddingRight: "15px" }}
      >
        <h3 className="text-lg mt-2 text-start text-white font-bold">
          Servicios
        </h3>
        <ul className="text-lg mt-2 text-start text-white my-20">
          <li>Marketing Digital</li>
          <li>Creación de contenido</li>
          <li>Index SEO</li>
          <li>Diseño UX/UI</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
