import { useState, Suspense, lazy } from "react";
const Design = lazy(() => import("./Design"));
const NavMobile = lazy(() => import("./NavMobile"));

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header className="overflow-x-hidden flex flex-col items-center bg-black">
      <h1 className="hidden">Oleada Psycho Festival Psychobilly</h1>
      <Suspense>
        <Design />
      </Suspense>

      <h2 className="font-medium font-ubuntu absolute top-6 md:hidden">
        Fernet Killer Crew presenta:
      </h2>
      <button
        className=" font-ubuntu font-black text-3xl text-white cursor-pointer absolute right-6 top-4 md:hidden"
        onClick={handleOpen}
      >
        <img src="/burger.png" alt="burger button" className="w-10" />
      </button>

      {/* ================================= NAV MOBILE ================================= */}

      <Suspense>
        <NavMobile handleOpen={handleOpen} open={open} />
      </Suspense>

      {/* ================================= NAV DESKTOP ================================= */}

      <nav className="hidden md:flex font-ubuntu font-black text-lg  text-pink uppercase  gap-16 absolute top-0 h-16 items-center justify-center">
        <a
          href="/#lineup"
          className="hover:bg-gradient-to-b from-yellow h-[100%] px-4 cursor-pointer flex flex-col items-center justify-center"
        >
          LineUp
        </a>
        <a
          href="/#ubication"
          className=" hover:bg-gradient-to-b from-yellow h-[100%] px-4 cursor-pointer flex flex-col items-center justify-center"
        >
          Ubicacion
        </a>
        <a
          href="/#sponsors"
          className=" hover:bg-gradient-to-b from-yellow h-[100%] px-4 cursor-pointer flex flex-col items-center justify-center"
        >
          Sponsors
        </a>
      </nav>
      <img
        src="/logov.png"
        alt="Oleada Psycho Logo"
        className=" w-[80vw] max-w-[450px] absolute top-32 lg:top-12"
      />
      <h2 className=" [text-shadow:_0_2px_4px_black] mt-2 font-ubuntu font-black text-2xl lg:text-3xl text-white absolute top-[480px] sm:top-[580px] lg:top-[530px]">
        23-24-25-26 de ENERO
      </h2>
      <h2 className=" [text-shadow:_0_4px_8px_black] mt-2 font-ubuntu font-black text-2xl lg:text-3xl text-white absolute top-[480px] sm:top-[580px] lg:top-[530px]">
        23-24-25-26 de ENERO
      </h2>

      <a
        className=" mt-2 max-w-[80vw] font-ubuntu font-black text-lg lg:text-xl px-4 py-2 lg:px-6 lg:py-4  text-white bg-pink absolute top-[530px] lg:top-[580px] sm:top-[620px] duration-300 rounded-2xl hover:text-black2 hover:bg-yellow"
        href="https://articket.com.ar/OLEADA-PSYCHO-ABONO-X-LOS-TRES-DIAS/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="uppercase text-center">
          ¡Conseguí tu combo con descuento!
        </p>
      </a>
    </header>
  );
}
