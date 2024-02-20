import React from "react";
import Navbar from "../components/navbar/index";
import Footer from "../components/footer/index";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

const Contacto = () => {
  return (
    <>
      <div
        className={`${montserrat.className} antialiased relative min-h-screen flex flex-col md:flex-row justify-center items-center`}
      >
        <div className="absolute top-0 left-0 right-0">
          <Navbar />
        </div>
        <div className="text-center md:text-left md:w-1/2 p-8 z-10 leading-10 px-9">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl my-14 font-semibold">
            Contactanos
          </h1>
          <p className="mb-9 text-slate-600">
            ¡Estamos emocionados de tenerte aca! Si tenes alguna consulta sobre
            implementaciones, presupuestos o tenes una idea que queres llevar al
            mundo digital, no dudes en ponerte en contacto con nosotros. Estamos
            para ayudarte en lo que necesites. Llena el formulario a
            continuación con los detalles y nos pondremos en contacto lo antes
            posible. También podes encontrarnos en nuestras redes sociales y
            correos electronicos disponibles en el pie de página. ¡Esperamos
            saber de vos pronto!
          </p>
        </div>
        <form className="text-center md:text-left md:w-1/2 p-8 z-20">
          <div className="flex flex-col items-start gap-4">
            <label className="input input-bordered flex items-center gap-2 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="w-full"
                placeholder="Nombre o entidad"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="w-full" placeholder="Email" />
            </label>
            <textarea
              rows={8}
              className="w-full rounded-lg p-3"
              placeholder="Escribí tu consulta aca"
              style={{ border: "solid 1px #CACACA" }}
            ></textarea>
            <button className="btn btn-active btn-primary" type="submit">
              Enviar
            </button>
          </div>
        </form>
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1708452849/house-svgrepo-com_2_ysbuor.svg"
            alt="fondo"
            width={980}
            height={900}
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-70% to-gray-200" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contacto;
