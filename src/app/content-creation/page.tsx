import React from "react";
import Navbar from "../components/navbar/index";
import Footer from "../components/footer/index";
import Image from "next/image";

const ContentCreation = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#161C2D" }}>
        {" "}
        <Navbar />
      </div>
      <h1 className="my-20 text-2xl">Creación de contenido</h1>
      <h2 className="my-20">akakakakakakakaka</h2>
      <p className="my-20">dsdsd</p>
      <Image
        src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1707837746/unnamed_z4qihc.jpg"
        alt="proximamente"
        width={700}
        height={500}
        className="mx-auto"
      />
      <Footer />
    </div>
  );
};

export default ContentCreation;
