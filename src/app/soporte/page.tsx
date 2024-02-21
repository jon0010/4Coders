import React from "react";
import Navbar from "../components/navbar/index";
import Footer from "../components/footer/index";
import Image from "next/image";
import CardSupport from "../components/cardSupport";
import { Montserrat } from "next/font/google";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";

const montserrat = Montserrat({ subsets: ["latin"] });

const Soporte = () => {
  return (
    <div className={`${montserrat.className} antialiased text-center`}>
      <div style={{ backgroundColor: "#161C2D" }}>
        {" "}
        <Navbar />
      </div>
      <div className="relative h-80 overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1707881245/image_zbfxce.jpg"
          alt="proximamente"
          width={700}
          height={500}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <h1
          className="absolute inset-x-0 top-1/2 text-start p-10 text-5xl font-bold text-black"
          style={{ textShadow: "2px 2px 2px white" }}
        >
          Soporte técnico
        </h1>
      </div>
      <div className="col-span-1 p-2">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-5/6 mb-8 sm:mb-0 sm:mr-8 p-9">
            <h2 className="text-center sm:text-start text-4xl font-bold text-black my-2">
              Servicios de Soporte técnico para clientes
            </h2>
            <ul className="text-start mx-auto leading-[3.5rem] text-slate-500 p-3">
              <li>
                <strong className="text-teal-500">Clientes:</strong> Nuestro
                soporte informático para clientes incluye entre otros servicios
                una rápida respuesta ante errores inesperados, acción inmediata
                ante comportamientos no deseados, asesoría y orientación con
                respecto a dudas y consultas.
              </li>
              <li>
                <strong className="text-teal-500">Aclaraciones:</strong> Los
                planes business y premium tienen un soporte de 3 meses, el plan
                empresarial tiene soporte de 6 meses (el soporte del plan custom
                dependiendo el agregado de características y el tamaño de
                proyecto tendrá soporte de 3 o 6 meses)
              </li>
              <li>
                <strong className="text-red-500">Importante:</strong> El soporte
                técnico no incluye agregado de características extra, hacer
                upgrading de base de datos o servidores, cambiar de máquina
                virtual, cambiar alojamiento o dominio, apuntar DNS hacia otra
                dirección u otro agregado o supresión de características al
                momento de entrega, estas acciones tendrán un costo extra que se
                evaluará al momento de surgir la necesidad de agregar estos
                cambios.
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center w-full sm:w-6/12">
            <Image
              src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1708540898/depositphotos_58863235-stock-photo-electronic-technical-support-concept-spanners_t9tdew.webp"
              alt="imgvalores"
              width={700}
              height={300}
              className="rounded-md border"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:flex-row flex-col">
        <CardSupport
          logo={<IoLogoWhatsapp />}
          title="WHATSAPP"
          text1="Contactanos vía whatsapp para una atencion rápida"
          text2="Envia un mensaje con nombre de proyecto y problematica. Para clientes dentro del período de soporte técnico el tiempo de respuesta sera menor a 24hs."
          button="Contactar"
        />
        <CardSupport
          logo={<MdOutlineEmail />}
          title="E-MAIL"
          text1="Contactanos vía email para una atencion rápida"
          text2="Envia un mensaje con nombre de proyecto y problematica. Para clientes dentro del período de soporte técnico el tiempo de respuesta sera menor a 24hs."
          button="Contactar"
        />
        <CardSupport
          logo={<FaTelegramPlane />}
          title="TELEGRAM"
          text1="Contactanos vía telegram para una atencion rápida"
          text2="Envia un mensaje con nombre de proyecto y problematica. Para clientes dentro del período de soporte técnico el tiempo de respuesta sera menor a 24hs."
          button="Contactar"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Soporte;
