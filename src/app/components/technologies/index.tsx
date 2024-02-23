"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const Technologies = () => {
  const header = [
    "FRAMEWORK DE NODE",
    "SUPERSET CON TIPADO ESTATICO",
    "FRAMEWORK FRONT-END",
    "COMPUTACION EN LA NUBE",
    "ENTORNO DE EJECUCION BACK-END",
    "INTEGRACION SQL Y NOSQL",
    "FRAMEWORK + CREACION APP MOVIL",
    "CONTENIDO ORIGINAL PERSONALIZADO",
    "MARCO DE DISEÑO UTILITY FIRST",
    "MARCO DE DESARROLLO FRONT-END",
    "BIBLIOTECA DE COMPONENTES",
    "SISTEMA DE ENCRIPTADO DE DATOS SENSIBLES",
  ];
  const technologies = [
    "Express.js",
    "TypeScript",
    "Next.js",
    "AWS",
    "Node.js",
    "Bases de datos",
    "Meteor.js",
    "Adobe Photoshop",
    "Tailwind CSS",
    "Bootstrap",
    "MaterialUI",
    "Json web token",
  ];
  const description = [
    "Marco de desarrollo backend rápido y flexible para Node.js. Es uno de los marcos web más populares y ampliamente utilizados en el ecosistema de Node.js debido a su simplicidad y versatilidad. Express.js proporciona una serie de características y herramientas que facilitan la creación de aplicaciones web y APIs robustas.",
    "TypeScript es un lenguaje de programación de código abierto desarrollado por Microsoft que se basa en JavaScript pero agrega tipos estáticos opcionales y otras características modernas. Está diseñado para el desarrollo de aplicaciones a gran escala, especialmente en entornos empresariales y proyectos complejos.",
    "Next.js es un framework de desarrollo web de código abierto basado en React que se utiliza para crear aplicaciones web modernas, rápidas y escalables. Proporciona una serie de características y funcionalidades que facilitan el desarrollo de aplicaciones web complejas y potentes.",
    "Amazon Web Services es la plataforma numero 1 de computacion en la nube. Proporciona una amplia gama de servicios de computación, almacenamiento, bases de datos, análisis, redes, aprendizaje automático, inteligencia artificial y más. Posee microservicios para multiples casos de uso.",
    "Es un entorno de ejecución del servidor que permite construir aplicaciones web y servicios escalables y de alto rendimiento. Basado en el motor de JavaScript V8 de Chrome, Node utiliza un modelo de E/S sin bloqueo y orientado a eventos que lo hace ideal para aplicaciones en tiempo real y de alto tráfico.",
    "En el proceso de planificación, dependiendo del tipo de proyecto utilizamos bases de datos como PostgreSQL, MongoDB, MySql, SQlite y otras con ORM en capa gratuita o con costos dependiendo el alcance del mismo.",
    "Es un framework de código abierto basado en JavaScript que permite crear aplicaciones web y móviles de manera eficiente y rápida. Ofrece una pila completa de tecnologías integradas, lo que facilita el desarrollo de aplicaciones de extremo a extremo con una base de código compartida.",
    "Es un software de edición de imágenes líder en la industria desarrollado por Adobe. Es ampliamente utilizado para manipular y retocar imágenes, crear gráficos y composiciones complejas, y diseñar elementos visuales para una variedad de proyectos.",
    "Es un marco de trabajo (framework) de diseño que permite construir interfaces web de manera rápida y eficiente. Tailwind CSS proporciona clases de utilidad individuales que pueden ser aplicadas directamente en el marcado HTML para estilizar los elementos.",
    "Bootstrap es un framework de diseño front-end de código abierto creado por Twitter que facilita el desarrollo de sitios web y aplicaciones web responsivas y móviles. Utiliza HTML, CSS y JavaScript para ayudar a los desarrolladores a crear interfaces web atractivas y funcionales de manera rápida y sencilla.",
    "Es una biblioteca de componentes de interfaz de usuario (UI) para React que implementa el diseño y las directrices de Material Design, un sistema de diseño desarrollado por Google. MUI proporciona una amplia gama de componentes preestilizados y listos para usar que facilita la creación de UI.",
    "jsonwebtoken es una biblioteca de Node.js que permite crear y verificar tokens de manera fácil y segura. JWT es un estándar que define un formato para la transferencia de información. Estos tokens son utilizados típicamente para autenticación y autorización.",
  ];
  const logos = [
    "https://res.cloudinary.com/dkpotpaaf/image/upload/v1708709905/node_express_ymmyt0.jpg",
    "https://res.cloudinary.com/dkpotpaaf/image/upload/v1707684655/typescript-svgrepo-com_hnubxw.svg",
    "https://res.cloudinary.com/dkpotpaaf/image/upload/v1707684733/next-js-svgrepo-com_xy1a6y.svg",
    "https://res.cloudinary.com/dkpotpaaf/image/upload/v1707684787/aws-svgrepo-com_lkuym5.svg",
    "https://res.cloudinary.com/dkpotpaaf/image/upload/v1707684830/node-js-svgrepo-com_tdb9qg.svg",
    "https://res.cloudinary.com/dkpotpaaf/image/upload/v1707687049/Captura_de_pantalla_1318_aq7udp.png",
    "https://res.cloudinary.com/dkpotpaaf/image/upload/v1707687180/0_EPvTCmVd-7sTm101_rfjbhm.png",
    "https://res.cloudinary.com/dkpotpaaf/image/upload/v1707687236/photoshop-svgrepo-com_jhwuil.svg",
    "https://res.cloudinary.com/dkpotpaaf/image/upload/v1707687282/tailwind-svgrepo-com_zoxulz.svg",
    "https://res.cloudinary.com/dkpotpaaf/image/upload/v1707687355/bootstrap-fill-svgrepo-com_wna2di.svg",
    "https://res.cloudinary.com/dkpotpaaf/image/upload/v1707687421/materialui-svgrepo-com_piemxx.svg",
    "https://res.cloudinary.com/dkpotpaaf/image/upload/v1707689524/unnamed_xnrazg.png",
  ];
  const colors = [
    "border-yellow-500 text-gray-500",
    "border-blue-900 text-blue-900",
    "border-black text-black",
    "border-orange-500 text-orange-500",
    "border-green-500 text-green-500",
    "border-blue-500 text-blue-500",
    "border-red-500 text-red-500",
    "border-indigo-900 text-indigo-900",
    "border-cyan-600 text-cyan-600",
    "border-purple-500 text-purple-500",
    "border-blue-800 text-blue-800",
    "border-violet-500 text-rose-500",
  ];
  const phrases = [
    "Framework de backend",
    "Minimiza los errores en producción en un 99%",
    "Integrado y desarrollado por vercel",
    "Proveedor N°1 del mundo en microservicios",
    "Utilizado por grandes empresas",
    "Integración de bases de datos para manejar trafico moderado y big data.",
    "Utiliza empaquetador cordova para creacion rapida de APKs para android",
    "Contenido original 100% para tu emprendimiento",
    "Compatible 100% con Next.js",
    "Responsividad y compatibilidad entre navegadores",
    "Templates listas para agregar a las interfaces",
    "Manejo de datos encriptados de extremo a extremo",
  ];
  const cardsPerPageSm = 1;
  const cardsPerPageMd = 4;
  const totalCards = technologies.length;
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderCards = () => {
    const startIndex =
      currentPage * (isMobile ? cardsPerPageSm : cardsPerPageMd);
    const endIndex = startIndex + (isMobile ? cardsPerPageSm : cardsPerPageMd);
    const visibleTechnologies = technologies.slice(startIndex, endIndex);

    return visibleTechnologies.map((tech, index) => (
      <div
        key={startIndex + index}
        className={`card border-2 mx-4 p-4 my-8 ${colors[startIndex + index]}`}
        style={{ width: "300px", height: "600px", overflow: "hidden" }}
      >
        <p className="text-xs font-bold mt-5 text-start text-black ms-4">
          {header[startIndex + index]}
        </p>
        <p className="my-3 text-start text-4xl ms-3 font-semibold">{tech}</p>
        <p className="text-base font-medium text-slate-500 text-start px-4 leading-relaxed">
          {description[startIndex + index]}
        </p>
        <div className="flex items-center justify-start">
          <Image
            className="my-6"
            src={logos[startIndex + index]}
            alt="techImage"
            width={80}
            height={80}
          />
          <div className="ml-2">
            <p className="text-sm font-bold text-black ms-4">
              {phrases[startIndex + index]}
            </p>
          </div>
        </div>
      </div>
    ));
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToNextPage = () => {
    setCurrentPage(
      (prevPage) =>
        (prevPage + 1) %
        Math.ceil(totalCards / (isMobile ? cardsPerPageSm : cardsPerPageMd))
    );
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0
        ? Math.ceil(totalCards / (isMobile ? cardsPerPageSm : cardsPerPageMd)) -
          1
        : prevPage - 1
    );
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mt-16 px-3">
        Tecnologías con las que trabajamos
      </h1>
      <h3 className="mt-10 text-xl text-slate-500 px-4">
        Todo nuestro stack tecnológico a disposición de lo que necesites
      </h3>
      <div className="flex justify-center items-center mt-6">
        <button className="me-1" onClick={goToPrevPage}>
          <BsArrowLeftSquareFill />
        </button>
        <button className="ms-1" onClick={goToNextPage}>
          <BsArrowRightSquareFill />
        </button>
      </div>
      <div className="carousel">{renderCards()}</div>
    </div>
  );
};

export default Technologies;
