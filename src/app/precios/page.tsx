import React from "react";
import Navbar from "../components/navbar/index";
import Footer from "../components/footer/index";
import PriceCard from "../components/priceCard";
import { FaCheck } from "react-icons/fa";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const Precios = () => {
  return (
    <div
      className={`${montserrat.className} antialiased flex flex-col items-center justify-center min-h-screen`}
    >
      <div style={{ backgroundColor: "#161C2D" }}>
        <Navbar />
      </div>
      <div style={{ backgroundColor: "#40b3a2" }} className="w-full">
        <h1 className="relative mt-20 text-2xl mx-auto text-white font-semibold text-center">
          PLANES Y PRECIOS
        </h1>
        <h2 className="my-10 text-white sm:text-5xl text-3xl sm:w-1/2 text-center mx-auto">
          Encontrá el Plan Perfecto para vos, Precios Atractivos para Cada
          Presupuesto
        </h2>
        <p className="mb-10 text-white text-center text-2xl">
          Elegí el mejor plan para tu negocio. Cambia de plan a medida que
          crezcas.
        </p>
        <p className="text-center mx-auto text-xs text-white mb-8 w-96 px-7">
          Los precios son estimativos, todos los casos de proyecto son
          distintos, por eso te recomiendo consultarnos tu idea asi te podemos
          facilitar un presupuesto a medida
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 my-12">
        <PriceCard
          title="Plan custom"
          price={{ amount: "A convenir", unit: "" }}
          description={[
            {
              text: "Contactanos y compartinos tu idea",
              icon: <FaCheck />,
            },
            {
              text: "Estas a un paso de materializar tu proyecto",
              icon: <FaCheck />,
            },
          ]}
          offer=""
          ribbon="personalizado"
        />
        <PriceCard
          title="Business"
          price={{ amount: "$650", unit: "/usd" }}
          description={[
            {
              text: "Sección principal",
              icon: <FaCheck />,
            },
            {
              text: "Indexación SEO",
              icon: <FaCheck />,
            },
            {
              text: "Hasta 4 vistas interactivas",
              icon: <FaCheck />,
            },
            {
              text: "Footer con redes sociales",
              icon: <FaCheck />,
            },
            {
              text: "Alojamiento y SSL",
              icon: <FaCheck />,
            },
          ]}
          offer=""
          ribbon="ideal comercios"
        />
        <PriceCard
          title="Premium"
          price={{ amount: "$950", unit: "/usd" }}
          description={[
            {
              text: "Lo mencionado en la sección business mas...",
              icon: <FaCheck />,
            },
            {
              text: "Hasta 6 vistas interactivas",
              icon: <FaCheck />,
            },
            {
              text: "Integracíon de APIs en next server",
              icon: <FaCheck />,
            },
            {
              text: "Header con video",
              icon: <FaCheck />,
            },
            {
              text: "Metadatos para compartir la web",
              icon: <FaCheck />,
            },
            {
              text: "Sistema de categorías, filtrado y ordenamiento",
              icon: <FaCheck />,
            },
          ]}
          offer="¡Oferta especial! Obtén un descuento del 10% hasta el 01 de marzo de 2024."
          ribbon="SPAs y landing"
        />
        <PriceCard
          title="Empresarial"
          price={{ amount: "$1500", unit: "/usd" }}
          description={[
            {
              text: "Lo mencionado en la sección premium mas...",
              icon: <FaCheck />,
            },
            {
              text: "Interfaz Multi-idiomas",
              icon: <FaCheck />,
            },
            {
              text: "Modo oscuro",
              icon: <FaCheck />,
            },
            {
              text: "Chatbot con integración de IA",
              icon: <FaCheck />,
            },
            {
              text: "Implementación de newsletter",
              icon: <FaCheck />,
            },
            {
              text: "Comentarios y valoraciones",
              icon: <FaCheck />,
            },
            {
              text: "Creación de mails corporativos",
              icon: <FaCheck />,
            },
            {
              text: "Soporte técnico de 6 meses",
              icon: <FaCheck />,
            },
            {
              text: "Backend preparado para escalar con microservicios",
              icon: <FaCheck />,
            },
          ]}
          offer="¡Oferta especial! Obtén un descuento del 15% hasta el 01 de marzo de 2024."
          ribbon="precio especial"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Precios;
