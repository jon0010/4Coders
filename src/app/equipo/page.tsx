import React from "react";
import Navbar from "../components/navbar/index";
import Footer from "../components/footer/index";
import { Montserrat } from "next/font/google";
import ImageBubbles from "../components/ImageBubbles";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

const Equipo = () => {
  return (
    <div className={`${montserrat.className} antialiased text-center text-xl`}>
      <div className="bg-slate-600 col-span-2">
        <Navbar />
      </div>
      <div className="col-span-1">
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
          Nuestro equipo
        </h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 my-20 p-6">
        <div className="col-span-1 p-6">
          <div className="flex flex-col">
            <Image
              src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1708193330/mision-valores-vision_mmn9lm.webp"
              alt="icon1"
              width={1000}
              height={1000}
              className="mx-auto rounded-md"
            />
          </div>
        </div>
        <div className="col-span-1 p-2">
          <div className="flex flex-col">
            <h2 className="text-center sm:text-start text-4xl font-bold text-black my-2">
              La cultura de colaborar mutuamente
            </h2>
            <p className="text-center sm:text-start text-slate-500 leading-loose">
              Desde que empezamos en 2020, nuestro objetivo fue claro: colaborar
              con esas empresas que tienen problemas para costear un equipo de
              desarrollo propio o inaugurar un area enfocada 100% a este fin.
              Ante la inquietud de emprendedores que quieren adaptarse a la era
              digital ofrecemos nuestras soluciones que mas alla de entregar un
              producto, es asesorar y orientar al cliente para que tenga un
              proceso de adaptación mucho mas confortable y con la tranquilidad
              de tenernos de su lado. Nuestra relacion con quienes confían dia a
              dia en nosotros sigue mas alla de los 6 meses de soporte técnico,
              siempre habra una respuesta ante cualquier duda y una alegría al
              saber que lograron el exito al insertarse a un mercado cambiante y
              lleno de desafíos. Desde nuestro lugar, el norte a seguír sera
              siempre el mismo: nuestro objetivo, es que vos cumplas los tuyos.
            </p>
            <h2 className="font-bold w-3/4 text-end my-8">4Coders TEAM</h2>
          </div>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-black my-12">Staff 4Coders</h2>
      <ImageBubbles />
      <hr />
      <div className="col-span-1 p-2">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-5/6 mb-8 sm:mb-0 sm:mr-8 p-9">
            <h2 className="text-center sm:text-start text-4xl font-bold text-black my-2">
              Nuestros valores
            </h2>
            <ul className="text-start mx-auto leading-[3.5rem] text-slate-500 p-3">
              <li>
                <strong className="text-teal-500">Compromiso:</strong> Dando un
                seguimiento a cada feature y/o necesidad del cliente que surja
                en el proceso de planificación, diseño o desarrollo.
              </li>
              <li>
                <strong className="text-teal-500">Honestidad:</strong> El primer
                paso para entablar una relación óptima cliente/equipo.
              </li>
              <li>
                <strong className="text-teal-500">Motivación:</strong> Es lo que
                nos mueve día a día y lo que transmitimos en las reuniones e
                ideas que plasmamos.
              </li>
              <li>
                <strong className="text-teal-500">Esfuerzo:</strong> Es lo que
                nos permite llevar a cabo todos tus objetivos y así cumplir el
                nuestro.
              </li>
              <li>
                <strong className="text-teal-500">Innovación:</strong> Mediante
                brainstorming y manteniéndonos a la vanguardia de las últimas
                tecnologías.
              </li>
              <li>
                <strong className="text-teal-500">Pasión:</strong> Siempre
                presente en nuestro desempeño y visible en los resultados.
              </li>
              <li>
                <strong className="text-teal-500">Flexibilidad:</strong> Siempre
                llevando tus ideas a un marco realizable y tangible.
              </li>
              <li>
                <strong className="text-teal-500">Responsabilidad:</strong>{" "}
                Desde la reunión KickOff dejamos clara nuestra manera de cumplir
                con los plazos y calidad del producto.
              </li>
            </ul>
          </div>
          <div className="flex-row justify-center w-full sm:w-6/12">
            <Image
              src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1707879253/pexels-photo-1181673_uwpkxz.jpg"
              alt="imgvalores"
              width={400}
              height={300}
              className="rounded-md border"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Equipo;
