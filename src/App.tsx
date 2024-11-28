import Footer from "./components/Footer";
import Header from "./components/Header";
import LineUp from "./components/LineUp";
import Sponsors from "./components/Sponsors";
import Ubication from "./components/Ubication";

function App() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-black to-black2 h-[100%] pb-8">
        <p className=" font-ubuntu text-black2 text-xl font-medium py-4 w-[90vw] max-w-[900px] m-auto text-justify">
          {" "}
          <span className=" font-extrabold text-pink">Oleada Psycho SIN LAZY</span> es
          un festival que organizamos todos los veranos, desde el 2018, donde en{" "}
          <span className=" font-extrabold ">Mar del Plata</span> recibimos
          bandas y público, de diferentes puntos de Argentina y del exterior, de
          los estilos{" "}
          <span className="  text-pink">
            Rockabilly, SurfRock, Garage, Swing y Pyschobilly
          </span>
          . El festival se caracteriza por ser un fin de semana de verano,
          descontracturado, donde gente de toda Argentina amante de la
          contracultura Rocker, PinUp, Custom, del mundo del Tatuaje y de los
          HotRod, tiene la excusa perfecta para venir a la ciudad y encontrarse.
        </p>

        <LineUp />
        <Ubication />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}

export default App;
