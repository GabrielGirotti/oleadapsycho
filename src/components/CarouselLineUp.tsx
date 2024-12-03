import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CarouselLineUp() {
  return (
    <Carousel infiniteLoop={true} className=" w-[90vw] max-w-[600px]">
      <div>
        <img src="/lineup/z.avif" alt="Angry Zeta" />
      </div>
      <div>
        <img src="/lineup/ratas.avif" alt="Las Ratas Sicodelicas" />
      </div>
      <div>
        <img src="/lineup/jf.avif" alt="Jinetes Fantasmas" />
      </div>
      <div>
        <img src="/lineup/fish.avif" alt="Fish'n Creepers" />
      </div>
      <div>
        <img src="/lineup/gb.avif" alt="Ghost Bastards" />
      </div>
      <div>
        <img src="/lineup/cardiax.avif" alt="Cardiax" />
      </div>
      <div>
        <img src="/lineup/marcos.avif" alt="Marcos Ferragut" />
      </div>
      <div>
        <img src="/lineup/horror.avif" alt="Horror Ink" />
      </div>
      <div>
        <img src="/lineup/clan.avif" alt="Clan Farsante" />
      </div>
      <div>
        <img src="/lineup/zorros.avif" alt="Zorros Petardos Salvajes" />
      </div>
      <div>
        <img src="/lineup/peyo.avif" alt="Elvis Peyo Barrios" />
      </div>
      <div>
        <img src="/lineup/mancos.avif" alt="Mancos" />
      </div>

      <div>
        <img src="/lineup/sickbay.avif" alt="Sick Bay" />
      </div>
      <div>
        <img src="/lineup/nervios.avif" alt="Nervios Calavera" />
      </div>
      <div>
        <img src="/lineup/connie.avif" alt="Connie Darko" />
      </div>
      <div>
        <img src="/lineup/nasty.avif" alt="Nasty Neighbours" />
      </div>
      <div>
        <img src="/lineup/criadores.avif" alt="Criadores de Odio" />
      </div>
      <div>
        <img src="/lineup/nickenson.avif" alt="Nickenson" />
      </div>
      <div>
        <img src="/lineup/tequila.avif" alt="Tequila Pontiac" />
      </div>
      <div>
        <img src="/lineup/bitter.avif" alt="Bitter Shoes" />
      </div>
      <div>
        <img src="/lineup/links.avif" alt="Los Links" />
      </div>
      <div>
        <img src="/lineup/dias.avif" alt="Dias de Noche" />
      </div>
    </Carousel>
  );
}
