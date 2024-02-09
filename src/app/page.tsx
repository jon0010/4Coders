import { Montserrat } from "next/font/google";
import Navbar from "../app/components/navbar/index";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Home = () => {
  return (
    <main>
      <Navbar />
      <h1 className={`${montserrat.className} antialised text-center text-5xl`}>
        Simplicidad, elegancia y eficiencia. nuestra fórmula para el éxito a
        bajo costo.
      </h1>
    </main>
  );
};

export default Home;
