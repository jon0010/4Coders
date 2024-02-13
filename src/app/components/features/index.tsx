import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around bg-slate-200">
      <div className="mx-auto my-8 text-center">
        <Image
          src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1707679270/shake-hands-svgrepo-com_kbj9n4.svg"
          alt="hands"
          width={150}
          height={150}
          className="mx-auto"
        />
        <p className="font-semibold text-2xl my-5">Profesionalidad</p>
        <p className="text-lg w-96">
          Somos una consultora Argentina, líder en brindar soluciones
          informáticas para empresas que ofrece servicios profesionales
          variados, especializándonos en la consultoría IT entre otros
          servicios.
        </p>
      </div>

      <div className="mx-auto my-8 text-center">
        <Image
          src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1707679875/telephone-operator-svgrepo-com_i2l9u1.svg"
          alt="operator"
          width={150}
          height={150}
          className="mx-auto"
        />
        <p className="font-semibold text-2xl my-5">Procesos personalizados</p>
        <p className="text-lg w-96">
          Cada empresa habita un universo diferente, por eso la propuesta del
          4Coders está cien por ciento orientada hacia las necesidades y
          funcionamientos internos del cliente.
        </p>
      </div>
      <div className="mx-auto my-8 text-center">
        <Image
          src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1707680003/planning-svgrepo-com_u9ce8f.svg"
          alt="planning"
          width={150}
          height={150}
          className="mx-auto"
        />
        <p className="font-semibold text-2xl my-5">Cronograma Predeterminado</p>
        <p className="text-lg w-96">
          Sistema de entregas planificadas mediante SCRUM con sprints
          quincenales para brindar un seguimiento permanente desde el inicio
          hasta el final del diseño y desarrollo
        </p>
      </div>
    </div>
  );
};

export default Features;
