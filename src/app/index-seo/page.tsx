import React from "react";
import Navbar from "../components/navbar/index";
import Footer from "../components/footer/index";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

const IndexSEO = () => {
  return (
    <div className={`${montserrat.className} antialiased text-center text-xl`}>
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
          className="absolute inset-x-0 top-1/2 text-start p-10 text-3xl lg:text-5xl font-bold text-black"
          style={{ textShadow: "2px 2px 2px white" }}
        >
          Posicionamiento SEO
        </h1>
      </div>
      <div className="col-span-1 p-2">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-5/6 mb-8 sm:mb-0 sm:mr-8 p-9">
            <h2 className="text-center sm:text-start text-3xl lg:text-4xl font-bold text-black my-2 p-3">
              La relación entre next.js y la optimización de motores de búsqueda
              (SEO)
            </h2>
            <p
              className="text-start text-sm lg:text-lg text-slate-500 p-3"
              style={{ lineHeight: "2rem" }}
            >
              Next.js es un framework de React que puede ofrecer varias ventajas
              para la optimización de motores de búsqueda (SEO) debido a su
              estructura y capacidades. Esto ayudara a que si buscan palabras
              relacionadas al rubro al que te dedicas, tu sitio aparezca en los
              primeros o el primer resultado de busqueda.
            </p>
            <ul
              className="text-start mx-auto text-slate-500 p-3 text-sm lg:text-lg"
              style={{ lineHeight: "2rem" }}
            >
              <li>
                <strong className="text-teal-500">
                  Renderizado del lado del servidor (SSR) y renderizado híbrido:
                </strong>{" "}
                Next.js permite el renderizado del lado del servidor (SSR) y el
                renderizado híbrido (SSG + CSR), lo que significa que las
                páginas se pueden renderizar en el servidor antes de ser
                enviadas al navegador del usuario. Esto puede mejorar la
                indexación de las páginas al proporcionar contenido
                pre-renderizado que los motores de búsqueda pueden rastrear e
                indexar fácilmente.
              </li>
              <li>
                <strong className="text-teal-500">
                  Rutas optimizadas y estructura de archivos:
                </strong>{" "}
                Next.js utiliza una estructura de carpetas basada en rutas que
                se correlaciona directamente con las URL de las páginas. Esto
                facilita la creación de una estructura de sitio bien organizada
                y fácil de entender para los motores de búsqueda, lo que puede
                mejorar la indexación y la comprensión del contenido del sitio.
              </li>
              <li>
                <strong className="text-teal-500">
                  Optimización del rendimiento:
                </strong>{" "}
                Next.js incluye funcionalidades para optimizar el rendimiento
                del sitio, como el código dividido automático, el precargado de
                rutas y el precargado de componentes. Un sitio web más rápido y
                receptivo no solo mejora la experiencia del usuario, sino que
                también puede tener un impacto positivo en el SEO, ya que Google
                considera la velocidad de carga como un factor de clasificación.
              </li>
              <li>
                <strong className="text-teal-500">Gestión de metadatos:</strong>{" "}
                Next.js facilita la configuración de metadatos importantes para
                SEO, como títulos de página, descripciones y etiquetas meta,
                tanto a nivel de página como de componente. Esto permite una
                gestión precisa y granular de los metadatos, lo que puede ayudar
                a mejorar la visibilidad en los resultados de búsqueda.
              </li>
              <li>
                <strong className="text-teal-500">Robots.txt:</strong> El
                archivo robots.txt es una herramienta importante para el SEO que
                permite a los propietarios de sitios web controlar qué partes de
                su sitio desean que los motores de búsqueda rastreen y indexen.
              </li>
            </ul>
          </div>
          <div className="flex-row justify-center w-full sm:w-6/12">
            <Image
              src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1708637744/1_AAN1UqvyX5J_iDpxZLf6eg_b0qxqc.jpg"
              alt="imgseo"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndexSEO;
