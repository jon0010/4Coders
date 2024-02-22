"use client";
import React, { ReactElement, useState } from "react";

interface DiseñoUXUICardProps {
  title: string;
  description: string;
  icon: ReactElement;
}

const DiseñoUXUICard: React.FC<DiseñoUXUICardProps> = ({
  title,
  description,
  icon,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    switch (title) {
      case "FIGMA":
        window.open("https://www.figma.com/", "_blank");
        break;
      case "ADOBE CREATIVE CLOUD":
        window.open("https://www.adobe.com/creativecloud.html", "_blank");
        break;
      case "RESPONSIVELY APP":
        window.open("https://responsively.app/", "_blank");
        break;
      case "MONKEY SURVEY":
        window.open("https://www.surveymonkey.com/", "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="service-card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#3ca597] my-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      role="button"
    >
      <svg
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="#000000"
        fill="none"
        viewBox="0 0 24 24"
        className={`text-5xl h-12 w-12 stroke-black group-hover:stroke-white ${
          isHovered ? "stroke-white" : ""
        }`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
        <line y2="21" x2="16" y1="21" x1="8"></line>
        <line y2="21" x2="12" y1="17" x1="12"></line>
      </svg>
      <p
        className={`font-bold text-2xl group-hover:text-white text-black/80 ${
          isHovered ? "text-white" : ""
        }`}
      >
        {title}
      </p>
      <p
        className={`text-black group-hover:text-white text-sm text-start ${
          isHovered ? "text-white" : ""
        }`}
      >
        {description}
      </p>
      {icon && (
        <div className={`${isHovered ? "text-white" : "text-black"} self-end`}>
          {icon}
        </div>
      )}
    </div>
  );
};

export default DiseñoUXUICard;
