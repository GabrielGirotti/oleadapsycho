import Map from "./Map";

export default function Ubication() {
  return (
    <section id="ubication" className="flex flex-col items-center mt-8 gap-4">
      <h2 className=" mt-2 border-y-4 border-yellow font-metal text-yellow py-2 px-4 text-4xl uppercase font-bold tracking-wide">
        ubicacion
      </h2>
      <div className="flex items-center flex-col lg:flex-row justify-center gap-6">
        <Map />
        <div className=" flex flex-col px-4 ">
          <h3 className=" font-ubuntu font-black lg:text-xl text-yellow ">
            Salón De Fiestas Eventos La Rosa
          </h3>
          <p className=" font-ubuntu  lg:text-lg text-white ">
            Tomás Guido 2267
          </p>
          <p className=" font-ubuntu  lg:text-base text-white ">
            Mar del Plata, Provincia de Buenos Aires, Argentina
          </p>
          <p className=" font-ubuntu font-black lg:text-xl text-yellow mt-2 ">
            23-24-25-26 de ENERO de 2025
          </p>
        </div>
      </div>
    </section>
  );
}
