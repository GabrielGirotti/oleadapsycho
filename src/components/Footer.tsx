export default function Footer() {
  return (
    <footer className="bg-black2 p-6 flex flex-col lg:flex-row items-center justify-center gap-6">
      <nav className=" font-ubuntu  lg:text-base text-yellow lg:absolute right-32 flex gap-6">
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
          href="https://open.spotify.com/playlist/0rsvmPHAMj3qIWiSlIBcN6"
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
      </nav>
      <p className=" font-ubuntu  lg:text-base text-yellow ">
        Oleada Psycho 2025
      </p>
    </footer>
  );
}
