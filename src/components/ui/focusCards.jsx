"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

function Card({ card, index, hoveredIndex, setHoveredIndex }) {
  const isHovered = hoveredIndex === index;
  const isOther = hoveredIndex !== null && hoveredIndex !== index;

  return (
    <div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="relative overflow-hidden rounded-xl h-60 md:h-96 w-full cursor-pointer group transition-transform duration-300 ease-in-out"
    >
      <img
        src={card.src}
        alt={card.title}
        className={cn(
          "w-full h-full object-cover transform transition-transform duration-500 ease-in-out",
          isHovered ? "scale-125" : "scale-100"
        )}
      />

      {/* Overlay sombre sur les autres */}
      {isOther && (
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 z-10" />
      )}

      {/* Titre avec fond dégradé */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-4 py-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
        <p className="text-white text-lg md:text-xl font-semibold">
          {card.title}
        </p>
      </div>
    </div>
  );
}

export function FocusCards({ cards }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 py-10 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}
    </div>
  );
}
