import React from "react";
import { Montserrat } from "next/font/google";
import Navbar from "../components/navbar/index";
import Footer from "../components/footer/index";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

const Nosotros = () => {
  return (
    <>
      <div
        className={`${montserrat.className} antialiased text-center text-xl`}
      >
        <div className="bg-slate-600 col-span-2">
          <Navbar />
        </div>
        <div className="col-span-1">
          <Navbar />
        </div>

        <div className="col-span-3">
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
              Nuestros valores
            </h1>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4 my-4 p-6">
          <div className="col-span-2 sm:col-span-2">
            <h2 className="text-start text-4xl font-bold text-black">
              Desarrolladores, diseñadores y gestores de proyectos
              especializados en tecnología e innovación
            </h2>
            <p className="text-start p-2 leading-loose text-xl text-slate-500">
              Nuestro compromiso es poner en valor plataformas escalables para
              multiples plataformas, mejorando su calidad y disponibilidad
              permanente, mediante innovación, constante asesoría y comunicación
              con vos y estrategias que aumenten valor a tu negocio.
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1 my-2">
            <div className="flex flex-col">
              <Image
                src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1707882898/idea-and-creativity-symbol-of-a-lightbulb-svgrepo-com_pf0tag.svg"
                alt="icon1"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-center text-2xl font-bold text-black my-2">
                Ideas innovadoras
              </h3>
              <p className="text-center sm:text-start leading-relaxed text-slate-500">
                Jira, Google Meet, Figma, Excalidraw, son algunas de nuestras
                herramientas para planificar y diseñar nuestros proyectos y
                mantener una comunicación fluida con nuestros clientes
              </p>
            </div>
          </div>
          <div className="col-span-1 sm:col-span-1 ms-9 w-full my-3">
            <div className="flex flex-col">
              <Image
                src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1707882657/call-center-2-svgrepo-com_r6dedv.svg"
                alt="icon1"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-center text-2xl font-bold text-black my-2">
                Enfoque al cliente
              </h3>
              <p className="text-center sm:text-start leading-relaxed text-slate-500">
                Nos comprometemos al máximo para la satisfacción de nuestros
                servicios, como así también la asesoría para la administración
                óptima de los productos
              </p>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 my-20 p-6">
          <div className="col-span-1 p-6">
            <div className="flex flex-col">
              <Image
                src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1707879254/pexels-fauxels-3182774_kcflk9.jpg"
                alt="icon1"
                width={1000}
                height={1000}
                className="mx-auto rounded-md"
              />
            </div>
          </div>
          <div className="col-span-1 p-2">
            <div className="flex flex-col">
              <h2 className="text-center sm:text-start text-5xl font-bold text-black my-2">
                Nuestro Staff de Consultores
              </h2>
              <p className="text-center sm:text-start text-slate-500 leading-loose">
                Somos un equipo multidisciplinario y comprometido. Forman parte
                de 4Coders: desarrolladores senior y semi-senior certificados en
                sus áreas, diseñadores UX/UI, contamos con community manager y
                SCRUM master. Todo este potencial reunido, te ayudará a cambiar
                tu organización incorporando procesos tecnológicos innovadores y
                acompañando en todo momento en la gestión del cambio del nucleo
                de tu negocio.
              </p>
              <button className="btn btn-active btn-primary my-16 h-24 text-base">
                Tenes una consulta? contactanos por correo electrónico o hace
                click acá.
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Nosotros;
