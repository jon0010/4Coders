import { Montserrat } from "next/font/google";
import Header from "../app/components/header/index";
import Features from "../app/components/features/index";
import Technologies from "../app/components/technologies/index";
import Metricas from "./components/metricas/index";
import FourDetails from "./components/fourDetails";
import ContactBox from "./components/contactBox";
import Footer from "./components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className={`${montserrat.className} antialised text-center text-5xl`}>
      <Header />
      <Features />
      <Technologies />
      <Metricas />
      <FourDetails />
      <ContactBox />
      <Footer />
    </main>
  );
};

export default Home;
