import React, { ReactNode } from "react";
import "./pricecard.css";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

interface PriceCardProps {
  title: string;
  price: { amount: string; unit: string };
  description: { text: string; icon: ReactNode }[];
  offer: string;
  ribbon: string;
}

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  price,
  description,
  offer,
  ribbon,
}) => {
  return (
    <div className="containerPriceCard">
      <p className="title text-3xl">{title}</p>
      <p className="price">
        {price.amount}
        <span>{price.unit}</span>
      </p>
      <div className="description">
        <ul>
          {description.map((item, index) => (
            <li key={index} className="flex items-top">
              <FaCheck className="check-icon pt-1 ms-1" />
              <span className="pb-2 text-md ms-1 text-start">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <b className="offer">{offer}</b>
      <Link href="/contacto">
        <button className="subscribe-button">Contactar</button>
      </Link>
      <div className="ribbon-wrap">
        <div className="ribbon">{ribbon}</div>
      </div>
    </div>
  );
};

export default PriceCard;
