"use client";
import { TbBorderCornerSquare } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { TbBorderCornerPill } from "react-icons/tb";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);
  const [rotations, setRotations] = useState([]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    const generated = testimonials.map(() => Math.floor(Math.random() * 21) - 10);
    setRotations(generated);
  }, [testimonials]);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="max-w-[450px]  w-full h-[430px] relative p-2">
      {/* Icones décoratifs */}
      <TbBorderCornerPill className="text-orange-400 text-4xl absolute top-[-10px] right-[-8px] z-50 rotate-90" />
      <TbBorderCornerPill
        className="text-orange-400 text-4xl absolute bottom-[-10px] left-[-10px] z-50"
        style={{ rotate: "270deg" }}
      />

      <div className="relative w-[96%] h-[400px] flex justify-center items-center">
        <AnimatePresence>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{
                opacity: 0,
                scale: 0.9,
                z: -100,
                rotate: rotations[index] || 0,
              }}
              animate={{
                opacity: isActive(index) ? 1 : 0.7,
                scale: isActive(index) ? 1 : 0.95,
                z: isActive(index) ? 0 : -100,
                rotate: isActive(index) ? 0 : rotations[index] || 0,
                zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                y: isActive(index) ? [0, -40, 0] : 0, // animation plus douce
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                z: 100,
                rotate: rotations[index] || 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute inset-0 origin-bottom"
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src={testimonial.url}
                  alt="slider image"
                  fill
                  priority={isActive(index)}
                  draggable={false}
                  className="object-fit"
                  quality={80}
                  sizes="(max-width: 500px) 90vw, 350px"
                     
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>

  );
};
