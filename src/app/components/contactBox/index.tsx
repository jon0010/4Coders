import React from "react";
import Link from "next/link";

const ContactBox = () => {
  return (
    <div className="bg-slate-200 p-6">
      <div className="flex justify-center my-12">
        <div className="max-w-6xl">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-5/6 mx-4">
              <h1 className="text-2xl font-bold text-start">
                ¿Listo para poner en marcha tu próximo proyecto?
              </h1>
              <p className="text-base mt-4 text-start w-5/6 font-medium text-slate-500">
                Te animamos a dar el primer paso hacia la transformación de tu
                negocio con nosotros. Te invitamos a aprovechar nuestras
                soluciones hoy y experimentar la diferencia por vos mismo.
                Nuestro principal objetivo es que vos cumplas los tuyos.
              </p>
            </div>
            <div className="w-full md:w-1/6 mx-4 flex justify-center items-center mt-4 md:mt-0">
              <Link href="/contacto">
                {" "}
                <button className="btn btn-primary">Comenzá tu proyecto</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
