import React from "react";
import Image from "next/image";

type CircleProps = {
  color: string;
  number: number;
};

function Circle({ color, number }: CircleProps) {
  const circleStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    display: "inline-block",
    textAlign: "center" as const,
    lineHeight: "100px",
    fontWeight: "bold",
    fontSize: "32px",
    backgroundColor: color,
    color: "white",
  };

  return (
    <div className="circle mx-auto mb-5" style={circleStyle}>
      {number}
    </div>
  );
}

const Metricas = () => {
  return (
    <div className="w-3/4 mx-auto">
      <hr />
      <h1 className="text-5xl font-bold mt-28">Métricas en tiempo real</h1>
      <h3 className="mt-10 text-2xl text-slate-500 w-1/2 mx-auto my-12">
        Gracias a nuestra biblioteca de tecnologías vas a acceder a la
        información de los movimientos en el sitio minuto a minuto.
      </h3>
      <div className="flex justify-around">
        <div className="mx-auto my-8 text-center">
          <Circle color="red" number={1} />
          <p className="font-semibold text-2xl my-5">Profesionalidad</p>
          <p className="text-lg w-96 text-slate-500">
            Somos una consultora Argentina, líder en brindar soluciones
            informáticas para empresas que ofrece servicios profesionales
            variados, especializándonos en la consultoría IT entre otros
            servicios.
          </p>
        </div>
        <hr className="my-auto" />
        <div className="mx-auto my-8 text-center">
          <Circle color="green" number={2} />
          <p className="font-semibold text-2xl my-5">Procesos personalizados</p>
          <p className="text-lg w-96 text-slate-500">
            Cada empresa habita un universo diferente, por eso la propuesta del
            4Coders está cien por ciento orientada hacia las necesidades y
            funcionamientos internos del cliente.
          </p>
        </div>
        <hr className="my-auto" />
        <div className="mx-auto my-8 text-center">
          <Circle color="blue" number={3} />
          <p className="font-semibold text-2xl my-5">
            Cronograma Predeterminado
          </p>
          <p className="text-lg w-96 text-slate-500">
            Sistema de entregas planificadas mediante SCRUM con sprints
            quincenales para brindar un seguimiento permanente desde el inicio
            hasta el final del diseño y desarrollo
          </p>
        </div>
      </div>
      <Image
        src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1707700665/Captura_de_pantalla__1316_-transformed_gldi2g.png"
        alt="coreui"
        width={700}
        height={400}
        className="mx-auto my-16"
      />
    </div>
  );
};

export default Metricas;
