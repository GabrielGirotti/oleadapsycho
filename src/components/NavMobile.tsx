type NavMobileProps = {
  handleOpen: () => void;
  open: boolean;
};

export default function NavMobile({ handleOpen, open }: NavMobileProps) {
  return (
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
          <img src="/yt.svg" alt="Youtube" className=" text-yellow to-yellow" />
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
  );
}
