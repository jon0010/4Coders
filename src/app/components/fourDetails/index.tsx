import React from "react";
import Image from "next/image";

const FourDetails = () => {
  return (
    <div className="mx-auto bg-slate-200">
      <p className="font-bold text-center text-base text-orange-500 py-16">
        ¿POR QUÉ ELEGIRNOS?
      </p>
      <h1 className="text-4xl font-bold mx-auto p-2">
        Nuestra manera de trabajar codo a codo con el cliente nos destaca.
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 justify-center w-full mx-auto mt-12 p-5">
        <div className="flex p-2">
          <div className="bg-white rounded-lg shadow-md p-4 w-full">
            <div className="flex items-center">
              <div className="mr-4">
                <Image
                  src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1707702983/wedding-planner-to-guide-female-svgrepo-com_atlaqp.svg"
                  alt="Imagen 1"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <div>
                <h5 className="text-xl font-bold mt-4 text-start">
                  Gestor de proyectos especializado
                </h5>
                <p className="text-sm font-medium text-slate-400 mt-2 text-start">
                  Vas a contar con la asesoría del equipo, que te va a mostrar
                  la manera mas optima de llegar a la visión que tengas del
                  producto final.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex p-2">
          <div className="bg-white rounded-lg shadow-md p-4 w-full">
            <div className="flex items-center">
              <div className="mr-4">
                <Image
                  src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1707703043/tasks-list-svgrepo-com_xuy1vw.svg"
                  alt="Imagen 2"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <div>
                <h5 className="text-xl font-bold mt-4 text-start">
                  Tareas organizadas
                </h5>
                <p className="text-sm font-medium text-slate-400 mt-2 text-start">
                  Usamos jira para una construccion sistematica del proyecto y
                  reuniones diarias para un seguimiento constante y actualizado
                  de los avances.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex p-2">
          <div className="bg-white rounded-lg shadow-md p-4 w-full">
            <div className="flex items-center">
              <div className="mr-4">
                <Image
                  src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1707703136/dialog-round-svgrepo-com_ngqhvc.svg"
                  alt="Imagen 3"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <div>
                <h5 className="text-xl font-bold mt-4 text-start">
                  Reuniones SCRUM
                </h5>
                <p className="text-sm font-medium text-slate-400 mt-2 text-start">
                  Gracias a la organización del trabajo en un entorno ágil vas a
                  tener esquematizado el proyecto y comunicación constante con
                  el equipo
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex p-2">
          <div className="bg-white rounded-lg shadow-md p-4 w-full">
            <div className="flex items-center">
              <div className="mr-4">
                <Image
                  src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1707703257/design-svgrepo-com_phr40d.svg"
                  alt="Imagen 4"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <div>
                <h5 className="text-xl font-bold mt-4 text-start">
                  Diseño Innovador
                </h5>
                <p className="text-sm font-medium text-slate-400 mt-2 text-start">
                  Nuestros diseñadores transforman tus ideas en interfaces
                  intuitivas y experiencias de usuario atractivas. Utilizamos
                  programas de diseño grafico de Adobe Creative Cloud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourDetails;
