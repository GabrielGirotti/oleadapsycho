import CarouselLineUp from "./CarouselLineUp";

export default function LineUp() {
  return (
    <section id="lineup" className=" flex flex-col items-center mt-8 gap-4">
      <h2 className=" mt-2 border-y-4 border-yellow font-metal text-yellow py-2 px-4 text-5xl uppercase font-bold tracking-wide">
        Lineup
      </h2>
      <CarouselLineUp />
    </section>
  );
}
