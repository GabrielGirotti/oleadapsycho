export default function Sponsors() {
  return (
    <section id="sponsors" className="flex flex-col items-center mt-8 gap-4">
      <h2 className=" mt-2 border-y-4 border-yellow font-metal text-yellow py-2 px-4 text-4xl uppercase font-bold tracking-wide">
        sponsors
      </h2>

      <ul className="flex items-center justify-center flex-wrap w-[90vw] max-w-[700px] gap-2">
        <li className=" cursor-pointer hover:scale-105 duration-300 lg:opacity-35 hover:opacity-100">
          <a
            href="https://www.instagram.com/fernetkillercrew/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/sponsors/fkc.png"
              alt="Fernet Killer Crew"
              className="w-40"
            />
          </a>
        </li>

        <li className=" cursor-pointer hover:scale-105 duration-300 lg:opacity-35 hover:opacity-100">
          <a
            href="https://www.instagram.com/missmoonage/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/sponsors/miss.png" alt="Miss Monage" className="w-40" />
          </a>
        </li>

        <li className=" cursor-pointer hover:scale-105 duration-300 lg:opacity-35 hover:opacity-100">
          <a
            href="https://www.instagram.com/brainszw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/sponsors/bz.png"
              alt="Brains Zombie Wear"
              className="w-40"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}
