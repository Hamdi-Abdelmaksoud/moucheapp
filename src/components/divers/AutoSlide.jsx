import Image from "next/image";
import Resume from "./Resume";

export default function AutoSlide({ pics }) {
  const images = [...pics, ...pics]; // duplicate for scroll loop

  return (
    <div className="flex flex-col items-center ml-2">
      <Resume />

      <div className="w-[80%] h-[250px] mx-auto relative overflow-hidden flex">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative w-[200px] h-[250px] animate-scroll-left"
            style={{ animationDelay: `calc(60s / 10 * (${10 - i}) * -1)` }}
          >
            <Image
              src={img.url}
              alt={img.title}
              fill
              sizes="100%"
              className="rounded-b-md object-cover"
              priority={i === 0} // only preload the first image
            />
          </div>
        ))}
      </div>
    </div>
  );
}
