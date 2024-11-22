import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CarouselLineUp() {
  return (
    <Carousel infiniteLoop={true} className=" w-[90vw] max-w-[600px]">
      <div>
        <img src="/lineup/z.png" alt="Angry Zeta" />
      </div>
      <div>
        <img src="/lineup/ratas.png" alt="Las Ratas Sicodelicas" />
      </div>
      <div>
        <img src="/lineup/jf.png" alt="Jinetes Fantasmas" />
      </div>
      <div>
        <img src="/lineup/fish.png" alt="Fish'n Creepers" />
      </div>
      <div>
        <img src="/lineup/gb.png" alt="Ghost Bastards" />
      </div>
      <div>
        <img src="/lineup/cardiax.png" alt="Cardiax" />
      </div>
      <div>
        <img src="/lineup/marcos.png" alt="Marcos Ferragut" />
      </div>
      <div>
        <img src="/lineup/horror.png" alt="Horror Ink" />
      </div>
      <div>
        <img src="/lineup/clan.png" alt="Clan Farsante" />
      </div>
      <div>
        <img src="/lineup/zorros.png" alt="Zorros Petardos Salvajes" />
      </div>
      <div>
        <img src="/lineup/peyo.png" alt="Elvis Peyo Barrios" />
      </div>
      <div>
        <img src="/lineup/mancos.png" alt="Mancos" />
      </div>

      <div>
        <img src="/lineup/sickbay.png" alt="Sick Bay" />
      </div>
      <div>
        <img src="/lineup/nervios.png" alt="Nervios Calavera" />
      </div>
      <div>
        <img src="/lineup/connie.png" alt="Connie Darko" />
      </div>
      <div>
        <img src="/lineup/nasty.png" alt="Nasty Neighbours" />
      </div>
      <div>
        <img src="/lineup/criadores.png" alt="Criadores de Odio" />
      </div>
      <div>
        <img src="/lineup/nickenson.png" alt="Nickenson" />
      </div>
      <div>
        <img src="/lineup/tequila.png" alt="Tequila Pontiac" />
      </div>
      <div>
        <img src="/lineup/bitter.png" alt="Bitter Shoes" />
      </div>
      <div>
        <img src="/lineup/links.png" alt="Los Links" />
      </div>
      <div>
        <img src="/lineup/dias.png" alt="Dias de Noche" />
      </div>
    </Carousel>
  );
}
