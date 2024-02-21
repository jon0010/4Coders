"use client";
import React, { ReactElement } from "react";

interface CardSupportProps {
  logo: ReactElement;
  title: string;
  text1: string;
  text2: string;
  button: string;
}

const CardSupport: React.FC<CardSupportProps> = ({
  logo,
  title,
  text1,
  text2,
  button,
}: CardSupportProps) => {
  const handleButtonClick = () => {
    switch (title.toUpperCase()) {
      case "WHATSAPP":
        window.open("https://wa.me/+5491154819253", "_blank");
        break;
      case "E-MAIL":
        window.location.href = `mailto:jonnahuel78@gmail.com?subject=Quiero%20soporte%20técnico`;
        break;
      case "TELEGRAM":
        window.open("https://t.me/jonnahuel", "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <div className="m-12 bg-teal-500 max-w-[300px] rounded-xl hover:bg-teal-600 hover:scale-110 duration-700 p-5">
      <figure className="w-10 h-10 p-2 rounded-md" style={{ fontSize: "25px" }}>
        {logo}
      </figure>
      <p className="py-2 text-white font-bold text-3xl">{title}</p>
      <p className="text-base leading-7 text-white font-semibold space-y-4">
        {text1}
      </p>
      <p className="text-sm leading-7 text-white space-y-4">{text2}</p>
      <div className="pt-5 pb-2 flex justify-center">
        <button className="btn btn-neutral" onClick={handleButtonClick}>
          {button}
        </button>
      </div>
    </div>
  );
};

export default CardSupport;
