"use client";

import Image from "next/image";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Title from "./Title";
import { useEffect, useState } from "react";

export default function WeddingSlide({ pics }) {
  const [current, setCurrent] = useState(0);
  const length = pics.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };
 
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div
      style={{ backgroundColor: "#ffdfb7" }}
      className="min-w-full  p-8 flex flex-col sm:flex-row items-center justify-center"
    >
      <Title />
      <div className="flex items-center justify-center relative">
        <SlArrowLeft
          onClick={prevSlide}
          className="absolute z-20 left-0 w-[70px] h-[100px] text-orange-400 cursor-pointer lg:static lg:w-[150px] lg:h-[150px]"
          aria-label="Image précédente"
        />
        <div className="relative bg-black my-10 w-[320px] h-[400px] overflow-hidden lg:w-[400px]">
          {pics.length > 0 ? (
            pics.map((pic, i) => (
              <div
                key={pic.id || i}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === current ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={pic.url}
                  alt={pic.title}
                  fill
                  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 500px, 600px"
                  style={{ objectFit: "cover" }}
                  priority={i === current} 
                />
              </div>
            ))
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white text-xl">
              Aucune photo disponible pour le moment.
            </div>
          )}
        </div>
        <SlArrowRight
          onClick={nextSlide}
          className="absolute z-20 right-0 w-[70px] h-[100px] text-orange-400 cursor-pointer lg:static lg:w-[150px] lg:h-[150px]"
          aria-label="Image suivante"
        />
      </div>
    </div>
  );
}
