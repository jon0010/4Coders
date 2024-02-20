import React from "react";
import Image from "next/image";

const images = [
  {
    src: "https://res.cloudinary.com/dkpotpaaf/image/upload/v1708189750/1_fsure7.jpg",
    phrase:
      "<strong>Alan Abel Pereyra</strong><br/>full stack developer<br/>Web Accessibility Designer<br/>Web Content Designer",
  },
  {
    src: "https://res.cloudinary.com/dkpotpaaf/image/upload/v1708189749/chachi_idyxmm.jpg",
    phrase:
      "<strong>Ibrahin Rodriguez</strong><br/>Senior full stack developer<br/>Product Owner<br/>Mobile app developer",
  },
  {
    src: "https://res.cloudinary.com/dkpotpaaf/image/upload/v1708189750/jon_kjswyq.png",
    phrase:
      "<strong>Jon Nahuel Pereyra</strong><br/>Full stack developer<br/>Systems Integration Specialist<br/>Scrum master",
  },
  {
    src: "https://res.cloudinary.com/dkpotpaaf/image/upload/v1708190171/dianilla_2_w7sot6.jpg",
    phrase:
      "<strong>Front end developer</strong><br/>Marketing Head<br/>Community manager",
  },
  {
    src: "https://res.cloudinary.com/dkpotpaaf/image/upload/v1708190709/WhatsApp_Image_2024-02-17_at_14.17.15-photoaidcom-2x-ai-zoom-removebg-preview_n2wovq.jpg",
    phrase:
      "<strong>Lino Gabriel Ramirez</strong><br/>Full stack developer<br/>UI Engineer<br/>UX Designer",
  },
];

const ImageBubbles = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start justify-center">
      {images.map((item, index) => (
        <div key={index} className="relative mb-6 sm:mb-0">
          <div
            className={`rounded-full overflow-hidden border-4 mx-auto me-3 ${getBorderColor(
              index
            )}`}
            style={{ width: "300px", height: "260px" }}
          >
            <Image
              src={item.src}
              alt="dev"
              width={300}
              height={300}
              objectFit="cover"
              className="h-70"
            />
          </div>
          <div className="bottom-0 left-0 w-full bg-white my-2">
            <p
              className="text-center"
              dangerouslySetInnerHTML={{ __html: item.phrase }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const getBorderColor = (index: number) => {
  const colors = [
    "border-green-500",
    "border-green-500",
    "border-green-500",
    "border-green-500",
    "border-green-500",
  ];
  return colors[index % colors.length];
};

export default ImageBubbles;
