"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { DraggableCardContainer, DraggableCardBody } from "../ui/DraggableCard";

export default function Dragable({ pics }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 }); // visible à 30%

  const cardPosition = [
    "absolute top-15 left-[34%] sm:left-[43%] rotate-[-5deg]",
    "absolute top-60 left-[17%] rotate-[-5deg] sm:left-[26%] md:top-40 ",
    "absolute top-55 left-[31%] rotate-[5deg] sm:left-[50%] md:left-[60%] md:top-45",
    "absolute top-25 left-[18%] rotate-[-5deg] sm:left-[55%] ",
    "absolute top-35 left-[14%] rotate-[5deg] sm:left-[33%]",
    "absolute top-40 left-[23%] sm:left-[43%]",
  ];

  return (
    <div className="w-full h-[600px] overflow-hidden" ref={ref}>
      <DraggableCardContainer className="relative h-[600px] w-full items-center justify-center overflow-clip">
        <p className="absolute top-[40%] w-full text-center text-5xl font-black text-neutral-400 md:text-7xl dark:text-neutral-800">
          The fly sees the unseen
        </p>

        {pics.map((pic, index) => (
          <DraggableCardBody
            key={index}
            className={cardPosition[index]}
            reset={!isInView} // 👈 reset quand hors écran
          >
            <img
              src={pic.url}
              alt={pic.title}
              className="w-[200px] h-[250px] object-cover rounded-md pointer-events-none"
            />
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </div>
  );
}
