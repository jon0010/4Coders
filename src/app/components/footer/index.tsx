import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-4 gap-2 p-8 justify-items-center"
      style={{ backgroundColor: "#161C2D" }}
    >
      <div style={{ padding: "25px" }}>
        <Link
          href="/"
          className="text-4xl font-bold text-white mb-14 text-start"
        >
          4Coders
        </Link>
        <p className="text-lg mt-2 text-start text-white my-20 pt-6">
          Descubrí todo el potencial de tu negocio con nuestro equipo.
        </p>
        <div className="flex text-white text-4xl">
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
          <li>jonnahuel78@gmail.com</li>
          <li>alanabelpereyra322@gmail.com</li>
          <li>diana.meza@gmail.com</li>
          <li>rodriguez.ibrahin@gmail.com</li>
          <li>linovich@gmail.com</li>
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
          <li>
            <Link href="/precios">Precios</Link>
          </li>
          <li>
            <Link href="/soporte">Soporte</Link>
          </li>
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
          <li>
            <Link href="/marketing-digital">Marketing Digital</Link>
          </li>
          <li>
            <Link href="/content-creation">Creación de contenido</Link>
          </li>
          <li>
            <Link href="/index-seo">Index SEO</Link>
          </li>
          <li>
            <Link href="/diseno-uxui">Diseño UX/UI</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
