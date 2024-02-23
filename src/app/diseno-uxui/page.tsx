import React from "react";
import Navbar from "../components/navbar/index";
import Footer from "../components/footer/index";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import DiseñoUXUICard from "../components/diseñoUXUIcard/index";
import { FaFigma } from "react-icons/fa";
import { SiAdobecreativecloud, SiSurveymonkey } from "react-icons/si";
import { DiResponsive } from "react-icons/di";

const montserrat = Montserrat({ subsets: ["latin"] });

const DiseñoUXUI = () => {
  return (
    <div className={`${montserrat.className} antialiased text-center text-sm lg:text-lg`}>
      <div style={{ backgroundColor: "#161C2D" }}>
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
          Diseño UX UI
        </h1>
      </div>
      <div className="col-span-1 p-8">
        <div className="flex flex-col">
          <h2 className="text-center sm:text-start text-4xl font-bold text-black my-2">
            Un enfoque orientado al usuario
          </h2>
          <p className="text-center sm:text-start text-slate-500 leading-loose">
            En 4coders contamos con diseñadores especializados en design
            thinking y pruebas de usabilidad, donde nos aseguramos que cada
            elemento de la interfaz se ubique en el lugar correcto. Tambien
            contamos con Web Accessibility Designer y Web Content Designer lo
            cual asegura que el contenido de los sitios esten enfocados al
            publico objetivo y sea fácil navegar entre las distintas secciones
            teniendo en cuenta que a veces toca organizar sub-layout que tienen
            mas secciones en el interior, pues esto no es un problema para
            nosotros.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center sm:flex-row sm:space-x-20 w-full">
          <DiseñoUXUICard
            title="FIGMA"
            description="Todo lo que va a ser creado nace en un prototipo diseñado en figma, una herramienta muy poderosa para llevar lo que imagines a algo tangible que se pueda analizar y buscar oportunidades de mejora."
            icon={<FaFigma className="text-5xl font-bold self-end" />}
          />
          <DiseñoUXUICard
            title="ADOBE CREATIVE CLOUD"
            description="Todo un ecosistema de herramientas de diseño que utilizamos para crear contenido original para tu sitio, desde videos con adobe premiere, animaciones con after effects y creaciones con photoshop son algunos de los recursos que utilizamos para una interfaz de usuario atratciva."
            icon={
              <SiAdobecreativecloud className="text-5xl font-bold self-end" />
            }
          />
        </div>
        <div className="flex flex-col justify-center sm:flex-row sm:space-x-20 w-full">
          <DiseñoUXUICard
            title="RESPONSIVELY APP"
            description="Desde pantallas de dispositivos móviles, pasando por tablets, monitores de varias medidas y smartTVs, chequeamos las vista de textos y distribucion de elementos para una adaptación óptima a todos estos dispositivos."
            icon={
              <DiResponsive
                className="text-5xl font-bold self-end"
                style={{ fontSize: "5em" }}
              />
            }
          />
          <DiseñoUXUICard
            title="MONKEY SURVEY"
            description="Todo un ecosistema de encuesta de satisfacción a clientes y recopilación de métricas que te ayuden a impulsar tu negocio, el kit de herramientas de survey monkey estan a disposición para ser implementadas."
            icon={
              <SiSurveymonkey
                className="text-5xl font-bold self-end"
                style={{ fontSize: "3.5em" }}
              />
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DiseñoUXUI;
