import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header className="overflow-x-hidden flex flex-col items-center bg-black">
      <h1 className="hidden">Oleada Psycho Festival Psychobilly</h1>
      <div className="bg-[url('/design/bg-design.png')] w-[1280px] h-[720px]">
        <img src="/design/design.png" alt="Frame" className="absolute top-0 " />
      </div>
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

      <nav
        className={`bg-gradient-to-b from-black to-black2 w-[100vw] h-[100vh] lg:hidden z-30 fixed ${
          open === false ? "-top-[1100px]" : "top-0"
        } duration-500 overflow-hidden font-ubuntu font-black text-lg  text-yellow uppercase flex flex-col `}
      >
        <button
          className=" font-ubuntu font-black text-3xl text-white cursor-pointer absolute right-6 top-6"
          onClick={handleOpen}
        >
          <img src="/close.png" alt="close button" className="w-8" />
        </button>
        <img
          src="/logov.png"
          alt="Oleada Psycho Logo"
          className="p-4 w-[80vw] mx-auto"
        />
        <a
          href="/#lineup"
          onClick={handleOpen}
          className=" mt-4 hover:bg-gradient-to-b from-yellow/80 w-[100%] py-4 cursor-pointer flex flex-col items-center justify-center"
        >
          LineUp
        </a>
        <a
          href="/#ubication"
          onClick={handleOpen}
          className=" hover:bg-gradient-to-b from-yellow/80 w-[100%] py-4 cursor-pointer flex flex-col items-center justify-center"
        >
          Ubicacion
        </a>
        <a
          href="/#sponsors"
          onClick={handleOpen}
          className=" hover:bg-gradient-to-b from-yellow/80 w-[100%] py-4 cursor-pointer flex flex-col items-center justify-center"
        >
          Sponsors
        </a>
        <ul className=" font-ubuntu   text-yellow  flex items-center justify-center gap-6 mt-8">
          <a
            className="w-8 cursor-pointer hover:scale-105 duration-300"
            href="https://www.youtube.com/@oleadapsycho2650"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/yt.svg"
              alt="Youtube"
              className=" text-yellow to-yellow"
            />
          </a>
          <a
            className="w-8 cursor-pointer hover:scale-105 duration-300 "
            href="https://open.spotify.com/playlist/3hbOyjh00ZpFXCtF8tAR39?si=eb80e363c23c468f&nd=1&dlsi=20da4723ec8c488e"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/spotify.svg"
              alt="Spotify"
              className=" text-yellow to-yellow"
            />
          </a>
          <a
            className="w-8 cursor-pointer hover:scale-105 duration-300 "
            href="https://www.instagram.com/oleadapsycho/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/insta.svg"
              alt="Instagram"
              className=" text-yellow to-yellow"
            />
          </a>
        </ul>
      </nav>

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
